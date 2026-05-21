# RSV_CONFIRM_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `RSV`
- 2 Depth: `CONFIRM`


## Figma 기준

- 링크: Figma 링크 미기입, `Reservation_예약 기본 사항 작성.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 예약 정보 최종 작성 화면 기준

## 화면 목적

- 사용자가 선택한 예약 정보를 최종 검토하고 확정하게 한다.

## 주요 사용자 시나리오

- 사용자는 예약 일시와 정비소 정보를 다시 확인한다.
- 사용자는 요청 사항, 예약자 정보, 결제 수단을 입력/선택한다.
- 사용자는 약관 동의를 마치고 결제를 진행한다.

## 사용된 patterns

- 별도 pattern 없이 입력/결제 폼 조합 중심

## 사용된 components

- `NavigationBar`
- `InputField`
- `InputFieldWithButton`
- `Button`
- `RadioButton`
- `Checkbox`
- `PageSection`

## 상태 variation

- 예약 정보 요약
- 예약자 정보 입력
- 결제 수단 단일 선택
- 약관 동의 체크리스트
- 하단 결제 CTA

## AI 참고 포인트

- 예약 확인을 넘어서 입력, 할인 계산, 결제, 약관 동의까지 한 화면에 포함된 긴 폼 구조다.
