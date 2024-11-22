import type { DefaultTranslationsObject, Language } from '../types.js'

export const nlTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Account',
    accountOfCurrentUser: 'Account van huidige gebruiker',
    accountVerified: 'Account succesvol geverifieerd.',
    alreadyActivated: 'Al geactiveerd',
    alreadyLoggedIn: 'Al ingelogd',
    apiKey: 'API-sleutel',
    authenticated: 'Geverifieerd',
    backToLogin: 'Terug naar inloggen',
    beginCreateFirstUser: 'Om te beginnen maakt u uw eerste gebruiker aan.',
    changePassword: 'Wachtwoord wijzigen',
    checkYourEmailForPasswordReset:
      'Controleer uw e-mail voor een link waarmee u uw wachtwoord veilig opnieuw kunt instellen.',
    confirmGeneration: 'Bevestigen',
    confirmPassword: 'Wachtwoord bevestigen',
    createFirstUser: 'Eerste gebruiker aanmaken',
    emailNotValid: 'Het ingevoerde e-mailadres is niet geldig',
    emailOrUsername: 'E-mail of Gebruikersnaam',
    emailSent: 'E-mail verzonden',
    emailVerified: 'E-mail succesvol geverifieerd.',
    enableAPIKey: 'Activeer API-sleutel',
    failedToUnlock: 'Ontgrendeling mislukt',
    forceUnlock: 'Forceer ontgrendeling',
    forgotPassword: 'Wachtwoord vergeten',
    forgotPasswordEmailInstructions:
      'Vul hieronder uw e-mailadres in. U ontvangt een e-mailbericht met instructies om uw wachtwoord opnieuw in te stellen.',
    forgotPasswordQuestion: 'Wachtwoord vergeten?',
    forgotPasswordUsernameInstructions:
      'Voer hieronder uw gebruikersnaam in. Instructies over hoe u uw wachtwoord kunt resetten, worden naar het e-mailadres gestuurd dat aan uw gebruikersnaam is gekoppeld.',
    generate: 'Genereren',
    generateNewAPIKey: 'Genereer nieuwe API-sleutel',
    generatingNewAPIKeyWillInvalidate:
      'Het genereren van een nieuwe API-sleutel maakt de vorige sleutel <1>ongeldig</1>. Weet u zeker dat u wilt doorgaan?',
    lockUntil: 'Vergrendel tot',
    logBackIn: 'Opnieuw inloggen',
    loggedIn: 'Om in te loggen met een andere gebruiker, moet u zich eerst <0>uitloggen</0>.',
    loggedInChangePassword:
      'Om uw wachtwoord te wijzigen, gaat u naar <0>account</0> en wijzigt u daar uw wachtwoord.',
    loggedOutInactivity: 'U bent uitgelogd wegens inactiviteit.',
    loggedOutSuccessfully: 'U bent succesvol uitgelogd.',
    loggingOut: 'Uitloggen...',
    login: 'Inloggen',
    loginAttempts: 'Inlogpogingen',
    loginUser: 'Gebruiker inloggen',
    loginWithAnotherUser:
      'Om in te loggen met een andere gebruiker, moet u zich eerst <0>uitoggen</0>.',
    logOut: 'Uitloggen',
    logout: 'Uitloggen',
    logoutSuccessful: 'Uitloggen succesvol.',
    logoutUser: 'Gebruiker uitloggen',
    newAccountCreated:
      'Er is zojuist een nieuw account voor u aangemaakt waarmee u toegang krijgt tot <a href="{{serverURL}}">{{serverURL}}</a>. Klik op de volgende link, of plak onderstaande URL in uw browser om uw e-mailadres te verifiëren: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Na de verificatie van uw e-mail kunt u succesvol inloggen.',
    newAPIKeyGenerated: 'Nieuwe API-sleutel is gegenereerd.',
    newPassword: 'Nieuw wachtwoord',
    passed: 'Authenticatie Geslaagd',
    passwordResetSuccessfully: 'Wachtwoord succesvol opnieuw ingesteld.',
    resetPassword: 'Wachtwoord herstellen',
    resetPasswordExpiration: 'Vervaltijd van wachtwoord herstellen',
    resetPasswordToken: 'Token van wachtwoordreset',
    resetYourPassword: 'Reset uw wachtwoord',
    stayLoggedIn: 'Ingelogd blijven',
    successfullyRegisteredFirstUser: 'Eerste gebruiker succesvol geregistreerd.',
    successfullyUnlocked: 'Succesvol ontgrendeld',
    tokenRefreshSuccessful: 'Token vernieuwing succesvol.',
    unableToVerify: 'Verificatie niet mogelijk',
    username: 'Gebruikersnaam',
    usernameNotValid: 'De opgegeven gebruikersnaam is niet geldig',
    verified: 'Geverifieerd',
    verifiedSuccessfully: 'Succesvol geverifieerd',
    verify: 'Verifiëren',
    verifyUser: 'Gebruiker verifiëren',
    verifyYourEmail: 'Verifieer uw e-mailadres',
    youAreInactive:
      'U bent al een tijdje niet meer actief geweest en wordt binnenkort voor uw eigen veiligheid automatisch uitgelogd. Wilt u ingelogd blijven?',
    youAreReceivingResetPassword:
      'U ontvangt dit omdat u (of iemand anders) het wachtwoord voor uw account opnieuw heeft aangevraagd. Klik op de volgende link, of plak deze in uw browser om het proces te voltooien:',
    youDidNotRequestPassword:
      'Als u dit niet heeft aangevraagd, negeer dan deze e-mail en uw wachtwoord zal ongewijzigd blijven.',
  },
  error: {
    accountAlreadyActivated: 'Dit account is al geactiveerd.',
    autosaving: 'Er is een probleem opgetreden bij het automatisch bewaren van dit document.',
    correctInvalidFields: 'Gelieve de ongeldige velden te corrigeren.',
    deletingFile: 'Er is een fout opgetreden bij het verwijderen van dit bestand.',
    deletingTitle:
      'Er is een fout opgetreden tijdens het verwijderen van {{title}}. Controleer uw verbinding en probeer het opnieuw.',
    emailOrPasswordIncorrect: 'Het opgegeven e-mailadres of wachtwoord is onjuist.',
    followingFieldsInvalid_one: 'Het volgende veld is ongeldig:',
    followingFieldsInvalid_other: 'De volgende velden zijn ongeldig:',
    incorrectCollection: 'Ongeldige collectie',
    invalidFileType: 'Ongeldig bestandstype',
    invalidFileTypeValue: 'Ongeldig bestandstype: {{value}}',
    loadingDocument: 'Er was een probleem met het laden van het document met ID {{id}}.',
    localesNotSaved_one: 'De volgende taalinstelling kon niet worden opgeslagen:',
    localesNotSaved_other: 'De volgende taalinstellingen konden niet worden opgeslagen:',
    logoutFailed: 'Uitloggen mislukt.',
    missingEmail: 'E-mailadres ontbreekt.',
    missingIDOfDocument: 'ID ontbreekt van het aan te passen document.',
    missingIDOfVersion: 'ID van versie ontbreekt.',
    missingRequiredData: 'Ontbrekende vereiste gegevens.',
    noFilesUploaded: 'Er zijn geen bestanden geüpload.',
    noMatchedField: 'Geen overeenkomend veld gevonden voor "{{label}}"',
    notAllowedToAccessPage: 'U hebt geen toegang tot deze pagina.',
    notAllowedToPerformAction: 'U mag deze actie niet uitvoeren.',
    notFound: 'De gevraagde resource werd niet gevonden.',
    noUser: 'Geen gebruiker',
    previewing: 'Er was een probleem met het voorvertonen van dit document.',
    problemUploadingFile: 'Er was een probleem bij het uploaden van het bestand.',
    tokenInvalidOrExpired: 'Token is ongeldig of verlopen.',
    tokenNotProvided: 'Token niet verstrekt.',
    unableToDeleteCount: 'Kan {{count}} van {{total}} {{label}} niet verwijderen.',
    unableToUpdateCount: 'Kan {{count}} van {{total}} {{label}} niet updaten.',
    unauthorized: 'Ongeautoriseerd, u moet ingelogd zijn om dit verzoek te doen.',
    unknown: 'Er is een onbekende fout opgetreden.',
    unPublishingDocument: 'Er was een probleem met het depubliceren van dit document.',
    unspecific: 'Er is een fout opgetreden.',
    userEmailAlreadyRegistered: 'Een gebruiker met het opgegeven e-mailadres is al geregistreerd.',
    userLocked: 'Deze gebruiker is vergrendeld wegens te veel mislukte inlogpogingen.',
    usernameAlreadyRegistered: 'Een gebruiker met de opgegeven gebruikersnaam is al geregistreerd.',
    usernameOrPasswordIncorrect: 'De opgegeven gebruikersnaam of wachtwoord is onjuist.',
    valueMustBeUnique: 'De waarde moet uniek zijn',
    verificationTokenInvalid: 'Verificatietoken is ongeldig.',
  },
  fields: {
    addLabel: 'Voeg {{label}} toe',
    addLink: 'Voeg een link toe',
    addNew: 'Nieuw(e)',
    addNewLabel: 'Nieuw(e) {{label}} toevoegen',
    addRelationship: 'Nieuwe Relatie',
    addUpload: 'Upload Toevoegen',
    block: 'blok',
    blocks: 'blokken',
    blockType: 'Bloktype',
    chooseBetweenCustomTextOrDocument:
      'Kies tussen het invoeren van een aangepaste tekst-URL of een koppeling naar een ander document.',
    chooseDocumentToLink: 'Kies een document om naar te linken',
    chooseFromExisting: 'Kies uit bestaande',
    chooseLabel: 'Kies {{label}}',
    collapseAll: 'Alles samenvouwen',
    customURL: 'Eigen URL',
    editLabelData: 'Bewerk gegevens van {{label}}',
    editLink: 'Link bewerken',
    editRelationship: 'Relatie Relatie',
    enterURL: 'Voer een URL in',
    internalLink: 'Interne koppeling',
    itemsAndMore: '{{items}} en {{count}} meer',
    labelRelationship: '{{label}} relatie',
    latitude: 'Breedtegraad',
    linkedTo: 'Gekoppeld aan aan <0>{{label}}</0>',
    linkType: 'Koppelingstype',
    longitude: 'Lengtegraad',
    newLabel: 'Nieuw(e) {{label}}',
    openInNewTab: 'Openen in nieuw tabblad',
    passwordsDoNotMatch: 'Wachtwoorden komen niet overeen.',
    relatedDocument: 'Gerelateerd document',
    relationTo: 'Relatie tot',
    removeRelationship: 'Relatie Verwijderen',
    removeUpload: 'Verwijder Upload',
    saveChanges: 'Bewaar aanpassingen',
    searchForBlock: 'Zoeken naar een blok',
    selectExistingLabel: 'Selecteer bestaand(e) {{label}}',
    selectFieldsToEdit: 'Selecteer velden om te bewerken',
    showAll: 'Alles tonen',
    swapRelationship: 'Relatie Wisselen',
    swapUpload: 'Upload Verwisselen',
    textToDisplay: 'Tekst om weer te geven',
    toggleBlock: 'Blok togglen',
    uploadNewLabel: 'Upload nieuw(e) {{label}}',
  },
  general: {
    aboutToDelete:
      'U staat op het punt om {{label}} <1>{{title}}</1> te verwijderen. Weet u het zeker?',
    aboutToDeleteCount_many: 'Je staat op het punt {{count}} {{label}} te verwijderen',
    aboutToDeleteCount_one: 'Je staat op het punt {{count}} {{label}} te verwijderen',
    aboutToDeleteCount_other: 'Je staat op het punt {{count}} {{label}} te verwijderen',
    addBelow: 'Onderaan toevoegen',
    addFilter: 'Filter toevoegen',
    adminTheme: 'Adminthema',
    and: 'En',
    anotherUser: 'Een andere gebruiker',
    anotherUserTakenOver: 'Een andere gebruiker heeft de bewerking van dit document overgenomen.',
    applyChanges: 'Breng wijzigingen aan',
    ascending: 'Oplopend',
    automatic: 'Automatisch',
    backToDashboard: 'Terug naar dashboard',
    cancel: 'Annuleren',
    changesNotSaved:
      'Uw wijzigingen zijn niet bewaard. Als u weggaat zullen de wijzigingen verloren gaan.',
    clearAll: 'Alles wissen',
    close: 'Dichtbij',
    collapse: 'Samenvouwen',
    collections: 'Collecties',
    columns: 'Kolommen',
    columnToSort: 'Kolom om te sorteren',
    confirm: 'Bevestigen',
    confirmDeletion: 'Bevestig verwijdering',
    confirmDuplication: 'Bevestig duplicatie',
    copied: 'Gekopieerd',
    copy: 'Kopiëren',
    create: 'Aanmaken',
    created: 'Aangemaakt',
    createdAt: 'Aangemaakt op',
    createNew: 'Nieuw aanmaken',
    createNewLabel: 'Nieuw(e) {{label}} aanmaken',
    creating: 'Aanmaken',
    creatingNewLabel: 'Nieuw(e) {{label}} aanmaken',
    currentlyEditing:
      'is momenteel dit document aan het bewerken. Als je het overneemt, wordt voorkomen dat ze doorgaan met bewerken en kunnen ze ook niet-opgeslagen wijzigingen verliezen.',
    custom: 'Aangepast',
    dark: 'Donker',
    dashboard: 'Dashboard',
    delete: 'Verwijderen',
    deletedCountSuccessfully: '{{count}} {{label}} succesvol verwijderd.',
    deletedSuccessfully: 'Succesvol verwijderd.',
    deleting: 'Verwijderen...',
    depth: 'Diepte',
    descending: 'Aflopend',
    deselectAllRows: 'Deselecteer alle rijen',
    document: 'Document',
    documentLocked: 'Document vergrendeld',
    documents: 'Documenten',
    duplicate: 'Dupliceren',
    duplicateWithoutSaving: 'Dupliceren zonder wijzigingen te bewaren',
    edit: 'Bewerk',
    editedSince: 'Bewerkt sinds',
    editing: 'Bewerken',
    editingLabel_many: 'Bewerken {{count}} {{label}}',
    editingLabel_one: 'Bewerken {{count}} {{label}}',
    editingLabel_other: 'Bewerken {{count}} {{label}}',
    editingTakenOver: 'Bewerking overgenomen',
    editLabel: 'Bewerk {{label}}',
    email: 'E-mail',
    emailAddress: 'E-maildres',
    enterAValue: 'Waarde invoeren',
    error: 'Fout',
    errors: 'Fouten',
    fallbackToDefaultLocale: 'Terugval naar standaardtaal',
    false: 'Onwaar',
    filter: 'Filter',
    filters: 'Filters',
    filterWhere: 'Filter {{label}} waar',
    globals: 'Globalen',
    goBack: 'Ga terug',
    isEditing: 'is aan het bewerken',
    language: 'Taal',
    lastModified: 'Laatst gewijzigd',
    leaveAnyway: 'Toch weggaan',
    leaveWithoutSaving: 'Verlaten zonder op te slaan',
    light: 'Licht',
    livePreview: 'Voorbeeld',
    loading: 'Laden',
    locale: 'Taal',
    locales: 'Landinstellingen',
    menu: 'Menu',
    moveDown: 'Verplaats naar beneden',
    moveUp: 'Verplaats naar boven',
    newPassword: 'Nieuw wachtwoord',
    next: 'Volgende',
    noFiltersSet: 'Geen filters ingesteld',
    noLabel: 'Geen "{{label}}"',
    none: 'Niets',
    noOptions: 'Geen opties',
    noResults:
      'Geen {{label}} gevonden. Of er bestaat nog geen {{label}}, of niets komt overeen met de hierboven gespecifieerde filters.',
    notFound: 'Niet gevonden',
    nothingFound: 'Niets gevonden',
    noValue: 'Geen waarde',
    of: 'van',
    only: 'Alleen',
    open: 'Open',
    or: 'Of',
    order: 'Volgorde',
    pageNotFound: 'Pagina niet gevonden',
    password: 'Wachtwoord',
    payloadSettings: 'Payload Instellingen',
    perPage: 'Per pagina: {{limit}}',
    previous: 'Vorige',
    remove: 'Verwijderen',
    reset: 'Resetten',
    row: 'Rij',
    rows: 'Rijen',
    save: 'Bewaar',
    saving: 'Bewaren...',
    searchBy: 'Zoeken op {{label}}',
    selectAll: 'Alles selecteren {{count}} {{label}}',
    selectAllRows: 'Selecteer alle rijen',
    selectedCount: '{{count}} {{label}} geselecteerd',
    selectValue: 'Selecteer een waarde',
    showAllLabel: 'Toon alle {{label}}',
    sorryNotFound: 'Sorry, er is niets dat overeen komt met uw verzoek.',
    sort: 'Sorteer',
    sortByLabelDirection: 'Sorteer op {{label}} {{direction}}',
    stayOnThisPage: 'Blijf op deze pagina',
    submissionSuccessful: 'Indiening succesvol.',
    submit: 'Indienen',
    submitting: 'Inzenden...',
    success: 'Succes',
    successfullyCreated: '{{label}} succesvol aangemaakt.',
    successfullyDuplicated: '{{label}} succesvol gedupliceerd.',
    takeOver: 'Overnemen',
    thisLanguage: 'Nederlands',
    titleDeleted: '{{label}} "{{title}}" succesvol verwijderd.',
    true: 'Waar',
    unauthorized: 'Onbevoegd',
    unsavedChangesDuplicate: 'U heeft onbewaarde wijzigingen. Wilt u doorgaan met dupliceren?',
    untitled: 'Zonder titel',
    updatedAt: 'Aangepast op',
    updatedCountSuccessfully: '{{count}} {{label}} succesvol bijgewerkt.',
    updatedSuccessfully: 'Succesvol aangepast.',
    updating: 'Bijwerken',
    uploading: 'Uploaden',
    uploadingBulk: 'Bezig met uploaden {{current}} van {{total}}',
    user: 'Gebruiker',
    username: 'Gebruikersnaam',
    users: 'Gebruikers',
    value: 'Waarde',
    viewReadOnly: 'Alleen-lezen weergave',
    welcome: 'Welkom',
  },
  operators: {
    contains: 'bevat',
    equals: 'is gelijk aan',
    exists: 'bestaat',
    intersects: 'kruist',
    isGreaterThan: 'is groter dan',
    isGreaterThanOrEqualTo: 'is groter dan of gelijk aan',
    isIn: 'is binnen',
    isLessThan: 'is kleiner dan',
    isLessThanOrEqualTo: 'is kleiner dan of gelijk aan',
    isLike: 'is als',
    isNotEqualTo: 'is niet gelijk aan',
    isNotIn: 'zit er niet in',
    near: 'nabij',
    within: 'binnen',
  },
  upload: {
    addFile: 'Bestand toevoegen',
    addFiles: 'Bestanden toevoegen',
    bulkUpload: 'Bulk Upload',
    crop: 'Bijsnijden',
    cropToolDescription:
      'Sleep de hoeken van het geselecteerde gebied, teken een nieuw gebied of pas de waarden hieronder aan.',
    dragAndDrop: 'Sleep een bestand',
    dragAndDropHere: 'of sleep een bestand naar hier',
    editImage: 'Afbeelding bewerken',
    fileName: 'Bestandsnaam',
    fileSize: 'Bestandsgrootte',
    filesToUpload: 'Bestanden om te uploaden',
    fileToUpload: 'Bestand om te uploaden',
    focalPoint: 'Focuspunt',
    focalPointDescription:
      'Sleep het focuspunt rechtstreeks op de voorvertoning of pas de waarden hieronder aan.',
    height: 'Hoogte',
    lessInfo: 'Minder info',
    moreInfo: 'Meer info',
    pasteURL: 'URL plakken',
    previewSizes: 'Voorbeeldgroottes',
    selectCollectionToBrowse: 'Selecteer een collectie om door te bladeren',
    selectFile: 'Selecteer een bestand',
    setCropArea: 'Stel bijsnijdgebied in',
    setFocalPoint: 'Stel het brandpunt in',
    sizes: 'Groottes',
    sizesFor: 'Maten voor {{label}}',
    width: 'Breedte',
  },
  validation: {
    emailAddress: 'Voer een geldig e-mailadres in.',
    enterNumber: 'Voer een geldig nummer in.',
    fieldHasNo: 'Dit veld heeft geen {{label}}',
    greaterThanMax: '{{value}} is groter dan de maximaal toegestane {{label}} van {{max}}.',
    invalidInput: 'Dit veld heeft een ongeldige invoer.',
    invalidSelection: 'Dit veld heeft een ongeldige selectie.',
    invalidSelections: 'Dit veld heeft de volgende ongeldige selecties:',
    lessThanMin: '{{value}} is kleiner dan de minimaal toegestane {{label}} van {{min}}.',
    limitReached: 'Limiet bereikt, er kunnen slechts {{max}} items worden toegevoegd.',
    longerThanMin: 'Deze waarde moet langer zijn dan de minimale lengte van {{minLength}} tekens.',
    notValidDate: '"{{value}}" is geen geldige datum.',
    required: 'Dit veld is verplicht.',
    requiresAtLeast: 'Dit veld vereist minstens {{count}} {{label}}.',
    requiresNoMoreThan: 'Dit veld vereist niet meer dan {{count}} {{label}}.',
    requiresTwoNumbers: 'Dit veld vereist twee nummers.',
    shorterThanMax: 'Dit veld moet korter zijn dan de maximale lengte van {{maxLength}} tekens.',
    trueOrFalse: 'Dit veld kan alleen waar of onwaar zijn.',
    username:
      'Voer een geldige gebruikersnaam in. Kan letters, cijfers, koppeltekens, punten en underscores bevatten.',
    validUploadID: 'Dit veld is geen geldige upload-ID.',
  },
  version: {
    type: 'Type',
    aboutToPublishSelection:
      'Je staat op het punt om alle {{label}} in de selectie te publiceren. Weet je het zeker?',
    aboutToRestore:
      'U staat op het punt dit {{label}} document te herstellen in de staat waarin het zich bevond op {{versionDate}}.',
    aboutToRestoreGlobal:
      'U staat op het punt om de global {{label}} te herstellen in de staat waarin het zich bevond op {{versionDate}}.',
    aboutToRevertToPublished:
      'U staat op het punt om de wijzigingen van dit document terug te draaien naar de gepubliceerde staat. Weet u het zeker?',
    aboutToUnpublish:
      'U staat op het punt om de publicatie van dit document ongedaan te maken. Weet u het zeker?',
    aboutToUnpublishSelection:
      'You are about to unpublish all {{label}} in the selection. Are you sure?',
    autosave: 'Automatisch bewaren',
    autosavedSuccessfully: 'Succesvol automatisch bewaard.',
    autosavedVersion: 'Automatisch bewaarde versie',
    changed: 'Gewijzigd',
    compareVersion: 'Vergelijk versie met:',
    confirmPublish: 'Bevestig publiceren',
    confirmRevertToSaved: 'Bevestig terugdraaien naar bewaarde versie',
    confirmUnpublish: 'Bevestig depubliceren',
    confirmVersionRestoration: 'Bevestig te herstellen versie',
    currentDocumentStatus: 'Huidig {{docStatus}} document',
    currentDraft: 'Huidige Concept',
    currentPublishedVersion: 'Huidige Gepubliceerde Versie',
    draft: 'Concept',
    draftSavedSuccessfully: 'Concept succesvol bewaard.',
    lastSavedAgo: 'Laatst opgeslagen {{distance}} geleden',
    noFurtherVersionsFound: 'Geen verdere versies gevonden',
    noRowsFound: 'Geen {{label}} gevonden',
    noRowsSelected: 'Geen {{label}} geselecteerd',
    preview: 'Voorbeeld',
    previouslyPublished: 'Eerder gepubliceerd',
    problemRestoringVersion: 'Er was een probleem bij het herstellen van deze versie',
    publish: 'Publiceren',
    publishAll: 'Publiceer alle locales',
    publishChanges: 'Publiceer wijzigingen',
    published: 'Gepubliceerd',
    publishIn: 'Publiceer in {{locale}}',
    publishing: 'Publicatie',
    restoreAsDraft: 'Herstellen als concept',
    restoredSuccessfully: 'Herstelling succesvol.',
    restoreThisVersion: 'Herstel deze versie',
    restoring: 'Herstellen...',
    reverting: 'Terugdraaien...',
    revertToPublished: 'Terugdraaien naar gepubliceerde versie',
    saveDraft: 'Bewaar concept',
    selectLocales: 'Selecteer locales om weer te geven',
    selectVersionToCompare: 'Selecteer een versie om te vergelijken',
    showingVersionsFor: 'Versies tonen voor:',
    showLocales: 'Toon locales:',
    status: 'Status',
    unpublish: 'Publicatie ongedaan maken',
    unpublishing: 'Publicatie ongedaan maken...',
    version: 'Versie',
    versionCount_many: '{{count}} versies gevonden',
    versionCount_none: 'Geen versies gevonden',
    versionCount_one: '{{count}} versie gevonden',
    versionCount_other: '{{count}} versies gevonden',
    versionCreatedOn: '{{version}} aangemaakt op:',
    versionID: 'Versie-ID',
    versions: 'Versies',
    viewingVersion: 'Bekijk versie voor {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Bekijk versie voor global {{entityLabel}}',
    viewingVersions: 'Bekijk versies voor {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: '`Bekijk versies voor global {{entityLabel}}',
  },
}

export const nl: Language = {
  dateFNSKey: 'nl',
  translations: nlTranslations,
}
