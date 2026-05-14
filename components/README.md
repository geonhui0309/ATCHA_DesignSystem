# Components

Token-connected component layer for the ATCHA design system.

## Goal

This folder is the handoff layer between:

- Figma component structure
- design tokens in `tokens/`
- implementation-ready component code

## Current Structure

```text
components/
├── index.css
├── examples.tsx
├── button/
│   ├── Button.tsx
│   ├── Button.styles.ts
│   ├── Button.types.ts
│   ├── button.css
│   └── index.ts
├── part-selection-section/
│   ├── PartSelectionSection.tsx
│   └── part-selection-section.css
├── history-timeline-section/
│   ├── HistoryTimelineSection.tsx
│   └── history-timeline-section.css
├── diagnostic-list-section/
│   ├── DiagnosticListSection.tsx
│   └── diagnostic-list-section.css
├── shop-list-section/
│   ├── ShopListSection.tsx
│   └── shop-list-section.css
├── service-menu-section/
│   ├── ServiceMenuSection.tsx
│   ├── service-menu-section.css
│   └── service-menu-section.tokens.ts
├── *-item/
└── shared/
    └── foundation.ts
```

## Migration Workflow From Figma

1. Identify the target Figma component or variant.
2. Map visual properties to existing semantic or component tokens first.
3. If a token does not exist, add or refine the token before hardcoding styles.
4. Implement the component styles in `button.css`.
5. Keep behavior and markup in the React component source.


## Notes

- `filled` button is connected to existing component tokens.
- `outlined` and `text` variants currently bridge semantic tokens until dedicated component tokens are added.
- `service-menu-section` is based on the Figma node `520:791` and uses the shared `Button` and `ServiceMenuItem` components.
- Typography weight uses a local numeric mapping because the current font-weight token values are named strings such as `SemiBold`, which are not directly usable as CSS `font-weight` values.
