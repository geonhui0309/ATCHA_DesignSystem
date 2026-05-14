import type { HTMLAttributes } from "react";

import type { DiagCodeItemData } from "../../../contracts/diagnostic/DiagCodeItem";
import { cx } from "../../shared/foundation";
import "../../lists/diagnostic-code-list/diagnostic-code-list.css";

export interface DiagCodeItemProps
  extends HTMLAttributes<HTMLDivElement>,
    Partial<DiagCodeItemData> {}

export function DiagCodeItem({
  code = "P0301",
  description = "엔진 점화계통 1번 실린더 고장",
  className,
  ...rest
}: DiagCodeItemProps) {
  return (
    <div {...rest} className={cx("ds-diag-code-item", className)}>
      <span className="ds-diag-code-item__code">{code}</span>
      <span className="ds-diag-code-item__description">{description}</span>
    </div>
  );
}
