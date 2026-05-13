import type { HTMLAttributes } from "react";

import { cx } from "../components/shared/foundation";
import { iconRegistry } from "./registry";
import type { IconProps } from "./Icon.types";
import "./icon.css";

export function Icon({
  name,
  size = 24,
  width,
  height,
  className,
  style,
  ...rest
}: IconProps & HTMLAttributes<HTMLSpanElement>) {
  const icon = iconRegistry[name];
  const resolvedWidth = width ?? size;
  const resolvedHeight = height ?? size;

  return (
    <span
      {...rest}
      className={cx("ds-icon", className)}
      style={{ width: resolvedWidth, height: resolvedHeight, ...style }}
      aria-hidden="true"
    >
      {icon.kind === "inline" ? (
        <svg viewBox={icon.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          {icon.paths.map((path) => (
            <path
              key={path.d}
              d={path.d}
              fill={path.fill}
              fillRule={path.fillRule}
              clipRule={path.clipRule}
            />
          ))}
        </svg>
      ) : (
        <img className="ds-icon__asset" src={icon.src} alt="" />
      )}
    </span>
  );
}
