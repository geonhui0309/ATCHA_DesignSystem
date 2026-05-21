import type { HTMLAttributes } from "react";

import { Icon } from "../../../icons/Icon";
import type { IconName } from "../../../icons/Icon.types";
import type {
  DiagnosticSummaryItemData,
  DiagnosticSummaryStatus
} from "../../../contracts/diagnostic/DiagnosticSummaryItem";
import { cx } from "../../shared/foundation";
import "./diagnostic-summary-item.css";

const DIAGNOSTIC_SUMMARY_STATUS_ICON: Record<DiagnosticSummaryStatus, IconName> = {
  warning: "notification-caution",
  success: "notification-check",
  information: "notification-alert"
} as const;

export interface DiagnosticSummaryItemProps
  extends HTMLAttributes<HTMLElement>,
    DiagnosticSummaryItemData {}

export function DiagnosticSummaryItem({
  date = "10.02",
  guideText = "확인후 조치가 필요해요",
  resultText = "엔진 실린더 문제 발생",
  status = "warning",
  className,
  ...rest
}: DiagnosticSummaryItemProps) {
  return (
    <article
      {...rest}
      className={cx("ds-diagnostic-summary-item", className)}
      data-status={status}
    >
      <span className="ds-diagnostic-summary-item__date">{date}</span>
      <div className="ds-diagnostic-summary-item__content-row">
        <div className="ds-diagnostic-summary-item__content">
          <span className="ds-diagnostic-summary-item__guide-text">{guideText}</span>
          <span className="ds-diagnostic-summary-item__result-text">{resultText}</span>
        </div>
        <span className="ds-diagnostic-summary-item__status-icon" aria-hidden="true">
          <Icon name={DIAGNOSTIC_SUMMARY_STATUS_ICON[status]} size={24} />
        </span>
      </div>
    </article>
  );
}
