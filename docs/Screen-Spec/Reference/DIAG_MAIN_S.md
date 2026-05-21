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

- 사용자는 차량 기본 상태와 최근 진단 내역을 한 화면에서 확인한다.
- 사용자는 최근 사고 리포트 요약을 확인한다.
- 사용자는 하단 CTA를 통해 진단을 시작한다.

## 사용된 patterns

- `DiagnosticListSection`
- `ServiceBanner`

## 사용된 components

- `NavigationBar`
- `PageSection`
- `GlobalNavigationBar`

## 상태 variation

- 경고 상태 차량 요약
- 최근 진단 내역 노출
- 최근 사고 리포트 요약 노출

## AI 참고 포인트

- 상단 차량 요약, 중간 최근 이력, 하단 CTA와 글로벌 탭의 3구간 구성이 핵심이다.
