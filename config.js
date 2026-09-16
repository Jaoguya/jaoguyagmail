// Inbox Trays — your settings.
// The OAuth Client ID is not a secret; it only works from the origins you allow in Google Cloud.
// See docs/google-oauth-setup.md for how to get one.

export default {
  // Paste your "Web application" OAuth Client ID here.
  googleClientId: "YOUR_CLIENT_ID.apps.googleusercontent.com",

  // Gmail label added to every email this app moves to Trash,
  // so the "Cleaned up" tray shows only what the app removed.
  cleanedLabel: "Inbox Trays/Cleaned",

  // Saved cleanups. `query` uses normal Gmail search syntax.
  // You always see a preview and confirm before anything is moved to Trash.
  cleanupRules: [
    { name: "SHEIN emails", query: "from:shein OR from:sheinemail OR subject:shein" },
    { name: "Promotions older than 30 days", query: "category:promotions older_than:30d" },
  ],

  // Extra words to match in sender addresses (added to the built-in lists in src/classify.js).
  sorting: {
    importantSenders: [],
    adsSenders: [],
    generalSenders: [],
  },
};
