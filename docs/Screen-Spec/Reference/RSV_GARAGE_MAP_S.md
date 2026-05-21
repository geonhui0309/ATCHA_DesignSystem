# RSV_GARAGE_MAP_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `RSV`
- 2 Depth: `GARAGE`
- 3 Depth: `MAP`

## Figma 기준

- 링크: Figma 링크 미기입, `Grage Map.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-22 제공 스크린샷의 지도 기반 정비소 선택 화면 기준

## 화면 목적

- 정비소를 지도 기반으로 탐색하고 위치 맥락을 파악하게 한다.

## 주요 사용자 시나리오

- 사용자는 지도에서 주변 정비소 분포를 확인한다.
- 사용자는 특정 정비소를 선택해 하단 정보 패널과 시간대를 확인한다.
- 사용자는 시간대를 고른 뒤 결제 단계로 이동한다.

## 사용된 patterns

- `ShopListSection`

## 사용된 components

- `NavigationBar`
- `ChoiceChip`
- `Button`
- `ScreenContainer`

## 상태 variation

- 지도 마커 다건 노출
- 선택된 정비소 하단 패널 노출
- 시간대 chip 활성/비활성 상태
- 하단 결제 CTA 활성 상태

## 화면 구조

- 상단에는 뒤로가기, 지역명, 일정 선택 액션이 포함된 navigation 영역이 있다.
- 중간에는 정비소 마커가 표시된 지도가 메인으로 배치된다.
- 지도 하단에는 `ShopListSection`이 bottom sheet 형태로 배치되어, 선택된 정비소의 요약 정보와 태그, 시간 선택 chip을 함께 보여준다.
- 최하단에는 결제 CTA가 배치된다.

## AI 참고 포인트

- 이 화면의 핵심은 지도 자체보다 `지도 + 선택 패널`의 결합 구조다.
- 정비소 목록 화면과 같은 데이터 문맥을 가지지만, 리스트 탐색보다 위치 탐색이 우선인 variation으로 해석한다.
- 하단 패널은 새 정비소 카드 컴포넌트를 따로 만드는 방식보다 `ShopListSection`을 bottom sheet 맥락으로 재사용하는 구조로 이해하는 편이 맞다.
