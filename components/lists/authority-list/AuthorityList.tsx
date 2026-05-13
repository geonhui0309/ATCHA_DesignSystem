import type { HTMLAttributes } from "react";

import type { IconName } from "../../../icons/Icon.types";
import { AuthorityItem, defaultAuthorityItemIconName } from "../../items/authority-item/AuthorityItem";
import { cx } from "../../shared/foundation";
import "./authority-list.css";

export interface AuthorityItemData {
  title: string;
  description: string;
  iconName?: IconName;
}

export interface AuthorityListProps extends HTMLAttributes<HTMLDivElement> {
  items?: AuthorityItemData[];
}

const defaultItems: AuthorityItemData[] = [
  {
    title: "저장공간",
    description: "외장 수리 견적, 사고 리포트 전송을 위한 필수 정보로 활용 됩니다.",
    iconName: defaultAuthorityItemIconName
  },
  {
    title: "알림",
    description: "중요 공지와 차량 상태 안내를 위해 활용 됩니다.",
    iconName: "authority-notification"
  },
  {
    title: "캘린더",
    description: "정비 일정과 예약 정보를 위해 활용 됩니다.",
    iconName: "authority-calender"
  }
];

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
          iconName={item.iconName}
        />
      ))}
    </div>
  );
}
