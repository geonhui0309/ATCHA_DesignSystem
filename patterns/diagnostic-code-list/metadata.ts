import type { PatternMetadata } from "../metadata";

export const diagnosticCodeListMetadata: PatternMetadata = {
  name: "DiagnosticCodeList",
  purpose: "OBD/진단 코드를 코드와 설명 형태로 묶어 보여준다.",
  useWhen: [
    "전문적인 진단 코드와 설명을 함께 노출해야 할 때",
    "정비소 또는 상세 리포트 화면에서 코드 목록이 필요할 때"
  ],
  avoidWhen: [
    "일반 사용자용 경고 메시지만으로 충분할 때",
    "상태 요약 카드 한 장으로 대체 가능한 경우"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "DiagnosticListSection"],
  alternatives: ["DiagCodeItem", "NotificationBanner"],
  recommendedPlacement: ["screen-middle", "screen-bottom"]
};
