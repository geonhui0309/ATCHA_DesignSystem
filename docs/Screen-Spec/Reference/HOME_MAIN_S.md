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

- `ServiceBanner`
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

## 화면 구조

- 상단에는 현재 차량 또는 정비 상태를 빠르게 보여주는 `ServiceBanner`가 배치된다.
- 배너 아래에는 차량 상태 요약이나 경고등 강조를 위한 `VehicleWarningSection`이 이어진다.
- 중간 본문에는 주요 서비스 진입을 위한 `ServiceMenuSection`이 핵심 패턴으로 배치된다.
- 그 아래에는 보조 서비스나 부가 메뉴 진입을 위한 `AdditionalServiceSection`이 뒤따른다.
- 최하단에는 앱 전역 이동을 위한 `GlobalNavigationBar`가 고정된다.

## AI 참고 포인트

- 홈은 허브 역할이며 패턴 중심 조립이 핵심이다.
- `HOME_MAIN_S`는 primitive 조합보다 `ServiceBanner -> VehicleWarningSection -> ServiceMenuSection -> AdditionalServiceSection` 순서의 패턴 조합으로 해석하는 편이 더 안정적이다.
- 상단 차량 요약과 하단 탭 내비게이션 사이에 서비스 진입 섹션이 반복 배치된다.
