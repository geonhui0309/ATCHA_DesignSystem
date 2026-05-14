import type { PatternMetadata } from "../metadata";

export const diagnosticListSectionMetadata: PatternMetadata = {
  name: "DiagnosticListSection",
  purpose: "차량 진단 결과를 시간순 상태 리스트로 배치한다.",
  useWhen: [
    "여러 진단 이슈 또는 완료 항목을 한 섹션에 모아야 할 때",
    "날짜와 상태를 함께 보여주는 진단 타임라인이 필요할 때"
  ],
  avoidWhen: [
    "단일 진단 카드만 필요할 때",
    "진단 코드 중심의 정적 표기가 더 적합할 때"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "DiagnosticCodeList", "VehicleStatusCard"],
  alternatives: ["DiagItem", "DiagnosticCodeList"],
  recommendedPlacement: ["screen-middle"]
};
