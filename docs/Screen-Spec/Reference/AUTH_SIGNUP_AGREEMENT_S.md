# AUTH_SIGNUP_AGREEMENT_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `AUTH`
- 2 Depth: `SIGNUP`
- 3 Depth: `AGREEMENT`

## Figma 기준

- 링크: Figma 링크 미기입, `Agreement` 화면 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-22 제공 스크린샷의 약관 동의 화면 기준

## 화면 목적

- 회원가입 시작 전 필수/선택 약관 동의를 받는다.

## 주요 사용자 시나리오

- 사용자는 약관을 검토하고 동의 여부를 선택한다.
- 사용자는 각 약관 row의 펼치기 버튼을 눌러 상세 본문을 확인한다.

## 사용된 components

- `AgreementItem`
- `Button`
- 필요 시 `StepProgressBar`

## 상태 variation

- 전체 동의 체크 상태
- 개별 약관 체크 상태
- 펼침/접힘 상태
- 필수/선택 구분 노출

## 화면 구조

- 상단에는 약관 동의 목적을 설명하는 제목과 보조 문구가 배치된다.
- 중간에는 `AgreementItem`이 반복되며, 각 row는 체크박스와 우측 펼치기 액션을 함께 가진다.
- 펼친 상태에서는 약관 본문이 row 바로 아래에 노출되고 내부 스크롤로 긴 텍스트를 읽는다.
- 하단에는 다음 단계 진행을 위한 CTA가 배치된다.

## AI 참고 포인트

- 이 화면은 단순 `Checkbox` 리스트가 아니라 `AgreementItem` 반복 구조로 해석하는 편이 맞다.
- 약관 본문은 별도 상세 페이지 이동보다 inline expand/collapse 구조로 이해한다.
