import type { PatternMetadata } from "../metadata";

export const accidentReportSummaryListMetadata: PatternMetadata = {
  name: "AccidentReportSummaryList",
  purpose: "차량 사고 리포트 요약 item을 반복해서 보여주는 리스트 패턴이다.",
  useWhen: [
    "사용자에게 여러 건의 사고 리포트 요약을 시간순 또는 목록형으로 보여줘야 할 때",
    "상세 화면 진입 전 리포트 상태를 빠르게 스캔하게 하고 싶을 때"
  ],
  avoidWhen: [
    "리포트 한 건만 크게 강조하면 충분할 때",
    "사고 리포트가 아닌 일반 정비 이력 목록을 보여줘야 할 때"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "RecordTab"],
  alternatives: ["AccidentReportSummaryItem", "HistoryTimelineSection"],
  recommendedPlacement: ["screen-middle", "screen-bottom"]
};
