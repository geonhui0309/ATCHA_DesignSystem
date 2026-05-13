# Icon Migration Status

## Folder structure
- `icons/assets/system/`
- `icons/assets/vehicle/`
- `icons/assets/vehicle-warning/`
- `icons/assets/status/`
- `icons/registry.ts`
- `icons/Icon.tsx`
- `icons/Icon.types.ts`
- `icons/icon.css`

## Source
- System icons: Figma `Hi0Q0LG8BOQ2mbgQshLSPn`, node `284:18506`
- Vehicle pictograms: Figma `Hi0Q0LG8BOQ2mbgQshLSPn`, node `759:1561`

## Local SVG migrated
- `System`
  - `add`
  - `home`
  - `password-visible`
  - `password-invisible`
  - `password-visible-outlined`
  - `notification-on`
  - `settings`
  - `pin`
  - `screen-theme`
  - `map`
  - `notification-alert`
  - `notification-caution`
  - `notification-check`
  - `repair`
  - `schedule`
  - `record`
  - `profile`
  - `in-progress`
  - `notification-cancel`
  - `search`
  - `cancel`
  - `check`
  - `eye`
  - `error`
  - `closeSolid`
  - `arrow-left-narrow`
  - `arrow-right-narrow`
  - `arrow-up-narrow`
  - `arrow-down-narrow`
  - `list`
  - legacy aliases kept for compatibility: `eye`, `error`, `closeSolid`
- `GlobalNavigationBar`
- `GlobalNavigationBarItem`
- `Button` text arrows
- `RecordTab` filter icon
- `MaintenanceSummaryCard` action arrows
- `InputField`
  - `cancelMuted`
  - `success`
- `ServiceMenuItem`
  - `engine-oil`
  - `tire-replacement`
  - `exterior-repair`
  - `vehicle-maintenance`
- `ServiceItem`
  - `washer-fluid`
  - `coolant`
  - `wiper`
  - `aircon-filter`
  - `air-filter`
  - `oil-filter`
- `OtherServiceSection`
  - reuses `ServiceItem`

## Still remote / not yet migrated
- `VehicleWarningSection`
- `AuthorityItem`
- `StatusItem`
- `RecommendCard`
- `Thumbnail`
- `NavigationBar` logo asset
- `IconButton`
- `RadioButton`

## Size status
- System icon sizes in use: `16 / 20 / 24`
- Vehicle pictograms currently rendered by component sizing
  - `ServiceMenuItem`: `48 x 48`
  - `ServiceItem` / `OtherServiceSection`: `24` base icon rendered inside component-specific slot sizing

## Token note
- `48` pictogram size is currently a component-level exception.
- Recommended follow-up:
  - add semantic icon size tokens for pictograms, e.g. `icon/pictogram/sm`, `icon/pictogram/md`, `icon/pictogram/lg`
  - or add component tokens such as `component/service-menu/icon-size`
  - keep system icons and pictograms as separate token groups because their usage scale differs
