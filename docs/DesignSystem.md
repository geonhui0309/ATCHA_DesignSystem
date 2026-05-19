# DesignSystem

## 문서 목적

이 문서는 ATCHA 디자인 시스템 npm 사용 규칙과 AI 조립 기준을 설명한다.

## 현재 구성

- `tokens`
- `components`
- `contracts`
- `patterns`
- `metadata`
- `exports`

## import 규칙

- primitive, item, card, layout, feedback component:
  - `atcha_designsystem/components`
- pattern:
  - `atcha_designsystem/patterns`
- shared data contract:
  - `atcha_designsystem/contracts`

## 우선 사용 규칙

1. 먼저 `patterns`에 적합한 블록이 있는지 확인한다.
2. 패턴이 없으면 `components`의 layout primitive와 component로 조립한다.
3. 임의 div/margin보다 `ScreenContainer`, `Stack`, `PageSection`을 우선 사용한다.

## 새 컴포넌트 생성 규칙

기존 pattern과 component로 해결 가능한 경우에는 우선 재사용한다.

다만 아래 조건 중 하나에 해당하면 새 컴포넌트를 만들 수 있다.

- 기능적으로 기존 컴포넌트로 대응이 어렵다.
- 기존 컴포넌트를 억지로 조합하면 의미나 사용성이 왜곡된다.
- 같은 구조가 여러 화면에서 반복될 가능성이 높다.
- 화면 spec의 핵심 요구사항이 현재 시스템에 존재하지 않는다.

새 컴포넌트를 만들 때는 반드시 다음 원칙을 따른다.

- spacing, color, radius, typography, shadow는 기존 design token을 우선 사용한다.
- 기존 component의 naming, prop 구조, CSS 작성 규칙을 따른다.
- layout은 `ScreenContainer`, `Stack`, `PageSection` 같은 기존 primitive와 호환되게 만든다.
- 상태값과 tone naming은 기존 semantic naming과 contracts를 우선 따른다.
- 재사용 가능성이 낮은 화면 전용 구조라면 새 component보다 screen 내부 조합으로 우선 해결한다.

## 새 컴포넌트 생성 전 체크리스트

- 이 요구사항을 기존 pattern으로 해결할 수 있는가
- 기존 component 조합으로 해결할 수 있는가
- 새 컴포넌트가 다른 화면에서도 재사용될 가능성이 있는가
- 새 컴포넌트가 기존 design token만으로 스타일링 가능한가
- 새 컴포넌트가 기존 naming과 상태 구조를 크게 벗어나지 않는가

## 금지 사항

- token에 없는 색상값을 직접 추가하지 않는다.
- spacing을 임의 숫자로 반복 정의하지 않는다.
- typography token 대신 임의 font-size, line-height를 남발하지 않는다.
- 기존 pattern으로 충분히 해결 가능한 구조를 중복 component로 만들지 않는다.
- 새 컴포넌트를 위해 기존 시스템과 충돌하는 새로운 시각 언어를 추가하지 않는다.

## metadata 활용 규칙

- `patterns` metadata는 화면 블록 선택 기준으로 사용한다.
- `components` metadata는 세부 조립과 대체 컴포넌트 선택 기준으로 사용한다.

## contracts 활용 규칙

- 여러 패턴과 컴포넌트가 공유하는 데이터 shape는 `contracts`를 따른다.
- primitive 자체의 내부 스타일 타입은 contract로 올리지 않는다.

## 주요 pattern

- `ServiceBanner`
- `ServiceMenuSection`
- `VehicleWarningSection`
- `DiagnosticListSection`
- `DiagnosticCodeList`
- `HistoryTimelineSection`
- `PartSelectionSection`
- `ShopListSection`
- `AdditionalServiceSection`

## 주요 layout / feedback component

- `ScreenContainer`
- `Stack`
- `PageSection`
- `StepProgressBar`
- `TimelineProgressBar`
- `MatrixProgressBar`
