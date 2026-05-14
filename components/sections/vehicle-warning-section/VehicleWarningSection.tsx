import type { HTMLAttributes } from "react";

import type { VehicleWarningSectionData } from "../../../contracts/vehicle/VehicleWarningSection";
import { Button } from "../../inputs/button/Button";
import { vehicleWarningAssets } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import "./vehicle-warning-section.css";

const warningIcons = vehicleWarningAssets;

export interface VehicleWarningSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VehicleWarningSectionData {}

export function VehicleWarningSection({
  title = "차량 경고등",
  actionLabel = "더보기",
  icons = warningIcons,
  className,
  ...rest
}: VehicleWarningSectionProps) {
  return (
    <section {...rest} className={cx("ds-vehicle-warning-section", className)}>
      <div className="ds-vehicle-warning-section__header">
        <span className="ds-vehicle-warning-section__title">{title}</span>
        <Button variant="text" size="xsmall" iconRight={true}>
          {actionLabel}
        </Button>
      </div>
      <div className="ds-vehicle-warning-section__icons">
        {icons.map((src) => (
          <img className="ds-vehicle-warning-section__icon" src={src} alt="" key={src} />
        ))}
      </div>
    </section>
  );
}
