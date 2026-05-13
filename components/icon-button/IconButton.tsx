import type { CSSProperties, HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import type { IconName } from "../../icons/Icon.types";
import { cx } from "../shared/foundation";
import cancelIconMarkup from "../../icons/assets/system/cancel.svg?raw";
import checkIconMarkup from "../../icons/assets/system/check.svg?raw";
import notificationOnIconMarkup from "../../icons/assets/system/notification-on.svg?raw";
import scheduleIconMarkup from "../../icons/assets/system/schedule.svg?raw";
import searchIconMarkup from "../../icons/assets/system/search.svg?raw";
import settingsIconMarkup from "../../icons/assets/system/settings.svg?raw";
import {
  iconButtonTokens,
  type IconButtonSize,
  type IconButtonState
} from "./icon-button.tokens";
import "./icon-button.css";

const ICON_BUTTON_INLINE_ICONS: Partial<Record<IconName, string>> = {
  cancel: cancelIconMarkup,
  check: checkIconMarkup,
  "notification-on": notificationOnIconMarkup,
  schedule: scheduleIconMarkup,
  search: searchIconMarkup,
  settings: settingsIconMarkup
};

function toCurrentColorSvg(markup: string) {
  return markup.replace(/fill="[^"]*"/g, 'fill="currentColor"');
}

export interface IconButtonProps extends HTMLAttributes<HTMLSpanElement> {
  size?: IconButtonSize;
  state?: IconButtonState;
  iconName?: IconName;
}

export function IconButton({
  size = "large",
  state = "default",
  iconName = "search",
  className,
  style,
  ...rest
}: IconButtonProps) {
  const boxSize = iconButtonTokens.size[size];
  const inlineIconMarkup = ICON_BUTTON_INLINE_ICONS[iconName];

  const wrapperStyle: CSSProperties = {
    width: boxSize,
    height: boxSize,
    ...style
  };

  return (
    <span
      {...rest}
      className={cx("ds-icon-button", className)}
      data-size={size}
      data-state={state}
      style={wrapperStyle}
    >
      <span className="ds-icon-button__inner" style={{ width: boxSize, height: boxSize }}>
        {inlineIconMarkup ? (
          <span
            className="ds-icon-button__asset ds-icon-button__asset--inline"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: toCurrentColorSvg(inlineIconMarkup) }}
          />
        ) : (
          <Icon
            className="ds-icon-button__asset"
            name={iconName}
            size={Number.parseInt(boxSize, 10)}
          />
        )}
      </span>
    </span>
  );
}
