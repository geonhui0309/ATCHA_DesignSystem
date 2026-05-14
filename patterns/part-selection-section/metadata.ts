import type { PatternMetadata } from "../metadata";

export const partSelectionSectionMetadata: PatternMetadata = {
  name: "PartSelectionSection",
  purpose: "추천 부품과 일반 부품 목록을 함께 보여주는 선택 섹션이다.",
  useWhen: [
    "대표 추천 상품과 나머지 후보를 한 화면에 보여줄 때",
    "부품 비교나 선택 흐름을 시작하는 영역이 필요할 때"
  ],
  avoidWhen: [
    "추천 부품 없이 단일 리스트면 충분할 때",
    "상품 카드형 그리드가 더 적합할 때"
  ],
  requiredProps: ["atchapickPartItem", "items"],
  commonlyUsedWith: ["PageSection", "BottomActionBar", "ShopListSection"],
  alternatives: ["PartItem", "AtchapickPartItem"],
  recommendedPlacement: ["screen-middle"]
};
