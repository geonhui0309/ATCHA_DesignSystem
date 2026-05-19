import type { ComponentMetadata } from "../../metadata";

export const stepProgressBarMetadata: ComponentMetadata = {
  name: "StepProgressBar",
  purpose: "회원가입, 신청, 설정 같은 다단계 흐름의 현재 단계를 간결하게 보여준다.",
  useWhen: [
    "단계 수가 적고 각 단계명이 짧아서 한 줄 진행 상태로 요약할 수 있을 때",
    "프로세스가 시간 흐름보다는 순서 중심의 step UI일 때"
  ],
  avoidWhen: [
    "차량 정비나 배송처럼 진행 흐름을 아이콘과 함께 시간축 느낌으로 보여줘야 할 때",
    "2차원 상태 매트릭스나 다수 행 상태 표시가 필요한 경우"
  ],
  requiredProps: ["items 또는 step", "activeStepKey 또는 step"],
  commonlyUsedWith: ["ScreenContainer", "PageSection", "Stack"],
  alternatives: ["TimelineProgressBar", "MatrixProgressBar"],
  recommendedPlacement: ["screen-top", "section-header", "card-body"]
};
