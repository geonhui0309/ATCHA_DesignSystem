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
- 상단 차량 상태 영역은 기존 component의 기본 구조를 우선 유지한다.
- CTA와 글로벌 탭은 문서 흐름 안에서 이어지며, 별도 고정 영역이나 floating CTA로 변형하지 않는다.
- section description과 row 문구는 짧게 유지하고, 내부 row가 이미 설명을 담고 있으면 보조 문구를 과도하게 늘리지 않는다.


## 구현 금지선

- 하단 CTA는 일반 문서 흐름에 포함하며 sticky, floating, bottom-fixed CTA로 변형하지 않는다.
- `GlobalNavigationBar`는 CTA 아래에 직접 이어지는 구조로 유지하며 중간에 별도 고정 영역이나 추가 wrapper를 넣지 않는다.
- `ServiceBanner`, `VehicleStatusCard`, `DiagnosticSummaryList`, `AccidentReportSummaryList`의 내부 카피, 강조 표현, 레이아웃을 임의 수정하지 않는다.
- 최근 진단 요약과 사고 리포트 요약은 preview 성격을 유지하며 과도한 설명 문구, 보조 배지, 추가 액션을 넣지 않는다.
- 경고 아이콘은 제공된 asset 기준으로 사용하며 icon name 추정이나 임의 SVG 치환으로 재구성하지 않는다.

## 문구 길이 가이드

- 최근 진단 요약과 사고 리포트 요약의 주요 문구는 한 row 안에서 1줄에서 2줄 이내로 유지한다.
- CTA, 버튼, 섹션 액션 라벨은 짧은 행동 문구로 유지하고 문장형 설명으로 확장하지 않는다.
