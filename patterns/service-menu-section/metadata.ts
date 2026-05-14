import type { PatternMetadata } from "../metadata";

export const serviceMenuSectionMetadata: PatternMetadata = {
  name: "ServiceMenuSection",
  purpose: "서비스 진입 카테고리를 빠르게 선택하는 메뉴 섹션이다.",
  useWhen: [
    "홈 또는 서비스 진입 화면에서 대표 메뉴를 먼저 보여줄 때",
    "아이콘 기반 카테고리 네비게이션이 필요할 때"
  ],
  avoidWhen: [
    "단일 서비스만 보여주면 되는 경우",
    "탭/글로벌 네비게이션이 이미 해당 역할을 수행하는 경우"
  ],
  requiredProps: ["categories"],
  commonlyUsedWith: ["ScreenContainer", "PageSection", "AdditionalServiceSection"],
  alternatives: ["ServiceMenuItem", "NavigationBar"],
  recommendedPlacement: ["screen-top", "screen-middle"]
};
