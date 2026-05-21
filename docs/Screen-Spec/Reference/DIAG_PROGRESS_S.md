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
- 사용자는 진단이 끝난 뒤 결과 확인 버튼을 사용한다.

## 사용된 patterns

- 별도 pattern 없이 진행 상태 안내 중심

## 사용된 components

- `NavigationBar`
- `Button`
- `ScreenContainer`
- `Stack`

## 상태 variation

- 현재 단계 강조
- 이후 단계 비활성 노출
- 완료 전 결과 버튼 비활성 상태

## AI 참고 포인트

- 현재 디자인은 세로형 단계 리스트를 사용하므로, 기존 `TimelineProgressBar`와 1:1 매칭되기보다는 커스텀 진행 UI에 가깝다.
