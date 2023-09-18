/* eslint-disable no-await-in-loop */
import type { SQL } from 'drizzle-orm'
import type { Field, Operator, Where } from 'payload/types'

import { and } from 'drizzle-orm'
import { validOperators } from 'payload/types'

import type { GenericColumn, PostgresAdapter } from '../types'
import type { BuildQueryJoins } from './buildQuery'

import { buildAndOrConditions } from './buildAndOrConditions'
import { getTableColumnFromPath } from './getTableColumnFromPath'
import { operatorMap } from './operatorMap'
import { sanitizeQueryValue } from './sanitizeQueryValue'

type Args = {
  adapter: PostgresAdapter
  fields: Field[]
  joins: BuildQueryJoins
  locale: string
  selectFields: Record<string, GenericColumn>
  tableName: string
  where: Where
}

export async function parseParams({
  adapter,
  fields,
  joins,
  locale,
  selectFields,
  tableName,
  where,
}: Args): Promise<SQL> {
  let result: SQL
  const constraints: SQL[] = []

  if (typeof where === 'object' && Object.keys(where).length > 0) {
    // We need to determine if the whereKey is an AND, OR, or a schema path
    for (const relationOrPath of Object.keys(where)) {
      if (relationOrPath) {
        const condition = where[relationOrPath]
        let conditionOperator: 'and' | 'or'
        if (relationOrPath.toLowerCase() === 'and') {
          conditionOperator = 'and'
        } else if (relationOrPath.toLowerCase() === 'or') {
          conditionOperator = 'or'
        }
        if (Array.isArray(condition)) {
          const builtConditions = await buildAndOrConditions({
            adapter,
            fields,
            joins,
            locale,
            selectFields,
            tableName,
            where: condition,
          })
          if (builtConditions.length > 0) {
            if (result) {
              result = operatorMap[conditionOperator](result, ...builtConditions)
            } else {
              result = operatorMap[conditionOperator](...builtConditions)
            }
          }
        } else {
          // It's a path - and there can be multiple comparisons on a single path.
          // For example - title like 'test' and title not equal to 'tester'
          // So we need to loop on keys again here to handle each operator independently
          const pathOperators = where[relationOrPath]
          if (typeof pathOperators === 'object') {
            for (const operator of Object.keys(pathOperators)) {
              if (validOperators.includes(operator as Operator)) {
                const {
                  columnName,
                  constraints: queryConstraints,
                  field,
                  rawColumn,
                  table,
                } = getTableColumnFromPath({
                  adapter,
                  collectionPath: relationOrPath,
                  fields,
                  joins,
                  locale,
                  pathSegments: relationOrPath.split('.'),
                  selectFields,
                  tableName,
                })

                const { operator: queryOperator, value: queryValue } = sanitizeQueryValue({
                  field,
                  operator,
                  val: where[relationOrPath][operator],
                })

                queryConstraints.forEach(({ columnName: col, table: constraintTable, value }) => {
                  constraints.push(operatorMap.equals(constraintTable[col], value))
                })
                if (!operatorMap[queryOperator]) {
                  console.log('found it')
                }
                constraints.push(
                  operatorMap[queryOperator](rawColumn || table[columnName], queryValue),
                )
              }
            }
          }
        }
      }
    }
  }
  if (constraints.length > 0) {
    if (result) {
      result = and(result, ...constraints)
    } else {
      result = and(...constraints)
    }
  }
  if (constraints.length === 1 && !result) {
    ;[result] = constraints
  }

  return result
}
