# RCD_MAIN_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `RCD`
- 2 Depth: `MAIN`


## Figma 기준

- 링크: Figma 링크 미기입, `Record_MAIN.png`, `Record_MAIN-1.png`, `Record_MAIN-2.png`, `Record_MAIN-3.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷 4종을 `RCD_MAIN_S` 상태 variation으로 묶어 확인

## 화면 목적

- 정비 이력과 진단 이력의 메인 진입점 역할을 한다.

## 주요 사용자 시나리오

- 사용자는 예약된 정비 또는 진행중인 정비 상태를 우선 확인한다.
- 사용자는 `정비 내역`과 `진단 내역` 탭을 전환한다.
- 사용자는 기간 필터를 바꿔 과거 이력을 탐색한다.

## 사용된 patterns

- `HistoryTimelineSection`
- `ServiceBanner`
- `DiagnosticListSection`

## 사용된 components

- `NavigationBar`
- `RecordTab`
- `GlobalNavigationBar`
- `PageSection`

## 상태 variation

- 진행중인 정비 배너 노출
- 예약된 정비 카드 노출
- 정비 내역 리스트 탭 활성
- 진단 내역 리스트 탭 활성

## 화면 구조

- 상단에는 현재 예약/정비 상태를 요약하는 `ServiceBanner`가 조건적으로 노출된다.
- 그 아래에는 `RecordTab`을 기준으로 `정비 내역`과 `진단 내역` 컨텍스트가 전환된다.
- 정비 탭에서는 시간 흐름 중심의 `HistoryTimelineSection`이 메인 패턴으로 사용된다.
- 진단 탭에서는 진단 이력 묶음을 보여주는 `DiagnosticListSection`이 대응 패턴으로 사용된다.
- 리스트 상단 또는 탭 주변에는 기간 필터와 같은 보조 탐색 장치가 붙을 수 있다.

## AI 참고 포인트

- 하나의 메인 화면 안에서 배너 유무와 탭 내용이 바뀌는 구조라, 별도 상세 화면보다는 메인 variation으로 해석하는 편이 안전하다.
- 이 화면은 단일 리스트보다 `ServiceBanner + tab switch + section pattern swap` 구조로 이해하는 편이 맞다.
