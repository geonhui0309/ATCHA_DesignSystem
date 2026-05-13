import type { HTMLAttributes } from "react";

import {
  horizontalDividerAsset,
  placeholderVehicleAsset
} from "../../shared/assets";
import { cx } from "../../shared/foundation";
import "./diag-report-card.css";

const vehicleImage = placeholderVehicleAsset;
const dividerAsset = horizontalDividerAsset;

const DIAG_REPORT_CARD_STATUS_ICONS: Record<
  "wrong" | "complete" | "error",
  { viewBox: string; shapePath: string; symbolPath: string; color: string }
> = {
  complete: {
    viewBox: "0 0 24 24",
    shapePath: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z",
    symbolPath: "M11.25 16.06L6.72 11.53L7.78 10.47L11.25 13.94L16.72 8.47L17.78 9.53L11.25 16.06Z",
    color: "var(--icon-success)"
  },
  error: {
    viewBox: "0 0 24 24",
    shapePath: "M21.3551 18.375L12.9401 3.80001C12.5251 3.08001 11.4801 3.08001 11.0651 3.80001L2.64507 18.375C2.23007 19.095 2.75007 20 3.58507 20H20.4151C21.2501 20 21.7701 19.095 21.3551 18.375Z",
    symbolPath: "M12.8151 17.835H11.1901V16.21H12.8151V17.835ZM12.8151 14.62H11.1901L10.9201 8.66001H13.0851L12.8151 14.62Z",
    color: "var(--icon-error)"
  },
  wrong: {
    viewBox: "0 0 24 24",
    shapePath: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z",
    symbolPath: "M13 17.545H11V15.545H13V17.545ZM13 13.73H11L10.7 6.46H13.3L13 13.73Z",
    color: "var(--icon-information)"
  }
} as const;

export interface DiagReportCardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  status?: "error" | "complete" | "wrong";
}

export function DiagReportCard({
  imageSrc = vehicleImage,
  status = "error",
  className,
  ...rest
}: DiagReportCardProps) {
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
            <span className="ds-diag-report-card__status-icon" aria-hidden="true">
              <svg
                viewBox={DIAG_REPORT_CARD_STATUS_ICONS[status].viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={DIAG_REPORT_CARD_STATUS_ICONS[status].shapePath}
                  fill={DIAG_REPORT_CARD_STATUS_ICONS[status].color}
                />
                <path
                  d={DIAG_REPORT_CARD_STATUS_ICONS[status].symbolPath}
                  fill="var(--icon-inverse)"
                />
              </svg>
            </span>
          </div>
          <span className="ds-diag-report-card__summary-copy">
            확인이 필요한 항목이 있어요
          </span>
        </div>
        <img className="ds-diag-report-card__vehicle-image" src={imageSrc} alt="" />
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
