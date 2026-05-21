import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { Icon } from "../../../icons/Icon";
import { Checkbox } from "../checkbox/Checkbox";
import { cx } from "../../shared/foundation";
import "./agreement-item.css";

export type AgreementSelectionType = "required" | "optional";

export interface AgreementItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  selectionType?: AgreementSelectionType;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  expanded?: boolean;
  detailText?: ReactNode;
  onCheckedChange?: ButtonHTMLAttributes<HTMLInputElement>["onChange"];
  disclosureButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const AGREEMENT_SELECTION_LABEL: Record<AgreementSelectionType, string> = {
  required: "(필수)",
  optional: "(선택)"
} as const;

export function AgreementItem({
  title = "서비스 이용약관",
  selectionType = "required",
  checked = false,
  disabled = false,
  error = false,
  expanded = false,
  detailText,
  onCheckedChange,
  disclosureButtonProps,
  className,
  ...rest
}: AgreementItemProps) {
  const { className: disclosureClassName, ...restDisclosureButtonProps } =
    disclosureButtonProps ?? {};

  return (
    <section
      {...rest}
      className={cx("ds-agreement-item", className)}
      data-expanded={expanded ? "true" : undefined}
    >
      <div className="ds-agreement-item__row">
        <Checkbox
          className="ds-agreement-item__checkbox"
          checked={checked}
          disabled={disabled}
          error={error}
          onChange={onCheckedChange}
          label={
            <span className="ds-agreement-item__label">
              <span className="ds-agreement-item__title">{title}</span>
              <span className="ds-agreement-item__selection-type">
                {AGREEMENT_SELECTION_LABEL[selectionType]}
              </span>
            </span>
          }
        />
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={expanded ? "약관 내용 접기" : "약관 내용 펼치기"}
          className={cx("ds-agreement-item__disclosure", disclosureClassName)}
          {...restDisclosureButtonProps}
        >
          <Icon name={expanded ? "arrow-down-narrow" : "arrow-right-narrow"} size={24} />
        </button>
      </div>
      {expanded && detailText ? (
        <div className="ds-agreement-item__detail">
          <div className="ds-agreement-item__detail-scroll">
            <div className="ds-agreement-item__detail-text">{detailText}</div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
