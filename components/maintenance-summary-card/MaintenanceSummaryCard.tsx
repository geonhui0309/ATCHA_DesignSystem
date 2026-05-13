import type { HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import { horizontalDividerAsset } from "../shared/assets";
import { cx } from "../shared/foundation";
import "./maintenance-summary-card.css";

const dividerAsset = horizontalDividerAsset;

const collapsedMetrics = [
  { value: "1천", unit: "Km", label: "엔진오일", tone: "default" },
  { value: "5만", unit: "Km", label: "타이어", tone: "critical" },
  { value: "2천", unit: "Km", label: "와이퍼", tone: "default" },
  { value: "3만", unit: "Km", label: "워셔액", tone: "default" }
] as const;

const expandedMetrics = [
  { value: "2만", unit: "Km", label: "냉각수", tone: "default" },
  { value: "3천", unit: "Km", label: "에어컨 필터", tone: "default" },
  { value: "1만", unit: "Km", label: "오일 필터", tone: "default" },
  { value: "5천", unit: "Km", label: "에어 필터", tone: "default" }
] as const;

export interface MaintenanceSummaryCardProps extends HTMLAttributes<HTMLDivElement> {
  state?: "collapsed" | "expanded";
}

export function MaintenanceSummaryCard({
  state = "collapsed",
  className,
  ...rest
}: MaintenanceSummaryCardProps) {
  const expanded = state === "expanded";

  return (
    <section {...rest} className={cx("ds-maintenance-summary-card", className)}>
      <div className="ds-maintenance-summary-card__content">
        <div className="ds-maintenance-summary-card__header">
          <span className="ds-maintenance-summary-card__title">지난 소모품 교체 이력</span>
          <span className="ds-maintenance-summary-card__copy">
            마지막으로 소모품을 교체하고 이만큼 달렸어요
          </span>
        </div>
        <div className="ds-maintenance-summary-card__section">
          <div className="ds-maintenance-summary-card__metrics">
            {collapsedMetrics.map((metric) => (
              <div
                key={metric.label}
                className="ds-maintenance-summary-card__metric"
                data-tone={metric.tone}
              >
                <span className="ds-maintenance-summary-card__value">
                  <span className="ds-maintenance-summary-card__value-number">
                    {metric.value}
                  </span>
                  <span className="ds-maintenance-summary-card__value-unit">
                    {metric.unit}
                  </span>
                </span>
                <span className="ds-maintenance-summary-card__label">{metric.label}</span>
              </div>
            ))}
          </div>
          <img className="ds-maintenance-summary-card__divider" src={dividerAsset} alt="" />
          {expanded ? (
            <div className="ds-maintenance-summary-card__metrics">
              {expandedMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="ds-maintenance-summary-card__metric"
                  data-tone={metric.tone}
                >
                  <span className="ds-maintenance-summary-card__value">
                    <span className="ds-maintenance-summary-card__value-number">
                      {metric.value}
                    </span>
                    <span className="ds-maintenance-summary-card__value-unit">
                      {metric.unit}
                    </span>
                  </span>
                  <span className="ds-maintenance-summary-card__label">{metric.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <button className="ds-maintenance-summary-card__action" type="button">
        {expanded ? "닫기" : "더보기"}
        <Icon
          className="ds-maintenance-summary-card__action-icon"
          name={expanded ? "arrow-up-narrow" : "arrow-down-narrow"}
          size={16}
        />
      </button>
    </section>
  );
}
