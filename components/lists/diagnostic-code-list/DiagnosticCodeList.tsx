import type { HTMLAttributes } from "react";

import type { DiagCodeItemData } from "../../../contracts/diagnostic/DiagCodeItem";
import { DiagCodeItem } from "../../items/diag-code-item/DiagCodeItem";
import { cx } from "../../shared/foundation";
import "./diagnostic-code-list.css";

export interface DiagnosticCodeListProps extends HTMLAttributes<HTMLDivElement> {
  items?: DiagCodeItemData[];
}

const defaultItems: DiagCodeItemData[] = Array.from({ length: 3 }, () => ({
  code: "P0301",
  description: "엔진 점화계통 1번 실린더 고장"
}));

export function DiagnosticCodeList({
  items = defaultItems,
  className,
  ...rest
}: DiagnosticCodeListProps) {
  return (
    <div {...rest} className={cx("ds-diag-code-list", className)}>
      {items.map((item, index) => (
        <DiagCodeItem
          key={`${item.code}-${index}`}
          code={item.code}
          description={item.description}
        />
      ))}
    </div>
  );
}
