import type { HTMLAttributes } from "react";

import { timelineProgressBarIconAsset } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import type {
  TimelineProgressBarItem,
  TimelineProgressBarStep
} from "../progress-bar.tokens";
import "./timeline-progress-bar.css";

const DEFAULT_TIMELINE_ITEMS: TimelineProgressBarItem[] = [
  { key: "step01", label: "차량 입고" },
  { key: "step02", label: "차량 정비" },
  { key: "step03", label: "정비 완료" }
];

const ACTIVE_INDEX_BY_STEP: Record<TimelineProgressBarStep, number> = {
  step01: 0,
  step02: 1,
  step03: 2
};

function getTimelinePosition(index: number, timelineCount: number) {
  const ratio = timelineCount === 1 ? 0 : index / (timelineCount - 1);

  return `calc(var(--ds-timeline-side-padding) + var(--ds-timeline-point-radius) + (${ratio} * var(--ds-timeline-track-usable-width)))`;
}

function getActiveIndex(
  items: TimelineProgressBarItem[],
  step?: TimelineProgressBarStep,
  activeStepKey?: string
) {
  if (activeStepKey) {
    const resolvedIndex = items.findIndex((item) => item.key === activeStepKey);

    if (resolvedIndex >= 0) {
      return resolvedIndex;
    }
  }

  if (step) {
    const defaultIndex = ACTIVE_INDEX_BY_STEP[step];

    if (defaultIndex < items.length) {
      return defaultIndex;
    }
  }

  return 0;
}

export interface TimelineProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  items?: TimelineProgressBarItem[];
  step?: TimelineProgressBarStep;
  activeStepKey?: string;
}

export function TimelineProgressBar({
  items = DEFAULT_TIMELINE_ITEMS,
  step = "step01",
  activeStepKey,
  className,
  ...rest
}: TimelineProgressBarProps) {
  const resolvedItems = items.length > 0 ? items : DEFAULT_TIMELINE_ITEMS;
  const timelineCount = resolvedItems.length;
  const activeIndex = getActiveIndex(resolvedItems, step, activeStepKey);
  const progressRatio = timelineCount <= 1 ? 0 : activeIndex / (timelineCount - 1);

  return (
    <div {...rest} className={cx("ds-timeline-progress-bar", className)}>
      <div className="ds-timeline-progress-bar__visual">
        <div className="ds-timeline-progress-bar__rail" />
        <div
          className="ds-timeline-progress-bar__fill"
          style={{
            width: `calc(var(--ds-timeline-side-padding) + var(--ds-timeline-point-radius) + (${progressRatio} * var(--ds-timeline-track-usable-width)))`
          }}
        />
        <img
          alt=""
          className="ds-timeline-progress-bar__vehicle"
          src={timelineProgressBarIconAsset}
          style={{
            left: `calc(var(--ds-timeline-side-padding) + var(--ds-timeline-point-radius) + (${progressRatio} * var(--ds-timeline-track-usable-width)) - 12px)`
          }}
        />
        <div className="ds-timeline-progress-bar__points">
          {resolvedItems.map((item, index) => (
            <span
              key={item.key}
              className="ds-timeline-progress-bar__point"
              data-state={index <= activeIndex ? "active" : "inactive"}
              style={{ left: getTimelinePosition(index, timelineCount) }}
            />
          ))}
        </div>
      </div>
      <div className="ds-timeline-progress-bar__labels">
        {resolvedItems.map((item, index) => (
          <span
            key={item.key}
            className="ds-timeline-progress-bar__label"
            data-state={index === activeIndex ? "current" : index < activeIndex ? "past" : "upcoming"}
            style={{ left: getTimelinePosition(index, timelineCount) }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
