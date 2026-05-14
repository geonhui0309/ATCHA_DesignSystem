import type { PatternMetadata } from "../metadata";

export const authorityListMetadata: PatternMetadata = {
  name: "AuthorityList",
  purpose: "앱 권한 요청 항목을 설명형 리스트로 보여준다.",
  useWhen: [
    "권한 동의 화면에서 여러 권한 이유를 한 번에 설명할 때",
    "권한 요청 전 사전 안내 섹션이 필요할 때"
  ],
  avoidWhen: [
    "단일 권한만 보여주면 충분할 때",
    "권한 상태 토글이나 실제 설정 변경 UI가 필요한 경우"
  ],
  requiredProps: ["items"],
  commonlyUsedWith: ["PageSection", "Button", "Checkbox"],
  alternatives: ["AuthorityItem", "NotificationBanner"],
  recommendedPlacement: ["screen-middle"]
};
