# RSV_GARAGE_LIST_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `RSV`
- 2 Depth: `GARAGE`
- 3 Depth: `LIST`

## Figma 기준

- 링크: Figma 링크 미기입, `RSV_listgarage.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-22 제공 스크린샷의 정비소 리스트 선택 화면 기준

## 화면 목적

- 예약 가능한 정비소를 리스트로 탐색하게 한다.

## 주요 사용자 시나리오

- 사용자는 선택한 지역과 날짜 기준으로 정비소 목록을 훑어본다.
- 사용자는 각 정비소의 기본 정보와 가능한 시간대를 비교한다.
- 사용자는 특정 시간대를 선택한 뒤 결제 단계로 이동한다.

## 사용된 patterns

- `ShopListSection`

## 사용된 components

- `NavigationBar`
- `ChoiceChip`
- `Button`
- `ScreenContainer`
- `Stack`

## 상태 variation

- 상단 날짜 선택 strip
- 정비소 카드 반복
- 시간대 chip 활성/비활성 상태
- 하단 결제 CTA 비활성/활성 상태

## 화면 구조

- 상단에는 뒤로가기, 지역명, 일정 선택 액션이 포함된 navigation 영역이 있다.
- 날짜 선택 strip 아래에 정비소 정보 카드가 세로로 반복된다.
- 각 카드 안에는 정비소명, 주소, 태그와 시간대 선택 chip이 함께 배치된다.
- 하단에는 선택 완료 전까지 비활성 상태를 가질 수 있는 결제 CTA가 고정된다.

## AI 참고 포인트

- 이 화면은 `ShopListSection`을 기반으로 해석하되, 단순 정보 리스트가 아니라 정비소 정보와 시간 선택이 결합된 예약 선택형 variation으로 이해하는 편이 맞다.
- 시간대는 `ChoiceChip`류의 선택 컨트롤로 보는 편이 자연스럽다.
