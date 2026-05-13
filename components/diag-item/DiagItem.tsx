import type { HTMLAttributes } from "react";

import { cx } from "../shared/foundation";
import "./diag-item.css";

const DIAG_STATUS_ICONS: Record<
  "wrong" | "complete" | "error",
  { viewBox: string; shapePath: string; symbolPath: string; color: string }
> = {
  complete: {
    viewBox: "0 0 24 24",
    shapePath: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z",
    symbolPath: "M11.25 16.06L6.72 11.53L7.78 10.47L11.25 13.94L16.72 8.47L17.78 9.53L11.25 16.06Z",
    color: "var(--icon-success)"
  },
  error: {
    viewBox: "0 0 24 24",
    shapePath: "M21.3551 18.375L12.9401 3.80001C12.5251 3.08001 11.4801 3.08001 11.0651 3.80001L2.64507 18.375C2.23007 19.095 2.75007 20 3.58507 20H20.4151C21.2501 20 21.7701 19.095 21.3551 18.375Z",
    symbolPath: "M12.8151 17.835H11.1901V16.21H12.8151V17.835ZM12.8151 14.62H11.1901L10.9201 8.66001H13.0851L12.8151 14.62Z",
    color: "var(--icon-error)"
  },
  wrong: {
    viewBox: "0 0 24 24",
    shapePath: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z",
    symbolPath: "M13 17.545H11V15.545H13V17.545ZM13 13.73H11L10.7 6.46H13.3L13 13.73Z",
    color: "var(--icon-information)"
  }
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
        <span className="ds-diag-item__icon" aria-hidden="true">
          <svg
            viewBox={DIAG_STATUS_ICONS[status].viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={DIAG_STATUS_ICONS[status].shapePath} fill={DIAG_STATUS_ICONS[status].color} />
            <path d={DIAG_STATUS_ICONS[status].symbolPath} fill="var(--icon-inverse)" />
          </svg>
        </span>
      </div>
    </section>
  );
}
