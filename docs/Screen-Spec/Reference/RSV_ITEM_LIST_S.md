# RSV_ITEM_LIST_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `RSV`
- 2 Depth: `ITEM`
- 3 Depth: `LIST`

## Figma 기준

- 링크: Figma 링크 미기입, `Reservation_소모품 선택.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 소모품 리스트 화면 기준

## 화면 목적

- 예약 가능한 항목 목록을 비교/선택하게 한다.

## 주요 사용자 시나리오

- 사용자는 ATCHA PICK 대표 상품을 먼저 확인한다.
- 사용자는 필터 칩으로 정렬 또는 추천 기준을 바꾼다.
- 사용자는 후보 상품 리스트를 스크롤하며 비교한다.

## 사용된 patterns

- `PartSelectionSection`

## 사용된 components

- `NavigationBar`
- `FilterChip`
- `Thumbnail`

## 상태 variation

- 대표 추천 상품 상단 고정
- 필터 칩 선택 상태
- 세로 리스트 반복

## AI 참고 포인트

- 추천 대표 1건과 일반 리스트 다건이 함께 있는 구조라 단순 목록보다 `PartSelectionSection`에 가깝다.
