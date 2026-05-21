import type { ComponentMetadata } from "../../metadata";

export const agreementItemMetadata: ComponentMetadata = {
  name: "AgreementItem",
  purpose: "회원가입/권한 동의 화면에서 체크 상태, 필수/선택 라벨, 약관 상세 열람 액션을 함께 제공하는 입력 컴포넌트다.",
  useWhen: [
    "체크박스와 우측 펼치기 액션이 함께 있는 약관 동의 row가 필요할 때",
    "필수/선택 구분과 약관 본문 열람을 같은 행에서 처리해야 할 때"
  ],
  avoidWhen: [
    "단순 체크박스 한 줄만 필요할 때",
    "약관이 아닌 일반 설정 토글이나 선택 입력을 만들어야 할 때"
  ],
  requiredProps: ["title", "selectionType"],
  commonlyUsedWith: ["Checkbox", "Button", "Stack"],
  alternatives: ["Checkbox"],
  recommendedPlacement: ["section-body", "screen-middle"]
};
