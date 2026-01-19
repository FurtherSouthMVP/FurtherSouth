# Further South ReadMe File

## Project Structure

```text
├── .github/workflows
│   ├── prettier.yml // For formatting code
│   └── release.yml // Automatically creates a release when main is changed
├── .vscode
│   └── [Various vscode configurations]
├── public/
│   └── favicon.png
├── src
│   ├── assets
│   │   └── [Various images]
│   ├── components
│   │   └── [Reusable astro components]
│   ├── content
│   │   └── [Page directories]
│   ├── data
│   │   └── site.ts // Site config
│   ├── layouts
│   │   ├── Content.astro
│   │   └── Layout.astro
│   └── pages
│   |   ├── Content.astro
│   |   └── index.astro
│   └── styles
│       └── global.css
└── [Various config files & documentation]
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally, before deploying          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |