import type { HTMLAttributes } from "react";

import type { DiagnosticSummaryItemData } from "../../../contracts/diagnostic/DiagnosticSummaryItem";
import { DiagnosticSummaryItem } from "../../items/diagnostic-summary-item/DiagnosticSummaryItem";
import { cx } from "../../shared/foundation";
import "./diagnostic-summary-list.css";

export interface DiagnosticSummaryListProps extends HTMLAttributes<HTMLDivElement> {
  items?: DiagnosticSummaryItemData[];
}

const defaultItems: DiagnosticSummaryItemData[] = [
  {
    date: "10.02",
    guideText: "확인후 조치가 필요해요",
    resultText: "엔진 실린더 문제 발생",
    status: "warning"
  },
  {
    date: "09.26",
    guideText: "확인후 조치가 필요해요",
    resultText: "진단결과 이상 없음",
    status: "success"
  },
  {
    date: "09.26",
    guideText: "확인후 조치가 필요해요",
    resultText: "엔진오일 교체 필요",
    status: "information"
  }
];

export function DiagnosticSummaryList({
  items = defaultItems,
  className,
  ...rest
}: DiagnosticSummaryListProps) {
  return (
    <div {...rest} className={cx("ds-diagnostic-summary-list", className)}>
      {items.map((item, index) => (
        <DiagnosticSummaryItem key={`${item.date ?? "diagnostic-summary-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
