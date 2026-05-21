# DIAG_MAIN_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `DIAG`
- 2 Depth: `MAIN`


## Figma 기준

- 링크: Figma 링크 미기입, `Diag_MAIN.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 진단 메인 화면 기준

## 화면 목적

- 진단 기능의 진입점이자 현재 진단 가능 상태를 보여준다.

## 주요 사용자 시나리오

- 사용자는 차량 기본 상태와 최근 진단 요약을 한 화면에서 확인한다.
- 사용자는 최근 사고 리포트 요약을 확인한다.
- 사용자는 하단 CTA를 통해 진단을 시작한다.

## 사용된 patterns

- `DiagnosticSummaryList`
- `ServiceBanner`
- `AccidentReportSummaryList`

## 사용된 components

- `NavigationBar`
- `PageSection`
- `GlobalNavigationBar`
- `AccidentReportSummaryItem`
- `DiagnosticSummaryItem`

## 상태 variation

- 경고 상태 차량 요약
- 최근 진단 요약 노출
- 최근 사고 리포트 요약 노출

## 화면 구조

- 상단에는 현재 차량 상태와 경고 정보를 보여주는 요약 영역이 배치된다.
- 그 아래에는 최근 진단 결과를 preview 형태로 보여주는 `DiagnosticSummaryList`가 배치되며, 각 row는 `DiagnosticSummaryItem`을 사용한다.
- 최근 사고 리포트 영역은 `AccidentReportSummaryList`로 구성되며, 각 row는 `AccidentReportSummaryItem`을 사용한다.
- 하단에는 다음 액션 또는 진단 진입을 위한 CTA와 글로벌 탭이 이어진다.

## AI 참고 포인트

- 상단 차량 요약, 중간 최근 진단 summary, 하단 CTA와 글로벌 탭의 3구간 구성이 핵심이다.
- 최근 진단 영역은 `RCD`용 `DiagnosticListSection`이 아니라, 메인 preview용 `DiagnosticSummaryList`로 해석한다.
- 최근 사고 리포트는 카드형이 아니라 얇은 list row형 요약 item으로 해석한다.
