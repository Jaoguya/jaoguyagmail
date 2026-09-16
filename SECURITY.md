# Security policy

## How Inbox Trays handles your data

- **Where it runs:** entirely in your browser, with no backend server, no analytics and no third-party scripts except Google Identity Services.
- **Your access token:** obtained through Google's popup and kept only in memory. It is gone when you close the tab, and the **Sign out** button revokes it.
- **What it reads from Gmail:** only the From, Subject and Date headers and Gmail's short preview of each message (`format=metadata`).
- **What it stores in your browser:** `localStorage` holds only your "Move to…" choices (by thread ID) and the chosen time range.
- **What it can change in Gmail:** it adds or removes its own label, moves email to Trash and recovers it. It never permanently deletes email.
- **Content-Security-Policy:** set in `index.html`. Scripts may load only from this site and `accounts.google.com`, and network requests may go only to Google's OAuth endpoints and the Gmail API.

## Reporting a vulnerability

Please use GitHub's **Report a vulnerability** button on this repository (Security → Advisories) instead of opening a public issue. I'll reply as soon as I can.
