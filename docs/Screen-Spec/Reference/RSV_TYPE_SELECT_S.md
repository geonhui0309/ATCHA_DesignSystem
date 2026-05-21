# RSV_TYPE_SELECT_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `RSV`
- 2 Depth: `TYPE`
- 3 Depth: `SELECT`

## Figma 기준

- 링크: Figma 링크 미기입, `Reservation_MAIN.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 예약 메인 허브 화면 기준

## 화면 목적

- 예약 시작 전 예약 유형 또는 정비 대분류를 선택하게 한다.

## 주요 사용자 시나리오

- 사용자는 추천 정비 항목 카테고리를 빠르게 탐색한다.
- 사용자는 지난 소모품 교체 이력을 참고해 예약 대상을 고른다.
- 사용자는 기타 정비 항목으로도 이동한다.

## 사용된 patterns

- `ServiceMenuSection`
- `AdditionalServiceSection`

## 사용된 components

- `NavigationBar`
- `PageSection`
- `GlobalNavigationBar`

## 상태 variation

- 추천 정비 항목 영역
- 지난 소모품 교체 이력 펼침/접힘
- 기타 정비 항목 그리드

## AI 참고 포인트

- 현재 스크린샷 기준 `TYPE SELECT`는 단일 선택지만 나열하는 화면보다 예약 허브 성격이 강하다.
