# Prompt

## 문서 목적

이 문서는 AI에게 screen spec과 디자인 시스템을 함께 전달할 때의 실행 규칙을 정의한다.

## 기본 입력 순서

1. `docs/DesignSystem.md`
2. 관련 `docs/Screen-Spec/*`
3. 필요 시 `PRD.md`, `FRD.md`, `IA.md`, `FLOW.md`, `Design.md`

## AI 생성 규칙

- 가능한 경우 `patterns`를 먼저 사용한다.
- 적합한 pattern이 없으면 `components`로 조립한다.
- 임의 CSS보다 token과 기존 컴포넌트 스타일을 우선 사용한다.
- 기존 naming과 export surface를 존중한다.
- 화면 구조는 `ScreenContainer`, `Stack`, `PageSection` 기준으로 안정화한다.
- spec에 명시되지 않은 sticky, floating, 강조 박스, 보조 배지, 추가 안내문을 임의로 넣지 않는다.
- 디자인 시스템 component와 pattern의 내부 카피, 강조 표현, 레이아웃을 임의로 재해석하지 않는다.

## 새 컴포넌트 허용 규칙

- 기존 pattern과 component로 요구사항을 충족할 수 없을 때만 새 컴포넌트를 만든다.
- 새 컴포넌트가 필요하더라도 먼저 화면 내부 조합으로 해결 가능한지 검토한다.
- 새 컴포넌트를 만들면 기존 design token과 semantic naming을 반드시 따른다.
- 새 컴포넌트는 이후 다른 화면에서도 재사용 가능한 구조인지 확인한다.

## 새 컴포넌트 생성 시 필수 원칙

- color, spacing, radius, typography, shadow는 기존 token을 우선 사용한다.
- 기존 component와 비슷한 prop naming, 상태 구조, CSS 작성 방식을 따른다.
- layout은 `ScreenContainer`, `Stack`, `PageSection`과 함께 쓸 수 있어야 한다.
- 기존 pattern을 대체하는 경우 왜 대체가 필요한지 설명 가능해야 한다.

## 사전 검증 체크

- 사용하려는 pattern이 실제 published dist에 존재하는지 확인한다.
- component가 내부 샘플 카피를 갖는지, 실데이터 prop을 받는지 구현 파일을 확인한다.
- 문구 길이 제한이 spec에 없으면 짧은 기본값을 유지하고 자의적으로 설명을 늘리지 않는다.

## import 규칙

- `atcha_designsystem/components`
- `atcha_designsystem/patterns`
- `atcha_designsystem/contracts`

## 금지 사항

- 디자인 시스템에 없는 새 시각 언어를 임의로 발명하지 않는다.
- pattern으로 해결 가능한 구조를 다시 primitive로 과하게 분해하지 않는다.
- 기존 contract를 무시하고 임의 데이터 shape를 만들지 않는다.
- token에 없는 색상, spacing, typography 값을 무분별하게 직접 추가하지 않는다.
- 화면 하나만을 위해 중복되는 새 컴포넌트를 불필요하게 만들지 않는다.
- spec에 없는 sticky CTA, floating action, 고정 footer, 임의 강조 카드를 추가하지 않는다.
- icon prop의 의미를 추정해서 이름 기반 매핑이나 임의 asset 치환을 하지 않는다.

## 출력 기대사항

- 사용된 pattern/component 목록
- 화면 구조 설명
- 필요한 props 또는 contract shape
- 예외 상태/빈 상태/로딩 상태 고려 여부
