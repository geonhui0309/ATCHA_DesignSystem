import type { CSSProperties, HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import type { IconName } from "../../icons/Icon.types";
import { cx } from "../shared/foundation";
import {
  iconButtonTokens,
  type IconButtonSize,
  type IconButtonState
} from "./icon-button.tokens";
import "./icon-button.css";

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
        <Icon className="ds-icon-button__asset" name={iconName} size={Number.parseInt(boxSize, 10)} />
      </span>
    </span>
  );
}
