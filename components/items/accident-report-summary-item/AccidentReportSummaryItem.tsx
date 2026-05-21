import type { HTMLAttributes } from "react";

import type {
  AccidentReportSummaryItemData,
  AccidentReportSummaryStatus
} from "../../../contracts/history/AccidentReportSummaryItem";
import { cx } from "../../shared/foundation";
import "./accident-report-summary-item.css";

const ACCIDENT_REPORT_SUMMARY_STATUS_LABEL: Record<AccidentReportSummaryStatus, string> = {
  processing: "진행중",
  completed: "완료"
} as const;

export interface AccidentReportSummaryItemProps
  extends HTMLAttributes<HTMLElement>,
    AccidentReportSummaryItemData {}

export function AccidentReportSummaryItem({
  reportDate = "10.02",
  reportTime = "오후 6시",
  locationName = "명지대 학교 앞",
  accidentTitle = "끼어들기 사고 발생",
  status = "processing",
  state = "default",
  className,
  ...rest
}: AccidentReportSummaryItemProps) {
  return (
    <article
      {...rest}
      className={cx("ds-accident-report-summary-item", className)}
      data-state={state}
      data-status={status}
    >
      <div className="ds-accident-report-summary-item__time-block">
        <span className="ds-accident-report-summary-item__date">{reportDate}</span>
        <span className="ds-accident-report-summary-item__time">{reportTime}</span>
      </div>
      <div className="ds-accident-report-summary-item__content">
        <span className="ds-accident-report-summary-item__location">{locationName}</span>
        <strong className="ds-accident-report-summary-item__accident-title">{accidentTitle}</strong>
      </div>
      <span className="ds-accident-report-summary-item__status">
        {ACCIDENT_REPORT_SUMMARY_STATUS_LABEL[status]}
      </span>
    </article>
  );
}
