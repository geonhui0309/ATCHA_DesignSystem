# DIAG_RESULT_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `DIAG`
- 2 Depth: `RESULT`
- 3 Depth: `SUMMARY`

## Figma 기준

- 링크: Figma 링크 미기입, `Diag_MAIN-1.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 리포트 요약 결과 화면 기준

## 화면 목적

- 진단 결과 요약과 후속 액션 가능성을 제공한다.

## 주요 사용자 시나리오

- 사용자는 문제 개수와 위험 수준을 요약으로 확인한다.
- 사용자는 경고등과 진단 코드를 읽고 원인을 파악한다.
- 사용자는 돌아가기 또는 정비소 예약으로 후속 행동을 선택한다.

## 사용된 patterns

- `DiagnosticCodeList`
- `VehicleWarningSection`

## 사용된 components

- `NavigationBar`
- `PageSection`
- `Button`
- `Thumbnail`

## 상태 variation

- 경고 개수 요약
- 점검 필요/주의/양호 카운트 분리
- 경고등 카드 목록
- 진단 코드 요약 및 하단 2CTA

## AI 참고 포인트

- 일반 사용자용 요약 정보와 전문가용 진단 코드가 한 화면에 함께 존재한다.
