# Contributing

Thanks for helping! Inbox Trays deliberately stays small: no framework, no build step.

## Getting started

```bash
git clone https://github.com/<your-username>/inbox-trays.git
cd inbox-trays
npm test                  # sorting-rule unit tests
python3 -m http.server 8080
```

## Guidelines

- **Sorting changes:** edit `src/classify.js`, and add a case to `test/classify.test.js` for every rule you add or change.
- **UI changes:**
  - Run `npm run test:browser`; it mocks Google and Gmail, so no account is needed.
  - Check the page at phone width (~390px) and in dark mode.
- **Never** commit real email data, access tokens or screenshots of a real inbox.
- **Keep the permission to `gmail.modify`.** Changes must not permanently delete email.
- **Pull requests:** keep them focused, and describe what changed and how you tested it.

## Reporting bugs

Open an issue with:

- your browser and operating system,
- the steps to reproduce,
- any error shown in the yellow banner or the browser console.

Remove email addresses and subjects first.
