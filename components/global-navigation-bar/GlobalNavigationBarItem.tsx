import type { HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import type { IconName } from "../../icons/Icon.types";
import { cx } from "../shared/foundation";

export interface GlobalNavigationBarItemProps
  extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  iconName?: IconName;
  activeIconName?: IconName;
  defaultIconName?: IconName;
  iconSrc?: string;
  activeIconSrc?: string;
  defaultIconSrc?: string;
  active?: boolean;
  dot?: boolean;
}

export const defaultGlobalNavigationBarItemIcon: IconName = "home";

export function GlobalNavigationBarItem({
  label = "Label",
  iconName = defaultGlobalNavigationBarItemIcon,
  activeIconName,
  defaultIconName,
  iconSrc,
  activeIconSrc,
  defaultIconSrc,
  active = false,
  dot = false,
  className,
  ...rest
}: GlobalNavigationBarItemProps) {
  const resolvedIconName = active
    ? activeIconName ?? iconName
    : defaultIconName ?? iconName;
  const resolvedIconSrc = active
    ? activeIconSrc ?? iconSrc
    : defaultIconSrc ?? iconSrc;

  return (
    <div
      {...rest}
      className={cx("ds-global-navigation-bar__item", className)}
      data-state={active ? "active" : "default"}
    >
      <div className="ds-global-navigation-bar__item-inner">
        <div className="ds-global-navigation-bar__icon-slot">
          {resolvedIconSrc ? (
            <img className="ds-global-navigation-bar__icon" src={resolvedIconSrc} alt="" />
          ) : (
            <Icon className="ds-global-navigation-bar__icon" name={resolvedIconName} size={20} />
          )}
        </div>
        <p className="ds-global-navigation-bar__label">{label}</p>
      </div>
      {dot ? <div className="ds-global-navigation-bar__dot-badge" aria-hidden="true" /> : null}
    </div>
  );
}
