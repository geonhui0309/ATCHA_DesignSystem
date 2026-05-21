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

## 사용된 components

- `NavigationBar`
- `PageSection`
- `Button`
- `DiagReportCard`
- `DiagnosticDetailItem`

## 상태 variation

- 경고 개수 요약
- 점검 필요/주의/양호 카운트 분리
- 경고등 item 목록
- 교체 필요 item 목록
- 진단 코드 요약 및 하단 2CTA

## 화면 구조

- 상단 요약 영역은 `DiagReportCard`로 구성된다.
- `점등된 경고등` 영역은 섹션 제목 아래에 `DiagnosticDetailItem`이 반복되는 구조로 배치된다.
- `진단 코드 분석` 영역은 `DiagnosticCodeList`로 구성된다.
- `교체 필요 항목` 영역도 현재는 `DiagnosticDetailItem`과 동일한 row 구조를 사용한다.
- 하단에는 `돌아가기`, `정비소 예약`의 2CTA가 배치된다.

## AI 참고 포인트

- 일반 사용자용 요약 정보와 전문가용 진단 코드가 한 화면에 함께 존재한다.
- 현재 화면의 `점등된 경고등`과 `교체 필요 항목`은 둘 다 얇은 `DiagnosticDetailItem` 반복 구조로 읽는 편이 맞다.
