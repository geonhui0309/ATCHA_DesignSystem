import type { ComponentMetadata } from "../../metadata";

export const timelineProgressBarMetadata: ComponentMetadata = {
  name: "TimelineProgressBar",
  purpose: "정비, 배송, 처리 진행처럼 시간 순서가 있는 상태 흐름을 아이콘과 함께 보여준다.",
  useWhen: [
    "단계가 명확한 선형 진행 상태를 사용자에게 먼저 인지시켜야 할 때",
    "배너나 상태 카드 안에서 현재 진행 지점을 시각적으로 강조할 때"
  ],
  avoidWhen: [
    "단계명이 길어서 한 줄 타임라인 안에 안정적으로 들어가지 않을 때",
    "단순 체크리스트나 독립 선택지처럼 시간 흐름이 중요하지 않은 경우"
  ],
  requiredProps: ["items 또는 step", "activeStepKey 또는 step"],
  commonlyUsedWith: ["ServiceBanner", "ScreenContainer", "PageSection"],
  alternatives: ["StepProgressBar", "MatrixProgressBar"],
  recommendedPlacement: ["screen-top", "section-body", "card-body"]
};
