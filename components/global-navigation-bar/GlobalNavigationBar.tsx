import type { CSSProperties } from "react";

import { cx } from "../shared/foundation";
import { globalNavigationBarTokens } from "./global-navigation-bar.tokens";
import {
  GlobalNavigationBarItem as GlobalNavigationBarItemView,
  type GlobalNavigationBarItemProps
} from "./GlobalNavigationBarItem";
import "./global-navigation-bar.css";

export type GlobalNavigationBarItem = GlobalNavigationBarItemProps;

export interface GlobalNavigationBarProps {
  items?: GlobalNavigationBarItem[];
  className?: string;
  style?: CSSProperties;
}

export const defaultGlobalNavigationBarItems: GlobalNavigationBarItem[] = [
  {
    label: "홈",
    iconName: "home",
    activeIconName: "home",
    defaultIconName: "home",
    active: true
  },
  { label: "진단", iconName: "repair", defaultIconName: "repair" },
  { label: "예약", iconName: "schedule", defaultIconName: "schedule" },
  { label: "이력", iconName: "record", defaultIconName: "record" },
  { label: "내 정보", iconName: "profile", defaultIconName: "profile" }
];

export function GlobalNavigationBar({
  items = defaultGlobalNavigationBarItems,
  className,
  style
}: GlobalNavigationBarProps) {
  const inlineStyle: CSSProperties = {
    width: globalNavigationBarTokens.container.width,
    height: globalNavigationBarTokens.container.height,
    paddingInline: globalNavigationBarTokens.container.paddingInline,
    paddingBlock: globalNavigationBarTokens.container.paddingBlock,
    background: globalNavigationBarTokens.container.background,
    ...style
  };

  return (
    <nav className={cx("ds-global-navigation-bar", className)} style={inlineStyle}>
      {items.map((item) => (
        <GlobalNavigationBarItemView key={item.label} {...item} />
      ))}
    </nav>
  );
}
