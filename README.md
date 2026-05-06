# ATCHA Design Tokens

Design token source and build pipeline for ATCHA.

## Overview

- Source tokens live in `tokens/`.
- Tokens are compiled with Style Dictionary.
- Build outputs are generated in `build/`:
  - `build/css/tokens.css`
  - `build/js/tokens.js`

## Project Structure

```text
tokens/
├── primitive/
│   ├── color/
│   ├── spacing.json
│   ├── size.json
│   ├── radius.json
│   ├── icongraphy.json
│   └── typography/
│       ├── font-family.json
│       ├── font-weight.json
│       ├── font-size.json
│       └── line-height.json
├── semantic/
│   ├── color/
│   ├── space/
│   ├── size.json
│   └── typography/
└── component/
    ├── button/
    ├── badge/
    └── label/
```

## Install

```bash
npm install
```

## Build Tokens

```bash
npm run build:tokens
```

Build pipeline:

1. `style-dictionary build --config style-dictionary.config.js`
2. `scripts/generate-nested-tokens.js`
   - converts raw JS output into nested token object export
   - normalizes CSS units (`rem` -> `px`)
   - normalizes `font-size` CSS variables to `px` when unitless
   - removes intermediate `build/js/tokens.raw.js`

## Output Format

- CSS tokens are exposed as custom properties in `:root`.
- JS tokens are exported as a nested object:

```js
import tokens from "./build/js/tokens.js";

const primaryText = tokens.text.primary;
const space16 = tokens.spacing["16"];
```

## Notes

- `build/js/tokens.raw.js` is intentionally ignored and deleted after each build.
- If you change token paths, keep alias references (`{...}`) consistent with actual token keys.
