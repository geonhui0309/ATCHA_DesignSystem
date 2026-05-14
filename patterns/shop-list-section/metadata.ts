import type { PatternMetadata } from "../metadata";

export const shopListSectionMetadata: PatternMetadata = {
  name: "ShopListSection",
  purpose: "정비소 목록과 예약 가능한 시간 슬롯을 함께 보여준다.",
  useWhen: [
    "매장 비교와 시간 선택을 같은 흐름에서 처리할 때",
    "예약 가능한 후보 매장을 세로 리스트로 보여줄 때"
  ],
  avoidWhen: [
    "지도 기반 단일 매장 상세가 중심일 때",
    "시간 슬롯 선택이 없는 단순 매장 리스트일 때"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "PartSelectionSection", "Button"],
  alternatives: ["ShopItem", "HistoryTimelineSection"],
  recommendedPlacement: ["screen-middle", "screen-bottom"]
};
