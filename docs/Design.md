# Design

## 문서 목적

이 문서는 시각적 원칙과 화면 해석 기준을 정리한다.

## 시각 원칙

- 상태 정보는 화면 상단에서 우선 노출한다.
- 섹션은 명확한 위계와 간격으로 분리한다.
- 반복 콘텐츠는 패턴 단위로 일관되게 구성한다.

## spacing 원칙

- 임의 마진보다 `Stack`, `PageSection`, token 기반 간격을 사용한다.
- 화면 좌우 여백은 `ScreenContainer` 기준을 우선한다.

## typography 원칙

- token으로 정의된 semantic typography를 우선 사용한다.
- 상태/라벨/본문/보조 정보의 위계를 혼합하지 않는다.

## 상태 표현 원칙

- 진행 상태는 맥락에 맞는 ProgressBar를 사용한다.
- 배너/카드/리스트의 tone과 상태 표시는 분리해서 해석한다.

## 패턴 선택 원칙

- 화면 수준의 반복 구조는 pattern으로 해결한다.
- 단순 배치는 layout primitive로 해결한다.
