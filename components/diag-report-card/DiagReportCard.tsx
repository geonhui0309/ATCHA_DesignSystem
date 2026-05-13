import type { HTMLAttributes } from "react";

import {
  horizontalDividerAsset,
  placeholderVehicleAsset,
  statusWarningAsset
} from "../shared/assets";
import { cx } from "../shared/foundation";
import "./diag-report-card.css";

const vehicleImage = placeholderVehicleAsset;
const statusIcon = statusWarningAsset;
const dividerAsset = horizontalDividerAsset;

export function DiagReportCard({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...rest} className={cx("ds-diag-report-card", className)}>
      <div className="ds-diag-report-card__header">
        <span className="ds-diag-report-card__header-title">차량 상태</span>
        <span className="ds-diag-report-card__header-date">25.12.04</span>
      </div>
      <div className="ds-diag-report-card__summary">
        <div className="ds-diag-report-card__summary-top">
          <div className="ds-diag-report-card__summary-row">
            <span className="ds-diag-report-card__problem-count">총 6개의 문제 발견</span>
            <img className="ds-diag-report-card__status-icon" src={statusIcon} alt="" />
          </div>
          <span className="ds-diag-report-card__summary-copy">
            확인이 필요한 항목이 있어요
          </span>
        </div>
        <img className="ds-diag-report-card__vehicle-image" src={vehicleImage} alt="" />
      </div>
      <div className="ds-diag-report-card__stats">
        <div className="ds-diag-report-card__stat">
          <span className="ds-diag-report-card__stat-count">1</span>
          <span className="ds-diag-report-card__stat-label">점검 요망</span>
        </div>
        <img className="ds-diag-report-card__stat-divider" src={dividerAsset} alt="" />
        <div className="ds-diag-report-card__stat">
          <span className="ds-diag-report-card__stat-count">3</span>
          <span className="ds-diag-report-card__stat-label">주의</span>
        </div>
        <img className="ds-diag-report-card__stat-divider" src={dividerAsset} alt="" />
        <div className="ds-diag-report-card__stat">
          <span className="ds-diag-report-card__stat-count">2</span>
          <span className="ds-diag-report-card__stat-label">양호</span>
        </div>
      </div>
    </section>
  );
}
