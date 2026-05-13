import type { HTMLAttributes } from "react";

import { Button } from "../../inputs/button/Button";
import { vehicleWarningAssets } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import "./vehicle-warning-section.css";

const warningIcons = vehicleWarningAssets;

export interface VehicleWarningSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function VehicleWarningSection({
  title = "차량 경고등",
  className,
  ...rest
}: VehicleWarningSectionProps) {
  return (
    <section {...rest} className={cx("ds-vehicle-warning-section", className)}>
      <div className="ds-vehicle-warning-section__header">
        <span className="ds-vehicle-warning-section__title">{title}</span>
        <Button variant="text" size="xsmall" iconRight>
          더보기
        </Button>
      </div>
      <div className="ds-vehicle-warning-section__icons">
        {warningIcons.map((src) => (
          <img className="ds-vehicle-warning-section__icon" src={src} alt="" key={src} />
        ))}
      </div>
    </section>
  );
}
