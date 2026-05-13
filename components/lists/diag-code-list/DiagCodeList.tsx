import type { HTMLAttributes } from "react";

import { DiagCodeItem } from "../../items/diag-code-item/DiagCodeItem";
import { cx } from "../../shared/foundation";
import "./diag-code-list.css";

export interface DiagCodeItemData {
  code: string;
  description: string;
}

export interface DiagCodeListProps extends HTMLAttributes<HTMLDivElement> {
  items?: DiagCodeItemData[];
}

const defaultItems: DiagCodeItemData[] = Array.from({ length: 3 }, () => ({
  code: "P0301",
  description: "엔진 점화계통 1번 실린더 고장"
}));

export function DiagCodeList({
  items = defaultItems,
  className,
  ...rest
}: DiagCodeListProps) {
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
