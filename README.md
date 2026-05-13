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
components/
├── index.css
├── index.ts
├── badge/
│   ├── Badge.tsx
│   ├── badge.css
│   └── badge.tokens.ts
├── button/
│   ├── Button.tsx
│   ├── Button.styles.ts
│   ├── Button.types.ts
│   ├── button.css
│   └── index.ts
├── checkbox/
│   ├── Checkbox.tsx
│   ├── checkbox.css
│   └── checkbox.tokens.ts
├── global-navigation-bar/
│   ├── GlobalNavigationBar.tsx
│   ├── global-navigation-bar.css
│   └── global-navigation-bar.tokens.ts
├── icon-button/
│   ├── IconButton.tsx
│   ├── icon-button.css
│   └── icon-button.tokens.ts
├── input-field/
│   ├── InputField.tsx
│   ├── input-field.css
│   └── input-field.tokens.ts
├── label/
│   ├── Label.tsx
│   ├── label.css
│   └── label.tokens.ts
├── navigation-bar/
│   ├── NavigationBar.tsx
│   ├── navigation-bar.css
│   └── navigation-bar.tokens.ts
├── radio-button/
│   ├── RadioButton.tsx
│   ├── radio-button.css
│   └── radio-button.tokens.ts
├── record-tab/
│   ├── RecordTab.tsx
│   ├── record-tab.css
│   └── record-tab.tokens.ts
├── service-menu-section/
│   ├── ServiceMenuSection.tsx
│   ├── service-menu-section.css
│   └── service-menu-section.tokens.ts
└── shared/
    └── foundation.ts

tokens/
├── primitive/
│   ├── color/
│   ├── spacing.json
│   ├── size.json
│   ├── radius.json
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

## Components

- `components/` is the implementation layer that consumes generated design tokens.
- Components are now authored in `tsx` as the source of truth for web usage.
- Preview-only HTML and DOM builder files are kept out of component folders so each component has a single implementation path.
- `components/button/`, `components/badge/`, and `components/label/` are token-connected primitives built from the current component token set.
- `components/input-field/` and `components/checkbox/` are semantic-token-based web primitives added as the next layer while dedicated component tokens are still being defined.
- `components/global-navigation-bar/` is connected from the Figma node `309:630` with Figma-derived sizing and remote icon assets.
- `components/navigation-bar/`, `components/record-tab/`, `components/icon-button/`, and `components/radio-button/` are connected from Figma nodes `180:563`, `611:350`, `682:1806`, and `412:1124`.
- `components/service-menu-section/` is a web-first semantic component based on the Figma node `520:791`.
- `filled` is bound to current component tokens.
- `outlined` and `text` are temporary semantic-token variants until dedicated component tokens are defined.

## Notes

- `build/js/tokens.raw.js` is intentionally ignored and deleted after each build.
- If you change token paths, keep alias references (`{...}`) consistent with actual token keys.
- Current font-weight token values are exported as names such as `SemiBold`, so component code currently maps them to numeric CSS weights where needed.
