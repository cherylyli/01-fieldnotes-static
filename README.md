# Fieldnotes — a slower kind of travel

Self-contained sample for testing Figma Make imports. Stack: Static HTML / CSS / JavaScript with a dependency-free Node server. All content is fictional, all assets and data are local, and no account, secrets, private services, or database are required.

## About this app

An editorial travel journal with original vector landscape illustrations, destination categories, searchable story cards, separate article and philosophy pages, and a simulated newsletter signup. The static site is served by a dependency-free Node HTTP server.

## Run

Use Node.js 22.17 or newer. Run `npm ci`, then `npm run dev`. Open http://localhost:4101. Only one preview port is used. Stop with Ctrl+C.

## Make import

Includes `.figma/make` configuration for a preconfigured import. Open this app folder, not the parent containing all five apps. The ZIP contains this folder as its single top-level directory. Dependencies and generated build output are excluded from the ZIP.

## Test tasks

Filter Mountains/Coast/Desert; search Portugal; open an article and the philosophy page; submit a valid email; resize to mobile. Newsletter signup stores a boolean locally and never sends email. Browser state uses localStorage where applicable; clear site data to reset it. This app is a demonstration, not a production service.
