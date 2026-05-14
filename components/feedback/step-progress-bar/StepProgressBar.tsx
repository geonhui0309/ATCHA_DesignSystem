import type { HTMLAttributes } from "react";

import type { StepProgressBarItem, StepProgressBarStep } from "../progress-bar.tokens";
import { cx } from "../../shared/foundation";
import "./step-progress-bar.css";

const DEFAULT_STEP_ITEMS: StepProgressBarItem[] = [
  { key: "step01", label: "약관 동의" },
  { key: "step02", label: "계정 생성" },
  { key: "step03", label: "권한 허용" }
];

const ACTIVE_INDEX_BY_STEP: Record<StepProgressBarStep, number> = {
  step01: 0,
  step02: 1,
  step03: 2
};

function getStepPosition(index: number, stepCount: number) {
  const ratio = stepCount === 1 ? 0 : index / (stepCount - 1);

  return `calc(var(--ds-step-side-padding) + var(--ds-progress-point-radius) + (${ratio} * var(--ds-progress-track-usable-width)))`;
}

function getActiveIndex(items: StepProgressBarItem[], step?: StepProgressBarStep, activeStepKey?: string) {
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

export interface StepProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  items?: StepProgressBarItem[];
  step?: StepProgressBarStep;
  activeStepKey?: string;
}

export function StepProgressBar({
  items = DEFAULT_STEP_ITEMS,
  step = "step02",
  activeStepKey,
  className,
  ...rest
}: StepProgressBarProps) {
  const resolvedItems = items.length > 0 ? items : DEFAULT_STEP_ITEMS;
  const stepCount = resolvedItems.length;
  const activeIndex = getActiveIndex(resolvedItems, step, activeStepKey);
  const progressRatio = stepCount <= 1 ? 0 : activeIndex / (stepCount - 1);

  return (
    <div {...rest} className={cx("ds-step-progress-bar", className)}>
      <div className="ds-step-progress-bar__labels">
        {resolvedItems.map((item, index) => {
          const isCurrent = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <span
              key={item.key}
              className="ds-step-progress-bar__label"
              data-state={isCurrent ? "current" : isPast ? "past" : "upcoming"}
              style={{ left: getStepPosition(index, stepCount) }}
            >
              {item.label}
            </span>
          );
        })}
      </div>
      <div className="ds-step-progress-bar__track">
        <div className="ds-step-progress-bar__track-base" />
        <div
          className="ds-step-progress-bar__track-fill"
          style={{
            width: `calc(var(--ds-step-side-padding) + var(--ds-progress-point-radius) + (${progressRatio} * var(--ds-progress-track-usable-width)))`
          }}
        />
        <div className="ds-step-progress-bar__points">
          {resolvedItems.map((item, index) => {
            const isCurrent = index === activeIndex;
            const isPast = index < activeIndex;

            return (
              <span
                key={item.key}
                className="ds-step-progress-bar__point"
                data-state={isCurrent ? "current" : isPast ? "past" : "upcoming"}
                style={{ left: getStepPosition(index, stepCount) }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
