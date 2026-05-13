import type { HTMLAttributes } from "react";

import { authorityAsset } from "../shared/assets";
import { cx } from "../shared/foundation";
import "../authority-list/authority-list.css";

export const defaultAuthorityItemIcon = authorityAsset;

export interface AuthorityItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  iconSrc?: string;
}

export function AuthorityItem({
  title = "저장공간",
  description = "외장 수리 견적, 사고 리포트 전송을 위한 필수 정보로 활용 됩니다.",
  iconSrc = defaultAuthorityItemIcon,
  className,
  ...rest
}: AuthorityItemProps) {
  return (
    <div {...rest} className={cx("ds-authority-item", className)}>
      <div className="ds-authority-item__leading">
        <img className="ds-authority-item__icon" src={iconSrc} alt="" />
        <span className="ds-authority-item__title">{title}</span>
      </div>
      <span className="ds-authority-item__description">{description}</span>
    </div>
  );
}
