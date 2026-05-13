import type { HTMLAttributes } from "react";

import { bannerProgressAsset } from "../shared/assets";
import { cx } from "../shared/foundation";
import "./service-banner.css";

const progressCarIcon = bannerProgressAsset;

export interface ServiceBannerProps extends HTMLAttributes<HTMLDivElement> {
  state?: "scheduled" | "in-progress";
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
          <div className="ds-service-banner__progress-bar">
            <div className="ds-service-banner__progress-track" />
            <div className="ds-service-banner__progress-active" />
            <img className="ds-service-banner__progress-icon" src={progressCarIcon} alt="" />
            <span className="ds-service-banner__progress-point" data-active="true" data-step="1" />
            <span className="ds-service-banner__progress-point" data-step="2" />
            <span className="ds-service-banner__progress-point" data-step="3" />
          </div>
          <div className="ds-service-banner__progress-labels">
            <span data-active="true">차량 입고</span>
            <span>차량 정비</span>
            <span>정비 완료</span>
          </div>
        </div>
      )}
    </section>
  );
}
