import type { HTMLAttributes } from "react";

import type { ServiceBannerState } from "../../../contracts/service/ServiceBanner";
import { TimelineProgressBar } from "../../feedback/timeline-progress-bar/TimelineProgressBar";
import { cx } from "../../shared/foundation";
import "./service-banner.css";

export interface ServiceBannerProps extends HTMLAttributes<HTMLDivElement> {
  state?: ServiceBannerState;
}

export function ServiceBanner({
  state = "scheduled",
  className,
  ...rest
}: ServiceBannerProps) {
  const scheduled = state === "scheduled";

  return (
    <section
      {...rest}
      className={cx("ds-service-banner", className)}
      data-state={state}
    >
      <div className="ds-service-banner__header">
        {scheduled ? (
          <>
            <div className="ds-service-banner__body">
              <span className="ds-service-banner__title">블루핸즈 명지대점</span>
              <span className="ds-service-banner__subtitle">12.06(목) 오전 10:00</span>
            </div>
            <span className="ds-service-banner__badge">D-1</span>
          </>
        ) : (
          <>
            <div className="ds-service-banner__body">
              <span className="ds-service-banner__title">차량이 입고 되었어요</span>
              <span className="ds-service-banner__copy">차량이 안전하게 정비소로 입고되었어요</span>
            </div>
            <div className="ds-service-banner__remaining">
              <span className="ds-service-banner__remaining-label">남은 시간</span>
              <span className="ds-service-banner__remaining-value">2시간</span>
            </div>
          </>
        )}
      </div>
      {scheduled ? (
        <div className="ds-service-banner__footer">
          <span className="ds-service-banner__footer-caption">엔진오일 교체 외 1건</span>
          <span className="ds-service-banner__footer-value">100,000원</span>
        </div>
      ) : (
        <div className="ds-service-banner__progress">
          <TimelineProgressBar step="step01" />
        </div>
      )}
    </section>
  );
}
