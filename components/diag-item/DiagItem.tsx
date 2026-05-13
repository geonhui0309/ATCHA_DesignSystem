import type { HTMLAttributes } from "react";

import {
  statusCompleteAsset,
  statusWarningAsset,
  statusWrongAsset
} from "../shared/assets";
import { cx } from "../shared/foundation";
import "./diag-item.css";

const DIAG_STATUS_ICONS = {
  wrong: statusWrongAsset,
  complete: statusCompleteAsset,
  error: statusWarningAsset
} as const;

export interface DiagItemProps extends HTMLAttributes<HTMLDivElement> {
  day?: string;
  description?: string;
  header?: string;
  status?: "error" | "complete" | "wrong";
}

export function DiagItem({
  day = "07.16",
  description,
  header = "엔진오일 교체 필요",
  status = "wrong",
  className,
  ...rest
}: DiagItemProps) {
  const resolvedDescription =
    description ?? (status === "complete" ? "차량 상태가 아주 좋아요!" : "소모품 교체가 필요해요");

  return (
    <section {...rest} className={cx("ds-diag-item", className)} data-status={status}>
      <span className="ds-diag-item__day">{day}</span>
      <div className="ds-diag-item__content">
        <div className="ds-diag-item__text">
          <span className="ds-diag-item__description">{resolvedDescription}</span>
          <span className="ds-diag-item__header">{header}</span>
        </div>
        <img className="ds-diag-item__icon" src={DIAG_STATUS_ICONS[status]} alt="" />
      </div>
    </section>
  );
}
