import type { PatternMetadata } from "../metadata";

export const additionalServiceSectionMetadata: PatternMetadata = {
  name: "AdditionalServiceSection",
  purpose: "추가 점검 또는 함께 확인할 서비스 항목을 아이콘 그리드로 보여준다.",
  useWhen: [
    "핵심 정비 외 추가 서비스 제안을 묶어 보여줄 때",
    "부가 서비스 카테고리를 압축된 아이콘 형태로 배치할 때"
  ],
  avoidWhen: [
    "서비스 설명 문구가 길고 상세한 경우",
    "단일 서비스 카드만 필요할 때"
  ],
  requiredProps: [],
  commonlyUsedWith: ["PageSection", "ServiceMenuSection", "ServiceItem"],
  alternatives: ["ServiceItem", "ServiceMenuSection"],
  recommendedPlacement: ["screen-middle", "screen-bottom"]
};
