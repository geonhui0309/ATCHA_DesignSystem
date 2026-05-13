import type { CSSProperties } from "react";

import { Icon } from "../../../icons/Icon";
import { horizontalDividerAsset } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import { recordTabTokens, type RecordTabVariant } from "./record-tab.tokens";
import "./record-tab.css";

const DIVIDER_ASSET = horizontalDividerAsset;

export interface RecordTabProps {
  variant?: RecordTabVariant;
  filterLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export function RecordTab({
  variant = "diag",
  filterLabel = "최근 3개월",
  className,
  style
}: RecordTabProps) {
  const tabs =
    variant === "diag"
      ? [
          { label: "정비 내역", active: false },
          { label: "진단 내역", active: true }
        ]
      : [
          { label: "정비 내역", active: true },
          { label: "진단 내역", active: false }
        ];

  const inlineStyle: CSSProperties = {
    width: recordTabTokens.width,
    height: recordTabTokens.height,
    paddingLeft: recordTabTokens.paddingLeft,
    paddingRight: recordTabTokens.paddingRight,
    ...style
  };

  return (
    <div className={cx("ds-record-tab", className)} style={inlineStyle}>
      <div className="ds-record-tab__container">
        <div className="ds-record-tab__list">
          {tabs.map((tab) => (
            <div className="ds-record-tab__tab" data-active={tab.active ? "true" : undefined} key={tab.label}>
              <div className="ds-record-tab__indicator" />
              <span className="ds-record-tab__tab-label">{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="ds-record-tab__filter">
          <span className="ds-record-tab__filter-label">{filterLabel}</span>
          <Icon className="ds-record-tab__filter-icon" name="arrow-down-narrow" size={16} />
        </div>
      </div>
      <img className="ds-record-tab__divider" src={DIVIDER_ASSET} alt="" />
    </div>
  );
}
