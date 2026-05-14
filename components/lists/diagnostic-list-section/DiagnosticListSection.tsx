import type { HTMLAttributes } from "react";

import type { DiagItemData } from "../../../contracts/diagnostic/DiagItem";
import { DiagItem } from "../../items/diag-item/DiagItem";
import { cx } from "../../shared/foundation";
import "./diagnostic-list-section.css";

export interface DiagnosticListSectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: DiagItemData[];
}

const defaultItems: DiagItemData[] = [
  { day: "07.16", header: "엔진오일 교체 필요", status: "wrong" },
  { day: "07.20", header: "정기 점검 완료", status: "complete" },
  { day: "07.24", header: "배터리 교체 필요", status: "error" },
  { day: "07.28", header: "브레이크 점검 완료", status: "complete" },
  { day: "08.01", header: "타이어 점검 필요", status: "error" },
  { day: "08.05", header: "냉각수 점검 필요", status: "error" },
  { day: "08.09", header: "에어컨 필터 점검 필요", status: "error" },
  { day: "08.13", header: "와이퍼 교체 필요", status: "error" },
  { day: "08.17", header: "브레이크 오일 점검 필요", status: "error" }
];

export function DiagnosticListSection({
  items = defaultItems,
  className,
  ...rest
}: DiagnosticListSectionProps) {
  return (
    <div {...rest} className={cx("ds-diag-list", className)}>
      {items.map((item, index) => (
        <DiagItem key={`${item.day ?? "diag-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
