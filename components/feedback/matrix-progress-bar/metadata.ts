import type { ComponentMetadata } from "../../metadata";

export const matrixProgressBarMetadata: ComponentMetadata = {
  name: "MatrixProgressBar",
  purpose: "세로 방향 상태 단계 중 현재 행 하나를 강조해서 표시한다.",
  useWhen: [
    "상태 지점이 한 열 안에서 위에서 아래로 이동하는 구조일 때",
    "공간이 좁아서 텍스트 없는 축약 진행 표시가 필요할 때"
  ],
  avoidWhen: [
    "각 단계 라벨을 함께 노출해야 할 때",
    "가로형 progress UI나 시간축 형태의 흐름을 보여줘야 할 때"
  ],
  requiredProps: ["items 또는 step", "activeStepKey 또는 step"],
  commonlyUsedWith: ["PageSection", "Stack"],
  alternatives: ["StepProgressBar", "TimelineProgressBar"],
  recommendedPlacement: ["section-body", "card-body"]
};
