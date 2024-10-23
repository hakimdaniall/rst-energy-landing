# Eleventy Project

This project is built with Eleventy.

## Setup

1. Run `npm install` or any other preferred package manager (e.g. `yarn`, `pnpm install`) to install the project dependencies.
2. Run `npm run serve` to serve the project up on `http://localhost:8080`.

## Stylelint

The project has been setup with some opinionated Stylelint config. Currently tested in VS Code with the stylelint extension --- requires opening the project folder as a Workspace.

## Editorconfig

The project has been setup with an opinionated Editorconfig. Currently tested in VS Code with the editroconfig extension --- _most likely_ requires opening the project folder as a Workspace.

## Root Path

All pages have a `rootPath` data that gives us access to the root folder relative path.

Let's say we need to display an image that is located in `assets/images/sample.png`; instead of using `{{ '/assets/images/sample.png' | url }}` as recommended in the Eleventy docs, we should do `{{ rootPath }}assets/images/sample.png` instead.
"# rst-energy-landing" 
