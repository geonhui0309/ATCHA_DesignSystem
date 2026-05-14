export const progressBarTokens = {
  colors: {
    active: "var(--background-surface-brand)",
    inactive: "var(--border-subtle)",
    inactiveStrong: "var(--text-disabled)",
    labelActive: "var(--text-brand)",
    labelCurrent: "var(--text-primary)",
    labelInactive: "var(--text-disabled)",
    labelInverse: "var(--text-inverse)"
  },
  sizes: {
    railThickness: "4px",
    lineThickness: "2px",
    point: "10px",
    pointInner: "8px",
    stepHeight: "41px",
    stepWidth: "360px",
    timelineWidth: "280px",
    timelineHeight: "40px",
    matrixWidth: "10px",
    matrixHeight: "268px"
  },
  spacing: {
    labelGap: "var(--spacing-4)",
    sectionGap: "var(--spacing-8)"
  },
  opacity: {
    matrixLineInactive: 0.4
  }
} as const;

export interface StepProgressBarItem {
  key: string;
  label: string;
}

export interface TimelineProgressBarItem {
  key: string;
  label: string;
}

export interface MatrixProgressBarItem {
  key: string;
}

export type StepProgressBarStep = "step01" | "step02" | "step03";
export type TimelineProgressBarStep = "step01" | "step02" | "step03";
export type MatrixProgressBarStep = "step01" | "step02" | "step03" | "step04" | "step05";
