export const momentLocale = 'cs'

export const strings = {
  _NOT_LOCALIZED: (key) => `${key} ještě nebylo přeloženo do češtiny.`,
  ADMIN_CLEAR_WISHLISTS_BUTTON: 'Odstranit všechny seznamy',
  ADMIN_CLEAR_WISHLISTS_DESCRIPTION:
    'Tohle obratem <b>odstraní všechny seznamy přání!</b> Zvažte vyvoření zálohy databáze, než budete pokračovat.',
  ADMIN_CLEAR_WISHLISTS_HEADER: 'Odstanění seznamů',
  ADMIN_SETTINGS_CLEARDB_BUTTON: 'Odstranění seznamů',
  ADMIN_SETTINGS_CLEARDB_DESCRIPTION:
    '<b>Upozornění</b>: Tyto volby <b>odstraní data</b>! Zvažte vyvoření zálohy databáze, než budete pokračovat.',
  ADMIN_SETTINGS_CLEARDB_HEADER: 'Odstranění dat',
  ADMIN_SETTINGS_CLEARDB_SUCCESS: 'Všechny seznamy úspěšně vymazány',
  ADMIN_SETTINGS_HEADER: 'Admin Settings',
  ADMIN_SETTINGS_USERS_ADD_BUTTON: 'Přidat uživatele',
  ADMIN_SETTINGS_USERS_ADD_HEADER: 'Přidat uživatele',
  ADMIN_SETTINGS_USERS_ADD_PLACEHOLDER: 'Martin',
  ADMIN_SETTINGS_USERS_ADD_USERNAME: 'Uživatelské jméno',
  ADMIN_SETTINGS_USERS_ADD_ERROR_USERNAME_EMPTY:
    'Uživatelské jméno nesmí být prázdné.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_FAIL_ADMIN:
    'Není možné odstanit uživatele s právy správce.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_SUCCESS: (name) =>
    `Uživatel ${name} úspěšně odstraněn`,
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_NOT_ADMIN: 'uživatel nemá oprávnění správce',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SELF: 'Nemůžete odebrat oprávění sami sobě.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SUCCESS: (name) =>
    `${name} už nemá oprávnění správce.`,
  ADMIN_SETTINGS_USERS_EDIT_IMPERSONATE_SUCCESS: (name) =>
    `Nyní jste přihlášen jako ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_NO_USERNAME_PROVIDED: 'Nevybrán žádný uživatel.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_ALREADY_ADMIN:
    'Uživatel již má oprávnění správce.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_DEMOTE_NOT_FOUND: 'Uživatel nenalezen.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_SUCCESS: (name) =>
    `Oprávnění spravce přidělena ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_RENAMED_USER: 'Uživatel přejmenován!',
  ADMIN_SETTINGS_USERS_EDIT_SAME_NAME:
    'Původní uživatelské jméno je stejné jako to původní.',
  ADMIN_SETTINGS_USERS_EDIT: 'Upravit',
  ADMIN_SETTINGS_USERS_HEADER: 'Uživatelé',
  ADMIN_SETTINGS_VERSION_INFO: 'Informace o verzi',
  ADMIN_USER_EDIT_ACCOUNT_UNCONFIRMED: 'Tento účet zatím ještě nebyl potvrzen.',
  ADMIN_USER_EDIT_ADMIN_ISADMIN: (name) => `${name} je spravcem.`,
  ADMIN_USER_EDIT_ADMIN_NOTADMIN: (name) => `${name} není správcem.`,
  ADMIN_USER_EDIT_ADMIN: 'Správce',
  ADMIN_USER_EDIT_CHANGE_NAME: 'Změnit jméno',
  ADMIN_USER_EDIT_CHANGE_USERNAME: 'Změnit přihlašovací jméno',
  ADMIN_USER_EDIT_CONFIRMATION_LINK: 'Potvrzovací odkaz',
  ADMIN_USER_EDIT_DELETE_ADMIN: 'Uživatel je spávce',
  ADMIN_USER_EDIT_DELETE_HEADER: 'Nezvratné odstranění',
  ADMIN_USER_EDIT_DELETE_USER: (name) => `Odstranit uživatele ${name}`,
  ADMIN_USER_EDIT_DEMOTE_SELF: 'Nemůžete odebrat oprávění sami sobě.',
  ADMIN_USER_EDIT_DEMOTE: (name) => `Odebrat oprávnění ${name}`,
  ADMIN_USER_EDIT_EDITING_USER: (name) => `Úprava uživatele "${name}"`,
  ADMIN_USER_EDIT_GENERATE_NEW_LINK: 'Vygenerovat nový odkaz',
  ADMIN_USER_EDIT_IMPERSONATE_BUTTON: (name) => `Přihlásit se jako ${name}`,
  ADMIN_USER_EDIT_IMPERSONATE_HEADER: 'Přihlásit se jako',
  ADMIN_USER_EDIT_LINK_EXPIRY_FUTURE: (fromNow) =>
    `Platnost odkazu vyprší ${fromNow}`, // fromNow is localized by moment
  ADMIN_USER_EDIT_LINK_EXPIRY_PAST: (fromNow) =>
    `Platnost odkazu vypršela ${fromNow}`,
  ADMIN_USER_EDIT_PROMOTE: (name) => `Přidat oprávnění ${name}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_FUTURE: (fromNow) =>
    `Vyprší ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_PAST: (fromNow) =>
    `Vypršelo ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK:
    'Zde je odkaz na obnovení hesla pro uživatele.',
  ADMIN_USER_EDIT_RESET_PASSWORD_HEADER: 'Obnovit heslo',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CANCEL:
    'Zneplatnit odkaz na obnovení hesla',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CREATE:
    'Vytvořit odkaz na obnovení hesla',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_REFRESH:
    'Obnovit odkaz na obnovení hesla',
  ADMIN_USER_EDIT_USERNAME: 'Uživatelské jméno',
  BACK_BUTTON: 'Zpět',
  CONFIRM_ACCOUNT_EXPIRED:
    'Váš odkaz pro vytvoření účtu vypršel. Zažádejte si o nový.',
  CONFIRM_ACCOUNT_HEADER_INVALID: `${_CC.config.siteTitle} | Neplatný potvrzovací odkaz`,
  CONFIRM_ACCOUNT_HEADER_VALID: `${_CC.config.siteTitle} | Potvrdit vytvoření účtu`,
  CONFIRM_ACCOUNT_INVALID:
    'Tento potvrzovací odkaz není platný. Účet mohl být vymazán neco odkaz nebyl zpopírován celý.',
  CONFIRM_ACCOUNT_SET_PW_BUTTON: `Join ${_CC.config.siteTitle}`,
  CONFIRM_ACCOUNT_SET_PW_PLACEHOLDER: 'hEsl0!',
  CONFIRM_ACCOUNT_SET_PW_TEXT: (name) =>
    `Ahoj ${name}! Prosím nastavte si zde heslo.`,
  CONFIRM_ACCOUNT_SUCCESS: `Vítejte na ${_CC.config.siteTitle}!`,
  LOGIN_BUTTON: 'Přihlásit',
  LOGIN_PASSWORD_PLACEHOLDER: 'hEsl0!',
  LOGIN_PASSWORD: 'Heslo',
  LOGIN_USERNAME_PLACEHOLDER: 'Martin',
  LOGIN_USERNAME: 'Uživatelské jméno',
  LOGOUT_BUTTON: 'Odhlásit',
  NAVBAR_ADMIN: 'Správa',
  NAVBAR_LOGIN: 'Přihlásit',
  NAVBAR_LOGOUT: 'Odhlásit',
  NAVBAR_PROFILE: 'Profil',
  NAVBAR_WISHLIST: 'Můj seznam přání',
  NOTE_BACK: (name) => `Zpět na ${name} seznam přání`,
  NOTE_GET_PRODUCT_DATA: 'Získat data o produktu',
  NOTE_GUARD: 'Neplatné uživatelské jméno',
  NOTE_IMAGE_URL: 'URL obrázku',
  NOTE_MISSING_PROP: (prop) => `Chybí vlastnost: ${prop}`, // not really possible to localize this unfortunately
  NOTE_NAME: 'Jméno',
  NOTE_NOTE: 'Poznámka',
  NOTE_PRICE: 'Cena',
  NOTE_REFRESH_DATA: 'Obnovit data',
  NOTE_REMOVE_GUARD: 'Neplatné uživatelské jméno',
  NOTE_REMOVE_MISSING: 'Nemá žádnou poznámku',
  NOTE_REMOVE_SUCCESS: 'Poznámka úspěšně odstraněna',
  NOTE_SAVE_BUTTON: 'Uložit položku',
  NOTE_SUCCESS: 'Úspěšně uloženo!',
  NOTE_URL: 'URL',
  PROFILE_HEADER: 'Profil',
  PROFILE_PASSWORD_BUTTON: 'Uložit',
  PROFILE_PASSWORD_NEW: 'Nové heslo',
  PROFILE_PASSWORD_OLD_MISMATCH: 'Nesprávné původní heslo',
  PROFILE_PASSWORD_OLD: 'Původní heslo',
  PROFILE_PASSWORD_PLACEHOLDER: 'hEsl0!',
  PROFILE_PASSWORD_REQUIRED_NEW: 'Nevyplněno nové heslo',
  PROFILE_PASSWORD_REQUIRED_OLD: 'Nevyplněno původní heslo',
  PROFILE_PASSWORD_SUCCESS: 'Heslo úspěšně změněno!',
  PROFILE_PASSWORD_TITLE: (name) => `Nastavení profilu - Heslo - ${name}`,
  PROFILE_SAVE_PFP_DISABLED: 'Profilové obrázky jsou zakázané',
  PROFILE_SAVE_PFP_SUCCESS: 'Profilový obrázek úspěšně uložen!',
  PROFILE_SECURITY_CHANGE_PASSWORD: 'Změnit heslo',
  PROFILE_SECURITY: 'Zabezpečení',
  PROFILE_TITLE: (name) => `Nastavení profilu - ${name}`,
  RESET_PASSWORD_BUTTON: 'Obnovení hesla',
  RESET_PASSWORD_GREETING_EXPIRED:
    'Platnost Vašeho odkazu pro obnovení hesla vypršela. Požádejte si o nový.',
  RESET_PASSWORD_GREETING_INVALID:
    'Tento odkaz pro obnovení hesla není platný. Účet mohl být vymazán neco odkaz nebyl zpopírován celý.',
  RESET_PASSWORD_GREETING_VALID: (name) =>
    `Ahoj ${name}! Prosím nastavte si zde heslo.`,
  RESET_PASSWORD_HEADER_INVALID: `${_CC.config.siteTitle} | Neplatný odkaz pro obnovení hesla`,
  RESET_PASSWORD_HEADER_VALID: `${_CC.config.siteTitle} | Obnovit heslo`,
  RESET_PASSWORD_PASSWORD_PLACEHOLDER: 'hEsl0!',
  RESET_PASSWORD_PASSWORD: 'Heslo',
  RESET_PASSWORD_SUCCESS: 'Heslo úspěšně obnoveno',
  SETUP_ADMIN_USER: 'Správce',
  SETUP_BUTTON: 'Nastavit!',
  SETUP_HEADER: 'Nastavení',
  SETUP_PASSWORD_PLACEHOLDER: 'hEsl0!',
  SETUP_PASSWORD: 'Heslo',
  SETUP_USERNAME_PLACEHOLDER: 'Martin',
  SETUP_USERNAME: 'Uživatelské jméno',
  SUPPORTED_SITES_HEADER: 'Podporované obchody',
  SUPPORTED_SITES_TEXT:
    'Nefunguje obchod nebo úplně chybí? Založ nový ticket <a href="https://github.com/Wingysam/get-product-data/issues/new">ZDE</a>! :)',
  UPDATE_NOTICE: (current, latest) => `
    <span class="has-text-danger is-size-4 has-text-weight-bold">
      Nepoužíváte poslední verzi Christmas Community. V nové verzi mohou být nové funkce nebo opravy chyb. Zvžte aktualizaci :)
    </span>
    <br>
    <span>(Tuto notifikaci můžete vypnout změnou v konfiguračním souboru <code>UPDATE_CHECK=false</code>)</span>
    <br><br>
    <span>Stavající verze: ${current}</span>
    <br>
    <span>Aktuální verze: ${latest}</span>
    <span class="has-text-info" style="float: right;">Tato notifikace se zobrazuje pouze správcům.</span>`,
  WISHLIST_ADD: 'Přidat položku na seznam přání',
  WISHLIST_ADDED_BY_USER: (addedBy) => `Přidáno: ${addedBy}`,
  WISHLIST_ADDED_BY_GUEST: 'Hostující Uživatel',
  WISHLIST_ADDED_BY: 'Přidáno',
  WISHLIST_CONFLICT:
    'Položky byly přidány příliš rychle po sobě. Zkuste to znovu.',
  WISHLIST_DELETE: 'Odstranit',
  WISHLIST_EDIT_ITEM: 'Upravit',
  WISHLIST_IMAGE: 'Obrázek',
  WISHLIST_MOVE_DOWN: 'Posunout dolů',
  WISHLIST_MOVE_GUARD: 'Nesprávný uživatel',
  WISHLIST_MOVE_INVALID: 'Nepovoleny posun',
  WISHLIST_MOVE_ITEM_DOWN: 'Posunout dolů',
  WISHLIST_MOVE_ITEM_TOP: 'Posunout až nahoru',
  WISHLIST_MOVE_ITEM_UP: 'Posunout nahoru',
  WISHLIST_MOVE_SUCCESS: 'Úspěšně přesunuto!',
  WISHLIST_MOVE_TOP: 'Posunout až nahoru',
  WISHLIST_MOVE_UP: 'Posunout nahoru',
  WISHLIST_NAME: 'Jméno',
  WISHLIST_NOTE: 'Poznámka',
  WISHLIST_OPTIONAL: 'Nepovinné',
  WISHLIST_PLEDGE_DUPLICATE: 'Item already pledged for',
  WISHLIST_PLEDGE_ITEM: 'Rezervovat',
  WISHLIST_PLEDGE_SUCCESS: 'Úspěšně zarezervováno!',
  WISHLIST_PLEDGE: 'Rezervovat',
  WISHLIST_PLEDGED: (pledgedBy) => `Zarezervováno ${pledgedBy}`,
  WISHLIST_PRICE: 'Cena',
  WISHLIST_REFRESH_GUARD: 'Neplatné uživatelské jméno',
  WISHLIST_REFRESH_NO_URL: 'Položka nená žádný odkaz.',
  WISHLIST_REFRESH_SUCCESS: 'Data zaktualizována!',
  WISHLIST_REMOVE_GUARD: 'Nesprávný uživatel',
  WISHLIST_REMOVE_MISSING: 'Položka nenalezena',
  WISHLIST_REMOVE_SUCCESS: 'Úspěšně odebráno ze seznamu',
  WISHLIST_TITLE: (name) => `${_CC.config.siteTitle} - Seznam přání - ${name}`,
  WISHLIST_UNPLEDGE_GUARD: 'You did not pledge for this', // should never happen unless someone makes their own http requests
  WISHLIST_UNPLEDGE_MISSING: 'Položka nenalezena',
  WISHLIST_UNPLEDGE_SUCCESS: 'Rezervace zrušena!',
  WISHLIST_UNPLEDGE: 'Zrušit rezervaci',
  WISHLIST_URL_LABEL: `Jméno položky nebo odkaz na ni (odkazy na CZ obchody nefunkční) (<a href="${_CC.config.base}supported-sites">Podporované obchody</a>)`,
  WISHLIST_URL_PLACEHOLDER: 'https://www.amazon.com/dp/B00ZV9RDKK',
  WISHLIST_URL_REQUIRED: 'Nevyplněna položka nebo odkaz na ni.',
  WISHLISTS_COUNTS_SELF: (name) => `${name}: ???/???`,
  WISHLISTS_COUNTS: (name, pledged, total) => `${name}: ${pledged}/${total}`,
  WISHLISTS_TITLE: `${_CC.config.siteTitle} - Seznamy přání`,
} as const
