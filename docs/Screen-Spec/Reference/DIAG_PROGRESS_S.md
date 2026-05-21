# DIAG_PROGRESS_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `DIAG`
- 2 Depth: `PROCESS`
- 3 Depth: `PROGRESS`

## Figma 기준

- 링크: Figma 링크 미기입, `Diag_loading.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 원격 진단 진행 상태 기준

## 화면 목적

- 진단 진행 상태와 현재 프로세스를 시각적으로 보여준다.

## 주요 사용자 시나리오

- 사용자는 현재 진단 단계가 어디까지 왔는지 확인한다.
- 사용자는 `DiagActionCard` 안에서 현재 진단 진행 상태와 결과 확인 액션을 함께 인식한다.

## 사용된 patterns

- 별도 pattern 없이 진행 상태 안내 중심

## 사용된 components

- `NavigationBar`
- `DiagActionCard`
- `ScreenContainer`
- `Stack`

## 상태 variation

- 현재 단계 강조
- 이후 단계 비활성 노출
- 완료 전 결과 확인 액션 비활성 상태

## 화면 구조

- 상단에는 현재 진단 진행 흐름을 이해할 수 있는 단계형 진행 영역이 배치된다.
- 하단 핵심 액션 영역은 단일 `Button`이 아니라 `DiagActionCard`로 구성된다.
- `DiagActionCard` 안에는 진행 상태 설명, 안내 문구, 차량 이미지, 결과 확인 액션이 함께 포함된다.

## AI 참고 포인트

- 현재 디자인은 세로형 단계 리스트를 사용하므로, 기존 `TimelineProgressBar`와 1:1 매칭되기보다는 커스텀 진행 UI에 가깝다.
- 하단 액션은 독립 버튼으로 해석하지 말고, `DiagActionCard` 전체를 하나의 상태/액션 블록으로 해석한다.
