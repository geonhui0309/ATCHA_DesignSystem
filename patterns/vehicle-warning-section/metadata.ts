import type { PatternMetadata } from "../metadata";

export const vehicleWarningSectionMetadata: PatternMetadata = {
  name: "VehicleWarningSection",
  purpose: "차량 경고등 목록을 한 구간에 모아 보여준다.",
  useWhen: [
    "경고등 아이콘을 여러 개 한 번에 보여줘야 할 때",
    "차량 상태 화면에서 경고 항목을 시각적으로 빠르게 스캔하게 할 때"
  ],
  avoidWhen: [
    "경고 내용 설명 텍스트가 더 중요한 경우",
    "한 개의 경고만 상세 안내하면 되는 경우"
  ],
  requiredProps: [],
  commonlyUsedWith: ["PageSection", "VehicleStatusCard", "DiagnosticListSection"],
  alternatives: ["NotificationBanner", "DiagItem"],
  recommendedPlacement: ["screen-top", "screen-middle"]
};
