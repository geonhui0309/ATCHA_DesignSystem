import type { ComponentMetadata } from "../../metadata";

export const stackMetadata: ComponentMetadata = {
  name: "Stack",
  purpose: "세로 방향으로 여러 block을 일정 간격으로 쌓는 기본 레이아웃 primitive다.",
  useWhen: [
    "section 내부에서 카드, 배너, 리스트를 세로 흐름으로 배치할 때",
    "AI가 임의 margin 대신 시스템 간격 토큰으로 레이아웃을 조립하게 하고 싶을 때"
  ],
  avoidWhen: [
    "가로 정렬이나 2열 이상 grid 배치가 필요한 경우",
    "단일 child만 있어 간격 제어 의미가 거의 없을 때"
  ],
  requiredProps: [],
  commonlyUsedWith: ["ScreenContainer", "PageSection"],
  alternatives: [],
  recommendedPlacement: ["screen-middle", "section-body", "card-body"]
};
