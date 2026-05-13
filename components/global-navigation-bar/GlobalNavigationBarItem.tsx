import type { HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import type { IconName } from "../../icons/Icon.types";
import { cx } from "../shared/foundation";
import homeIconMarkup from "../../icons/assets/system/home.svg?raw";
import profileIconMarkup from "../../icons/assets/system/profile.svg?raw";
import recordIconMarkup from "../../icons/assets/system/record.svg?raw";
import repairIconMarkup from "../../icons/assets/system/repair.svg?raw";
import scheduleIconMarkup from "../../icons/assets/system/schedule.svg?raw";

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

const GLOBAL_NAVIGATION_BAR_INLINE_ICONS: Partial<Record<IconName, string>> = {
  home: homeIconMarkup,
  repair: repairIconMarkup,
  schedule: scheduleIconMarkup,
  record: recordIconMarkup,
  profile: profileIconMarkup
};

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
  const inlineIconMarkup =
    resolvedIconSrc == null ? GLOBAL_NAVIGATION_BAR_INLINE_ICONS[resolvedIconName] : undefined;

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
          ) : inlineIconMarkup ? (
            <span
              className="ds-global-navigation-bar__icon ds-global-navigation-bar__icon--inline"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: inlineIconMarkup }}
            />
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
