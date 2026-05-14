import type { HTMLAttributes } from "react";

import type {
  MatrixProgressBarItem,
  MatrixProgressBarStep
} from "../progress-bar.tokens";
import { progressBarTokens } from "../progress-bar.tokens";
import { cx } from "../../shared/foundation";
import "./matrix-progress-bar.css";

const DEFAULT_MATRIX_ITEMS: MatrixProgressBarItem[] = [
  { key: "step01" },
  { key: "step02" },
  { key: "step03" },
  { key: "step04" },
  { key: "step05" }
];

const ACTIVE_ROW_BY_STEP: Record<MatrixProgressBarStep, number> = {
  step01: 0,
  step02: 1,
  step03: 2,
  step04: 3,
  step05: 4
};

function getActiveRow(
  items: MatrixProgressBarItem[],
  step?: MatrixProgressBarStep,
  activeStepKey?: string
) {
  if (activeStepKey) {
    const resolvedIndex = items.findIndex((item) => item.key === activeStepKey);

    if (resolvedIndex >= 0) {
      return resolvedIndex;
    }
  }

  if (step) {
    const defaultIndex = ACTIVE_ROW_BY_STEP[step];

    if (defaultIndex < items.length) {
      return defaultIndex;
    }
  }

  return 0;
}

export interface MatrixProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  items?: MatrixProgressBarItem[];
  step?: MatrixProgressBarStep;
  activeStepKey?: string;
}

export function MatrixProgressBar({
  items = DEFAULT_MATRIX_ITEMS,
  step = "step01",
  activeStepKey,
  className,
  ...rest
}: MatrixProgressBarProps) {
  const resolvedItems = items.length > 0 ? items : DEFAULT_MATRIX_ITEMS;
  const rowCount = resolvedItems.length;
  const activeRow = getActiveRow(resolvedItems, step, activeStepKey);
  const style = rest.style;

  return (
    <div
      {...rest}
      className={cx("ds-matrix-progress-bar", className)}
      style={{
        height: `${rowCount * 62 - 42}px`,
        ...style
      }}
    >
      <div className="ds-matrix-progress-bar__column">
        <div className="ds-matrix-progress-bar__line" />
        {resolvedItems.map((item, rowIndex) => {
          const isActive = rowIndex === activeRow;

          return (
            <span
              key={item.key}
              className="ds-matrix-progress-bar__point"
              data-state={isActive ? "active" : "inactive"}
              style={
                !isActive
                  ? { opacity: progressBarTokens.opacity.matrixLineInactive }
                  : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}
