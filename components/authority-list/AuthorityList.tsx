import type { HTMLAttributes } from "react";

import { AuthorityItem, defaultAuthorityItemIcon } from "../authority-item/AuthorityItem";
import { cx } from "../shared/foundation";
import "./authority-list.css";

export interface AuthorityItemData {
  title: string;
  description: string;
  iconSrc?: string;
}

export interface AuthorityListProps extends HTMLAttributes<HTMLDivElement> {
  items?: AuthorityItemData[];
}

const defaultItems: AuthorityItemData[] = Array.from({ length: 3 }, () => ({
  title: "저장공간",
  description: "외장 수리 견적, 사고 리포트 전송을 위한 필수 정보로 활용 됩니다.",
  iconSrc: defaultAuthorityItemIcon
}));

export function AuthorityList({
  items = defaultItems,
  className,
  ...rest
}: AuthorityListProps) {
  return (
    <div {...rest} className={cx("ds-authority-list", className)}>
      {items.map((item, index) => (
        <AuthorityItem
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
          iconSrc={item.iconSrc}
        />
      ))}
    </div>
  );
}
