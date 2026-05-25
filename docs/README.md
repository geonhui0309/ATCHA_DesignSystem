# Docs

이 폴더는 ATCHA 디자인 시스템과 화면 생성 워크플로우에 필요한 공식 문서를 모아둔 기준점이다.

## 읽기 순서

1. `PRD.md`
2. `FRD.md`
3. `IA.md`
4. `FLOW.md`
5. `DesignSystem.md`
6. `Design.md`
7. `Prompt.md`
8. `Screen-Spec/`

## 문서 역할

- `PRD.md`: 제품 목적과 사용자 가치
- `FRD.md`: 기능 요구사항과 상태/조건
- `IA.md`: 정보 구조와 화면 체계
- `FLOW.md`: 사용자 흐름과 화면 전환
- `DesignSystem.md`: npm 디자인 시스템 사용 규칙
- `Design.md`: 시각적 원칙과 UI 해석 기준
- `Prompt.md`: AI 호출 시 반드시 따라야 하는 실행 규칙
- `Screen-Spec/`: 화면 reference와 generate spec

## Screen-Spec 구성

- `Screen-Spec/Reference/`: 이미 Figma로 확정된 화면을 디자인 시스템 언어로 해석한 예시 문서
- `Screen-Spec/Generate/`: AI 화면 생성을 위한 spec 자산 또는 입력 문서

## 작성 원칙

- 디자인 시스템에서 이미 존재하는 pattern과 component를 우선 사용한다.
- 새 화면을 생성할 때는 `Prompt.md`와 `Screen-Spec/Generate/*`를 기준 자산으로 활용하거나, 같은 형식의 md를 대화창에 직접 입력으로 전달할 수 있다.
- 이미 확정된 화면은 `Reference` 문서로 정리하고, Figma 링크와 사용 패턴 매핑을 남긴다.

## AI 주의사항

- screen spec에 없는 sticky, floating, bottom-fixed UI는 임의로 추가하지 않는다.
- 디자인 시스템 component와 pattern의 내부 카피, 강조 표현, 레이아웃 의미를 임의로 바꾸지 않는다.
- component prop 이름만 보고 의미를 추정하지 않고, 실제 contract와 구현 파일을 함께 확인한다.
- published pattern export와 실제 산출물이 다를 수 있으므로, import 전 dist 산출물과 storybook 노출 상태를 함께 확인한다.
