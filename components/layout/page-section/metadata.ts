import type { ComponentMetadata } from "../../metadata";

export const pageSectionMetadata: ComponentMetadata = {
  name: "PageSection",
  purpose: "화면의 정보 구간을 제목, 설명, trailing 영역과 함께 명확한 섹션 단위로 묶는다.",
  useWhen: [
    "한 화면 안에 서로 다른 정보 묶음을 구분해서 보여줘야 할 때",
    "헤더 텍스트와 본문 콘텐츠 사이 간격을 토큰 기준으로 통일하고 싶을 때"
  ],
  avoidWhen: [
    "헤더 없이 단일 패턴만 얇게 끼워 넣으면 충분할 때",
    "리스트 item 하나하나처럼 너무 작은 단위에 section chrome이 과한 경우"
  ],
  requiredProps: [],
  commonlyUsedWith: ["ScreenContainer", "Stack", "ServiceMenuSection", "VehicleWarningSection"],
  alternatives: ["Stack"],
  recommendedPlacement: ["screen-middle", "section-body"]
};
