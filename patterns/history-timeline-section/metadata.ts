import type { PatternMetadata } from "../metadata";

export const historyTimelineSectionMetadata: PatternMetadata = {
  name: "HistoryTimelineSection",
  purpose: "정비 이력을 시간 순서대로 반복되는 히스토리 섹션으로 구성한다.",
  useWhen: [
    "과거 정비 기록을 목록으로 보여줘야 할 때",
    "매장, 작업명, 금액을 함께 반복 노출해야 할 때"
  ],
  avoidWhen: [
    "최신 이력 한 건만 강조하면 될 때",
    "카드형 요약만 필요한 경우"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "ServiceBanner"],
  alternatives: ["HistoryItem", "MaintenanceSummaryCard"],
  recommendedPlacement: ["screen-middle", "screen-bottom"]
};
