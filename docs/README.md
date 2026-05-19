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
- `Screen-Spec/Generate/`: AI가 실제로 생성할 신규 화면 spec 문서

## 작성 원칙

- 디자인 시스템에서 이미 존재하는 pattern과 component를 우선 사용한다.
- 새 화면을 생성할 때는 `Prompt.md`와 `Screen-Spec/Generate/*`를 함께 사용한다.
- 이미 확정된 화면은 `Reference` 문서로 정리하고, Figma 링크와 사용 패턴 매핑을 남긴다.
