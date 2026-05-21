# HOME_MAIN_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `HOME`
- 2 Depth: `MAIN`


## Figma 기준

- 링크: Figma 링크 미기입, `HOME_MAIN.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 홈 메인 화면 기준

## 화면 목적

- 현재 차량/정비 상태를 요약하고 주요 서비스로 진입시키는 허브 역할을 한다.

## 주요 사용자 시나리오

- 사용자는 홈 진입 직후 상태를 확인한다.
- 사용자는 진단, 예약, 이력, 내 정보 등으로 이동한다.

## 사용된 patterns

- `VehicleWarningSection`
- `ServiceMenuSection`
- `AdditionalServiceSection`

## 사용된 components

- `NavigationBar`
- `PageSection`
- `GlobalNavigationBar`
- `ScreenContainer`
- `Stack`

## 상태 variation

- 차량 상태 정상 아이콘 노출
- 경고등 요약 섹션
- 최근 소모품 교체 이력 강조

## AI 참고 포인트

- 홈은 허브 역할이며 패턴 중심 조립이 핵심이다.
- 상단 차량 요약과 하단 탭 내비게이션 사이에 서비스 진입 섹션이 반복 배치된다.
