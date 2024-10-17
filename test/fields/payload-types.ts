/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    'array-fields': ArrayField;
    'block-fields': BlockField;
    'checkbox-fields': CheckboxField;
    'code-fields': CodeField;
    'collapsible-fields': CollapsibleField;
    'date-fields': DateField;
    'email-fields': EmailField;
    'radio-fields': RadioField;
    'row-fields': RowField;
    'json-fields': JsonField;
    'number-fields': NumberField;
    'point-fields': PointField;
    'select-fields': SelectField;
    'text-fields': TextField;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  locale: 'en' | 'es';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  canViewConditionalField?: boolean | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "array-fields".
 */
export interface ArrayField {
  id: string;
  title?: string | null;
  items: {
    text: string;
    localizedText?: string | null;
    subArray?:
      | {
          text?: string | null;
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  collapsedArray?:
    | {
        text: string;
        id?: string | null;
      }[]
    | null;
  localized: {
    text: string;
    id?: string | null;
  }[];
  readOnly?:
    | {
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  potentiallyEmptyArray?:
    | {
        text?: string | null;
        groupInRow?: {
          textInGroupInRow?: string | null;
        };
        id?: string | null;
      }[]
    | null;
  rowLabelAsComponent?:
    | {
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  arrayWithMinRows?:
    | {
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  disableSort?:
    | {
        text: string;
        id?: string | null;
      }[]
    | null;
  nestedArrayLocalized?:
    | {
        array?:
          | {
              text?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "block-fields".
 */
export interface BlockField {
  id: string;
  blocks: (
    | {
        text: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        number: number;
        id?: string | null;
        blockName?: string | null;
        blockType: 'number';
      }
    | {
        subBlocks?:
          | (
              | {
                  text: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'text';
                }
              | {
                  number: number;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'number';
                }
            )[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'subBlocks';
      }
    | {
        textInCollapsible?: string | null;
        textInRow?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'tabs';
      }
  )[];
  duplicate: (
    | {
        text: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        number: number;
        id?: string | null;
        blockName?: string | null;
        blockType: 'number';
      }
    | {
        subBlocks?:
          | (
              | {
                  text: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'text';
                }
              | {
                  number: number;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'number';
                }
            )[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'subBlocks';
      }
    | {
        textInCollapsible?: string | null;
        textInRow?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'tabs';
      }
  )[];
  collapsedByDefaultBlocks: (
    | {
        text: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedContent';
      }
    | {
        number: number;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedNumber';
      }
    | {
        subBlocks?:
          | (
              | {
                  text: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'text';
                }
              | {
                  number: number;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'number';
                }
            )[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedSubBlocks';
      }
    | {
        textInCollapsible?: string | null;
        textInRow?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedTabs';
      }
  )[];
  disableSort: (
    | {
        text: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedContent';
      }
    | {
        number: number;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedNumber';
      }
    | {
        subBlocks?:
          | (
              | {
                  text: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'text';
                }
              | {
                  number: number;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'number';
                }
            )[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedSubBlocks';
      }
    | {
        textInCollapsible?: string | null;
        textInRow?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedTabs';
      }
  )[];
  localizedBlocks: (
    | {
        text: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedContent';
      }
    | {
        number: number;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedNumber';
      }
    | {
        subBlocks?:
          | (
              | {
                  text: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'text';
                }
              | {
                  number: number;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'number';
                }
            )[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedSubBlocks';
      }
    | {
        textInCollapsible?: string | null;
        textInRow?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedTabs';
      }
  )[];
  i18nBlocks?:
    | {
        text?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'text';
      }[]
    | null;
  blocksWithLocalizedArray?:
    | {
        array?:
          | {
              text?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'localizedArray';
      }[]
    | null;
  blocksWithSimilarConfigs?:
    | (
        | {
            items?:
              | {
                  title: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block-a';
          }
        | {
            items?:
              | {
                  title2: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block-b';
          }
        | {
            group?: {
              text?: string | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'group-block';
          }
      )[]
    | null;
  blocksWithSimilarGroup?:
    | (
        | {
            group?: {
              text?: string | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'group-block';
          }
        | {
            items?:
              | {
                  title2: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block-b';
          }
      )[]
    | null;
  blocksWithMinRows?:
    | {
        blockTitle?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  customBlocks?:
    | (
        | {
            block1Title?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block-1';
          }
        | {
            block2Title?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block-2';
          }
      )[]
    | null;
  relationshipBlocks?:
    | {
        relationship?: (string | null) | TextField;
        id?: string | null;
        blockName?: string | null;
        blockType: 'relationships';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text-fields".
 */
export interface TextField {
  id: string;
  text: string;
  localizedText?: string | null;
  i18nText?: string | null;
  defaultString?: string | null;
  defaultEmptyString?: string | null;
  defaultFunction?: string | null;
  defaultAsync?: string | null;
  overrideLength?: string | null;
  fieldWithDefaultValue?: string | null;
  dependentOnFieldWithDefaultValue?: string | null;
  hasMany?: string[] | null;
  validatesHasMany?: string[] | null;
  localizedHasMany?: string[] | null;
  withMinRows?: string[] | null;
  withMaxRows?: string[] | null;
  disableListColumnText?: string | null;
  disableListFilterText?: string | null;
  array?:
    | {
        texts?: string[] | null;
        id?: string | null;
      }[]
    | null;
  blocks?:
    | {
        texts?: string[] | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "checkbox-fields".
 */
export interface CheckboxField {
  id: string;
  checkbox: boolean;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "code-fields".
 */
export interface CodeField {
  id: string;
  javascript?: string | null;
  typescript?: string | null;
  json?: string | null;
  html?: string | null;
  css?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collapsible-fields".
 */
export interface CollapsibleField {
  id: string;
  text: string;
  group?: {
    textWithinGroup?: string | null;
    subGroup?: {
      textWithinSubGroup?: string | null;
    };
  };
  someText?: string | null;
  group2?: {
    textWithinGroup?: string | null;
    subGroup?: {
      textWithinSubGroup?: string | null;
    };
  };
  functionTitleField?: string | null;
  componentTitleField?: string | null;
  nestedTitle?: string | null;
  arrayWithCollapsibles?:
    | {
        innerCollapsible?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "date-fields".
 */
export interface DateField {
  id: string;
  default: string;
  timeOnly?: string | null;
  timeOnlyWithCustomFormat?: string | null;
  dayOnly?: string | null;
  dayAndTime?: string | null;
  monthOnly?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "email-fields".
 */
export interface EmailField {
  id: string;
  email: string;
  localizedEmail?: string | null;
  emailWithAutocomplete?: string | null;
  i18nEmail?: string | null;
  defaultEmail?: string | null;
  defaultEmptyString?: string | null;
  defaultFunction?: string | null;
  defaultAsync?: string | null;
  customLabel?: string | null;
  customError?: string | null;
  beforeAndAfterInput?: string | null;
  disableListColumnText?: string | null;
  disableListFilterText?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "radio-fields".
 */
export interface RadioField {
  id: string;
  radio?: ('one' | 'two' | 'three') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "row-fields".
 */
export interface RowField {
  id: string;
  title: string;
  field_with_width_a?: string | null;
  field_with_width_b?: string | null;
  field_with_width_30_percent?: string | null;
  field_with_width_60_percent?: string | null;
  field_with_width_20_percent?: string | null;
  field_within_collapsible_a?: string | null;
  field_within_collapsible_b?: string | null;
  field_20_percent_width_within_row_a?: string | null;
  no_set_width_within_row_b?: string | null;
  no_set_width_within_row_c?: string | null;
  field_20_percent_width_within_row_d?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "json-fields".
 */
export interface JsonField {
  id: string;
  json?: {
    foo?: 'bar' | 'foobar';
    number?: 10 | 5;
    [k: string]: unknown;
  };
  group?: {
    jsonWithinGroup?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "number-fields".
 */
export interface NumberField {
  id: string;
  number?: number | null;
  min?: number | null;
  max?: number | null;
  positiveNumber?: number | null;
  negativeNumber?: number | null;
  decimalMin?: number | null;
  decimalMax?: number | null;
  defaultNumber?: number | null;
  hasMany?: number[] | null;
  validatesHasMany?: number[] | null;
  localizedHasMany?: number[] | null;
  withMinRows?: number[] | null;
  array?:
    | {
        numbers?: number[] | null;
        id?: string | null;
      }[]
    | null;
  blocks?:
    | {
        numbers?: number[] | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "point-fields".
 */
export interface PointField {
  id: string;
  /**
   * @minItems 2
   * @maxItems 2
   */
  point: [number, number];
  /**
   * @minItems 2
   * @maxItems 2
   */
  localized?: [number, number] | null;
  group?: {
    /**
     * @minItems 2
     * @maxItems 2
     */
    point?: [number, number] | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "select-fields".
 */
export interface SelectField {
  id: string;
  select?: ('one' | 'two' | 'three') | null;
  selectReadOnly?: ('one' | 'two' | 'three') | null;
  selectHasMany?: ('one' | 'two' | 'three' | 'four' | 'five' | 'six')[] | null;
  selectHasManyLocalized?: ('one' | 'two')[] | null;
  selectI18n?: ('one' | 'two' | 'three') | null;
  simple?: ('One' | 'Two' | 'Three') | null;
  settings?: {
    category?: ('a' | 'b')[] | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'array-fields';
        value: string | ArrayField;
      } | null)
    | ({
        relationTo: 'block-fields';
        value: string | BlockField;
      } | null)
    | ({
        relationTo: 'checkbox-fields';
        value: string | CheckboxField;
      } | null)
    | ({
        relationTo: 'code-fields';
        value: string | CodeField;
      } | null)
    | ({
        relationTo: 'collapsible-fields';
        value: string | CollapsibleField;
      } | null)
    | ({
        relationTo: 'date-fields';
        value: string | DateField;
      } | null)
    | ({
        relationTo: 'email-fields';
        value: string | EmailField;
      } | null)
    | ({
        relationTo: 'radio-fields';
        value: string | RadioField;
      } | null)
    | ({
        relationTo: 'row-fields';
        value: string | RowField;
      } | null)
    | ({
        relationTo: 'json-fields';
        value: string | JsonField;
      } | null)
    | ({
        relationTo: 'number-fields';
        value: string | NumberField;
      } | null)
    | ({
        relationTo: 'point-fields';
        value: string | PointField;
      } | null)
    | ({
        relationTo: 'select-fields';
        value: string | SelectField;
      } | null)
    | ({
        relationTo: 'text-fields';
        value: string | TextField;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}