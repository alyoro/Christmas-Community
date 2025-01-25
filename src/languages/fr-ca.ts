export const momentLocale = 'fr-ca'

export const strings = {
  _NOT_LOCALIZED: (key) =>
    `${key} n'a pas encore été traduit en français (Canada).`,
  ADMIN_CLEAR_WISHLISTS_BUTTON: 'Effacer toutes les listes de souhaits',
  ADMIN_CLEAR_WISHLISTS_DESCRIPTION:
    'Ceci supprimera toutes les listes de souhaits. <b>Cette action est irréversible!</b> Peut-être devriez-vous faire une sauvegarde de la base de données avant de continuer.',
  ADMIN_CLEAR_WISHLISTS_HEADER: 'Suppression des listes de souhaits',
  ADMIN_SETTINGS_CLEARDB_BUTTON: 'Retirer la liste de souhaits',
  ADMIN_SETTINGS_CLEARDB_DESCRIPTION:
    "<b>Alerte</b>: Ceci <b>supprimera les données</b>! Cette action est irréversible. Assurez-vous d'avoir une sauvegarde de la base de données avant de continuer.",
  ADMIN_SETTINGS_CLEARDB_HEADER: 'Suppression des données',
  ADMIN_SETTINGS_CLEARDB_SUCCESS: 'Toutes les données ont été supprimées.',
  ADMIN_SETTINGS_HEADER: 'Paramètres Administratifs',
  ADMIN_SETTINGS_USERS_ADD_BUTTON: 'Ajouter un Utilisateur',
  ADMIN_SETTINGS_USERS_ADD_HEADER: 'Ajouter un utilisateur',
  ADMIN_SETTINGS_USERS_ADD_PLACEHOLDER: 'félix',
  ADMIN_SETTINGS_USERS_ADD_USERNAME: "Nom d'utilisateur",
  ADMIN_SETTINGS_USERS_EDIT_DELETE_FAIL_ADMIN:
    'Vous ne pouvez pas supprimer un autre administrateur.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_SUCCESS: (name) =>
    `Utilisateur ${name} supprimé avec succès.`,
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_NOT_ADMIN:
    "Cet utilisateur n'est pas un administrateur.",
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SELF: 'Vous ne pouvez pas vous rétrograder.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SUCCESS: (name) =>
    `${name} n'est plus un administrateur.`,
  ADMIN_SETTINGS_USERS_EDIT_IMPERSONATE_SUCCESS: (name) =>
    `Vous êtes désormais ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_NO_USERNAME_PROVIDED:
    "Aucun nom d'utilisateur fourni.",
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_ALREADY_ADMIN:
    'Cet utilisateur est déjà un administrateur.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_DEMOTE_NOT_FOUND: 'Utilisateur non trouvé.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_SUCCESS: (name) =>
    `${name} est désormais un administrateur.`,
  ADMIN_SETTINGS_USERS_EDIT_RENAMED_USER: 'Utilisateur renommé!',
  ADMIN_SETTINGS_USERS_EDIT_SAME_NAME:
    "Le nouveau nom doit être différent de l'ancien.",
  ADMIN_SETTINGS_USERS_EDIT: 'Modifier',
  ADMIN_SETTINGS_USERS_HEADER: 'Utilisateurs',
  ADMIN_SETTINGS_VERSION_INFO: 'Information de version',
  ADMIN_USER_EDIT_ACCOUNT_UNCONFIRMED: "Ce compte n'a pas encore été confirmé.",
  ADMIN_USER_EDIT_ADMIN_ISADMIN: (name) => `${name} est un administrateur.`,
  ADMIN_USER_EDIT_ADMIN_NOTADMIN: (name) =>
    `${name} n'est pas un administrateur.`,
  ADMIN_USER_EDIT_ADMIN: 'Administrateur',
  ADMIN_USER_EDIT_CHANGE_NAME: 'Changer de nom',
  ADMIN_USER_EDIT_CHANGE_USERNAME: "Changer de nom d'utilisateur",
  ADMIN_USER_EDIT_CONFIRMATION_LINK: 'Lien de confirmation',
  ADMIN_USER_EDIT_DELETE_ADMIN: "L'utilisateur est un administrateur.",
  ADMIN_USER_EDIT_DELETE_HEADER: 'Suppression irréversible',
  ADMIN_USER_EDIT_DELETE_USER: (name) => `Supprimer l'utilisateur ${name}`,
  ADMIN_USER_EDIT_DEMOTE_SELF: 'Vous ne pouvez pas vous rétrograder.',
  ADMIN_USER_EDIT_DEMOTE: (name) => `Rétrograder ${name}`,
  ADMIN_USER_EDIT_EDITING_USER: (name) =>
    `Modification de l'utilisateur "${name}"`,
  ADMIN_USER_EDIT_GENERATE_NEW_LINK: 'Générer un nouveau lien',
  ADMIN_USER_EDIT_IMPERSONATE_BUTTON: (name) =>
    `Se connecter en tant que ${name}`,
  ADMIN_USER_EDIT_IMPERSONATE_HEADER: 'Se connecter en tant que',
  ADMIN_USER_EDIT_LINK_EXPIRY_FUTURE: (fromNow) =>
    `Le lien suivant expire le ${fromNow}`, // fromNow is localized by moment
  ADMIN_USER_EDIT_LINK_EXPIRY_PAST: (fromNow) =>
    `Le lien suivant a expiré le ${fromNow}`,
  ADMIN_USER_EDIT_PROMOTE: (name) => `Promouvoir ${name}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_FUTURE: (fromNow) =>
    `expire le ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_PAST: (fromNow) =>
    `a expiré le ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK:
    'Il y a un lien de réinitialisation de mot de passe pour cet utilisateur.',
  ADMIN_USER_EDIT_RESET_PASSWORD_HEADER: 'Réinitialiser le mot de passe',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CANCEL:
    'Annuler le lien de réinitialisation de mot de passe',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CREATE:
    'Créer un lien de réinitialisation de mot de passe',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_REFRESH:
    'Rafraîchir le lien de réinitialisation de mot de passe',
  ADMIN_USER_EDIT_USERNAME: "Nom d'utilisateur",
  BACK_BUTTON: 'Retour',
  CONFIRM_ACCOUNT_EXPIRED:
    'Le lien de confirmation a expiré. Demandez-en un nouveau.',
  CONFIRM_ACCOUNT_HEADER_INVALID: `${_CC.config.siteTitle} | Lien de confirmation invalide`,
  CONFIRM_ACCOUNT_HEADER_VALID: `${_CC.config.siteTitle} | Confirmation du compte`,
  CONFIRM_ACCOUNT_INVALID:
    "Ce lien de confirmation n'est pas valide, peut-être que le compte a été supprimé ou que certains caractères à la fin ont été supprimés?",
  CONFIRM_ACCOUNT_SET_PW_BUTTON: `Rejoindre ${_CC.config.siteTitle}`,
  CONFIRM_ACCOUNT_SET_PW_PLACEHOLDER: 'm0t de pa$$e!',
  CONFIRM_ACCOUNT_SET_PW_TEXT: (name) =>
    `Bonjour ${name}! Veuillez entrer votre mot de passe ici.`,
  CONFIRM_ACCOUNT_SUCCESS: `Bienvenue à ${_CC.config.siteTitle}!`,
  LOGIN_BUTTON: 'Connexion',
  LOGIN_PASSWORD_PLACEHOLDER: 'm0t de pa$$e!',
  LOGIN_PASSWORD: 'Mot de passe',
  LOGIN_USERNAME_PLACEHOLDER: 'félix',
  LOGIN_USERNAME: "Nom d'utilisateur",
  LOGOUT_BUTTON: 'Déconnexion',
  NAVBAR_ADMIN: 'Paramètres Administratifs',
  NAVBAR_LOGIN: 'Connexion',
  NAVBAR_LOGOUT: 'Déconnexion',
  NAVBAR_PROFILE: 'Profil',
  NAVBAR_WISHLIST: 'Ma liste de souhaits',
  NOTE_BACK: (name) => `De retour à la liste de souhaits de ${name}`,
  NOTE_GET_PRODUCT_DATA: 'Obtenir les données du produit',
  NOTE_GUARD: 'Utilisateur invalide',
  NOTE_IMAGE_URL: "URL de l'image",
  NOTE_MISSING_PROP: (prop) => `Propriété ${prop} manquante`, // not really possible to localize this unfortunately
  NOTE_NAME: 'Nom',
  NOTE_NOTE: 'Note',
  NOTE_PRICE: 'Coût',
  NOTE_REFRESH_DATA: 'Rafraîchir les données',
  NOTE_REMOVE_GUARD: 'Utilisateur invalide',
  NOTE_REMOVE_MISSING: "N'a pas de note",
  NOTE_REMOVE_SUCCESS: 'Note supprimée avec succès',
  NOTE_SAVE_BUTTON: "Sauvegarder l'article",
  NOTE_SUCCESS: 'Sauvgardé avec succès!',
  NOTE_URL: 'URL',
  PROFILE_HEADER: 'Profil',
  PROFILE_PASSWORD_BUTTON: 'Sauvegarder',
  PROFILE_PASSWORD_NEW: 'Nouveau mot de passe',
  PROFILE_PASSWORD_OLD_MISMATCH: 'Ancien mot de passe incorrect',
  PROFILE_PASSWORD_OLD: 'Ancien mot de passe',
  PROFILE_PASSWORD_PLACEHOLDER: 'm0t de pa$$e!',
  PROFILE_PASSWORD_REQUIRED_NEW: 'Nouveau mot de passe requis',
  PROFILE_PASSWORD_REQUIRED_OLD: 'Ancien mot de passe requis',
  PROFILE_PASSWORD_SUCCESS: 'Changé avec succès!',
  PROFILE_PASSWORD_TITLE: (name) =>
    `Paramètres du profil - Mot de passe - ${name}`,
  PROFILE_SAVE_PFP_DISABLED: 'Photos de profil désactivées',
  PROFILE_SAVE_PFP_SUCCESS: 'Photo de profil sauvegardée avec succès',
  PROFILE_SECURITY_CHANGE_PASSWORD: 'Changer le mot de passe',
  PROFILE_SECURITY: 'Sécurité',
  PROFILE_TITLE: (name) => `Paramètres du profil - ${name}`,
  RESET_PASSWORD_BUTTON: 'Réinitialiser le mot de passe',
  RESET_PASSWORD_GREETING_EXPIRED:
    'Le lien de réinitialisation de mot de passe a expiré. Demandez-en un nouveau.',
  RESET_PASSWORD_GREETING_INVALID:
    "Ce lien de réinitialisation de mot de passe n'est pas valide, peut-être que le compte a été supprimé ou que certains caractères à la fin ont été supprimés?",
  RESET_PASSWORD_GREETING_VALID: (name) =>
    `Bonjour ${name}! Veuillez entrer votre mot de passe ici.`,
  RESET_PASSWORD_HEADER_INVALID: `${_CC.config.siteTitle} | Lien de réinitialisation invalide`,
  RESET_PASSWORD_HEADER_VALID: `${_CC.config.siteTitle} | Réinitialiser du mot de passe`,
  RESET_PASSWORD_PASSWORD_PLACEHOLDER: 'm0t de pa$$e!',
  RESET_PASSWORD_PASSWORD: 'Mot de passe',
  RESET_PASSWORD_SUCCESS: 'Mot de passe réinitialisé avec succès!',
  SETUP_ADMIN_USER: 'Utilisateur administrateur',
  SETUP_BUTTON: 'Installer',
  SETUP_HEADER: 'Installation',
  SETUP_PASSWORD_PLACEHOLDER: 'm0t de pa$$e!',
  SETUP_PASSWORD: 'Mot de passe',
  SETUP_USERNAME_PLACEHOLDER: 'félix',
  SETUP_USERNAME: "Nom d'utilisateur",
  SUPPORTED_SITES_HEADER: 'Sites pris en charge',
  SUPPORTED_SITES_TEXT:
    'Un site est-il manquant ou cassé? Reporter un problème <a href="https://github.com/Wingysam/get-product-data/issues/new">here</a>! :)',
  UPDATE_NOTICE: (current, latest) => `
    <span class="has-text-danger is-size-4 has-text-weight-bold">
      Christmas Community est obsolète. Il peut y avoir de nouvelles fonctionnalités ou des corrections de bugs. Pensez à mettre à jour! :)
    </span>
    <br>
    <span>(vous pouvez le désactiver avec <code>UPDATE_CHECK=false</code>)</span>
    <br><br>
    <span>Version actuelle: ${current}</span>
    <br>
    <span>Dernière version: ${latest}</span>
    <span class="has-text-info" style="float: right;">Ce message n'est visible que par les administrateurs</span>`,
  WISHLIST_ADD: 'Ajouter à la liste de souhaits',
  WISHLIST_ADDED_BY_USER: (addedBy) => `Ajouté par: ${addedBy}`,
  WISHLIST_ADDED_BY_GUEST: 'Utilisateur Invité',
  WISHLIST_ADDED_BY: 'Ajouté Par',
  WISHLIST_CONFLICT:
    'Les articles se font ajouter trop rapidement. Veuillez réessayer.',
  WISHLIST_DELETE: 'Supprimer',
  WISHLIST_EDIT_ITEM: "Modifier l'article",
  WISHLIST_IMAGE: 'Image',
  WISHLIST_MOVE_DOWN: 'Descendre',
  WISHLIST_MOVE_GUARD: 'Utilisateur incorrect',
  WISHLIST_MOVE_INVALID: 'Mouvement invalide',
  WISHLIST_MOVE_ITEM_DOWN: "Descendre l'article tout en bas",
  WISHLIST_MOVE_ITEM_TOP: "Monter l'article tout en haut",
  WISHLIST_MOVE_ITEM_UP: "Monter l'article",
  WISHLIST_MOVE_SUCCESS: 'Article déplacé avec succès',
  WISHLIST_MOVE_TOP: 'Monter tout en haut',
  WISHLIST_MOVE_UP: 'Monter',
  WISHLIST_NAME: 'Nom',
  WISHLIST_NOTE: 'Note',
  WISHLIST_OPTIONAL: 'Optionnel',
  WISHLIST_PLEDGE_DUPLICATE: 'Vous avez déjà promis pour',
  WISHLIST_PLEDGE_ITEM: 'Je promets',
  WISHLIST_PLEDGE_SUCCESS: "L'article a été promis avec succès",
  WISHLIST_PLEDGE: 'Promettre',
  WISHLIST_PLEDGED: (pledgedBy) => `Promis par: ${pledgedBy}`,
  WISHLIST_PLEDGED_GUEST: 'Promis par un invité',
  WISHLIST_PRICE: 'Coût',
  WISHLIST_REFRESH_GUARD: 'Utilisateur incorrect',
  WISHLIST_REFRESH_NO_URL: "L'article n'a pas d'URL",
  WISHLIST_REFRESH_SUCCESS: 'Article rafraîchi avec succès',
  WISHLIST_REMOVE_GUARD: 'Utilisateur incorrect',
  WISHLIST_REMOVE_MISSING: "Impossible de trouver l'article",
  WISHLIST_REMOVE_SUCCESS:
    'Article supprimé de la liste de souhaits avec succès',
  WISHLIST_SUGGEST: 'Suggérer un article',
  WISHLIST_TITLE: (name) =>
    `${_CC.config.siteTitle} - Liste de souhaits - ${name}`,
  WISHLIST_UNPLEDGE_GUARD: 'Vous ne vous êtes pas engagé pour cela', // should never happen unless someone makes their own http requests
  WISHLIST_UNPLEDGE_MISSING: "Impossible de trouver l'article",
  WISHLIST_UNPLEDGE_SUCCESS: "L'article a été annulé avec succès",
  WISHLIST_UNPLEDGE: 'Se désengager',
  WISHLIST_URL_LABEL: `URL ou nom de l\`article (<a href="${_CC.config.base}supported-sites">Sites supportés</a>)`,
  WISHLIST_URL_PLACEHOLDER: 'https://www.amazon.com/dp/B00ZV9RDKK',
  WISHLIST_URL_REQUIRED: "L'URL ou le nom de l'article est requis",
  WISHLISTS_COUNTS_SELF: (name) => `${name}: ???/???`,
  WISHLISTS_COUNTS: (name, pledged, total) => `${name}: ${pledged}/${total}`,
  WISHLISTS_TITLE: `${_CC.config.siteTitle} - Listes de souhaits`,
} as const
