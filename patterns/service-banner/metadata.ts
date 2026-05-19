import type { PatternMetadata } from "../metadata";

export const serviceBannerMetadata: PatternMetadata = {
  name: "ServiceBanner",
  purpose: "예약 상태나 정비 진행 상태를 상단 배너로 강조한다.",
  useWhen: [
    "현재 예정된 예약 혹은 진행중인 정비가 존재할때 해당 상태를 화면 상단에서 가장 먼저 알려줘야 할 때",
    "시간, 잔여 진행 상태, 금액 같은 핵심 정보를 요약할 때"
  ],
  avoidWhen: [
    "단순 공지 배너면 충분할 때",
    "상태 변화가 없는 일반 정보 영역일 때"
  ],
  requiredProps: ["state"],
  commonlyUsedWith: ["ScreenContainer", "PageSection", "HistoryTimelineSection"],
  alternatives: ["NotificationBanner", "VehicleStatusCard"],
  recommendedPlacement: ["screen-top"]
};
