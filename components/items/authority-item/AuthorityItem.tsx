import type { HTMLAttributes } from "react";

import type { AuthorityItemData } from "../../../contracts/authority/AuthorityItem";
import { Icon } from "../../../icons/Icon";
import type { IconName } from "../../../icons/Icon.types";
import { cx } from "../../shared/foundation";
import "../../lists/authority-list/authority-list.css";

export const defaultAuthorityItemIconName: IconName = "authority-camera";

export interface AuthorityItemProps
  extends HTMLAttributes<HTMLDivElement>,
    Partial<AuthorityItemData> {}

export function AuthorityItem({
  title = "저장공간",
  description = "외장 수리 견적, 사고 리포트 전송을 위한 필수 정보로 활용 됩니다.",
  iconName = defaultAuthorityItemIconName,
  className,
  ...rest
}: AuthorityItemProps) {
  return (
    <div {...rest} className={cx("ds-authority-item", className)}>
      <div className="ds-authority-item__leading">
        <span className="ds-authority-item__icon" aria-hidden="true">
          <Icon name={iconName} size={24} />
        </span>
        <span className="ds-authority-item__title">{title}</span>
      </div>
      <span className="ds-authority-item__description">{description}</span>
    </div>
  );
}
