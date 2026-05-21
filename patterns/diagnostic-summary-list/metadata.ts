import type { PatternMetadata } from "../metadata";

export const diagnosticSummaryListMetadata: PatternMetadata = {
  name: "DiagnosticSummaryList",
  purpose: "진단 메인 화면에서 최근 진단 결과를 짧은 row 형태로 요약해 보여주는 리스트 패턴이다.",
  useWhen: [
    "사용자에게 최근 진단 결과 2~3건을 빠르게 스캔하게 하고 싶을 때",
    "진단 메인 화면에서 상세 기록 화면 진입 전 요약 preview가 필요할 때"
  ],
  avoidWhen: [
    "진단 이력 전체를 길게 탐색해야 할 때",
    "섹션 제목과 다건 목록 맥락을 포함한 기록 화면 구성이 필요할 때"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "GlobalNavigationBar", "Button"],
  alternatives: ["DiagnosticSummaryItem", "DiagnosticListSection"],
  recommendedPlacement: ["screen-middle"]
};
