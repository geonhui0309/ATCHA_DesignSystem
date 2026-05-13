import type { HTMLAttributes } from "react";

import { Button } from "../button";
import { cx } from "../shared/foundation";
import "./notification-banner.css";

export interface NotificationBannerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  actionLabel?: string;
}

export function NotificationBanner({
  title = "차량에 이상이 생기셨나요?",
  description = "원클릭으로 빠르게 진단 해보세요",
  actionLabel = "Label",
  className,
  ...rest
}: NotificationBannerProps) {
  return (
    <section {...rest} className={cx("ds-notification-banner", className)}>
      <div className="ds-notification-banner__content">
        <span className="ds-notification-banner__title">{title}</span>
        <span className="ds-notification-banner__description">{description}</span>
      </div>
      <Button variant="filled" size="medium">
        {actionLabel}
      </Button>
    </section>
  );
}
