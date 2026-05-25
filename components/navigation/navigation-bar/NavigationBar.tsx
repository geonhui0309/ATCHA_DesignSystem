import type { CSSProperties, ReactNode } from "react";

import { Icon } from "../../../icons/Icon";
import { atchaLogoAsset } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import { IconButton } from "../../inputs/icon-button/IconButton";
import {
  navigationBarTokens,
  type NavigationBarVariant
} from "./navigation-bar.tokens";
import "./navigation-bar.css";

const LOGO_ASSET = atchaLogoAsset;

export interface NavigationBarProps {
  variant?: NavigationBarVariant;
  title?: string;
  actions?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function NavigationBar({
  variant = "logo",
  title = "위치 정보",
  actions,
  className,
  style
}: NavigationBarProps) {
  const inlineStyle: CSSProperties = {
    width: navigationBarTokens.width,
    maxWidth: navigationBarTokens.maxWidth,
    height: navigationBarTokens.height,
    paddingInline: navigationBarTokens.paddingInline,
    paddingBlock: navigationBarTokens.paddingBlock,
    ...style
  };

  return (
    <header className={cx("ds-navigation-bar", className)} style={inlineStyle}>
      {variant === "logo" ? (
        <img className="ds-navigation-bar__logo" src={LOGO_ASSET} alt="ATCHA" />
      ) : variant === "back" ? (
        <div className="ds-navigation-bar__title-group">
          <Icon className="ds-navigation-bar__back-icon" name="arrow-left-narrow" size={24} />
          <span className="ds-navigation-bar__title">{title}</span>
        </div>
      ) : (
        <span className="ds-navigation-bar__title">{title}</span>
      )}

      {variant === "logo" || variant === "default" ? (
        <div className="ds-navigation-bar__actions">
          {actions ?? (
            <>
              <IconButton size="large" iconName="search" />
              <IconButton size="large" iconName="schedule" />
            </>
          )}
        </div>
      ) : null}
    </header>
  );
}
