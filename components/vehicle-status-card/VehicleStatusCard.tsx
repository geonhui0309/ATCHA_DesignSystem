import type { HTMLAttributes } from "react";

import {
  horizontalDividerAsset,
  placeholderVehicleAsset,
  statusWarningAsset
} from "../shared/assets";
import { cx } from "../shared/foundation";
import "./vehicle-status-card.css";

const dividerAsset = horizontalDividerAsset;
const vehicleImage = placeholderVehicleAsset;
const statusIcon = statusWarningAsset;

export function VehicleStatusCard({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...rest} className={cx("ds-vehicle-status-card", className)}>
      <div className="ds-vehicle-status-card__header">
        <span className="ds-vehicle-status-card__header-title">차량 상태</span>
        <img className="ds-vehicle-status-card__status-icon" src={statusIcon} alt="" />
      </div>
      <img className="ds-vehicle-status-card__divider" src={dividerAsset} alt="" />
      <div className="ds-vehicle-status-card__info">
        <span className="ds-vehicle-status-card__name">더 뉴 아반떼</span>
        <span className="ds-vehicle-status-card__number">123가 1234</span>
        <div className="ds-vehicle-status-card__image-wrap">
          <img className="ds-vehicle-status-card__image" src={vehicleImage} alt="" />
        </div>
      </div>
      <div className="ds-vehicle-status-card__footer">
        <span className="ds-vehicle-status-card__footer-label">차량 주행거리</span>
        <span className="ds-vehicle-status-card__footer-value">80,000KM</span>
      </div>
    </section>
  );
}
