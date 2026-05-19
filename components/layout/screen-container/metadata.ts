import type { ComponentMetadata } from "../../metadata";

export const screenContainerMetadata: ComponentMetadata = {
  name: "ScreenContainer",
  purpose: "모바일 화면 폭과 기본 좌우 패딩을 안정적으로 맞춰주는 최상위 레이아웃 래퍼다.",
  useWhen: [
    "AI가 화면 전체를 조립할 때 안전한 기본 폭과 패딩 기준이 필요할 때",
    "여러 section과 pattern을 하나의 스크린 단위로 감쌀 때"
  ],
  avoidWhen: [
    "이미 카드나 모달 내부처럼 별도 폭 제약이 있는 하위 영역일 때",
    "전체 폭을 꽉 채우는 외부 레이아웃 컨테이너가 이미 존재할 때"
  ],
  requiredProps: [],
  commonlyUsedWith: ["Stack", "PageSection", "ServiceBanner"],
  alternatives: [],
  recommendedPlacement: ["screen-full"]
};
