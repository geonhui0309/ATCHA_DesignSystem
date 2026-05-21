import type { HTMLAttributes } from "react";

import type { AccidentReportSummaryItemData } from "../../../contracts/history/AccidentReportSummaryItem";
import { AccidentReportSummaryItem } from "../../items/accident-report-summary-item/AccidentReportSummaryItem";
import { cx } from "../../shared/foundation";
import "./accident-report-summary-list.css";

export interface AccidentReportSummaryListProps extends HTMLAttributes<HTMLDivElement> {
  items?: AccidentReportSummaryItemData[];
}

const defaultItems: AccidentReportSummaryItemData[] = [
  {
    reportDate: "10.02",
    reportTime: "오후 6시",
    locationName: "명지대 학교 앞",
    accidentTitle: "끼어들기 사고 발생",
    status: "processing"
  },
  {
    reportDate: "10.02",
    reportTime: "오후 6시",
    locationName: "명지대 학교 앞",
    accidentTitle: "끼어들기 사고 발생",
    status: "completed"
  }
];

export function AccidentReportSummaryList({
  items = defaultItems,
  className,
  ...rest
}: AccidentReportSummaryListProps) {
  return (
    <div {...rest} className={cx("ds-accident-report-summary-list", className)}>
      {items.map((item, index) => (
        <AccidentReportSummaryItem
          key={`${item.reportDate ?? "accident-report-summary-item"}-${index}`}
          {...item}
        />
      ))}
    </div>
  );
}
