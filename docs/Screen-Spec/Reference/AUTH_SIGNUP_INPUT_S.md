# AUTH_SIGNUP_INPUT_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `AUTH`
- 2 Depth: `SIGNUP`
- 3 Depth: `INPUT`

## Figma 기준

- 링크: Figma 링크 미기입, `회원가입_정보입력.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 회원가입 정보 입력 단계 기준

## 화면 목적

- 신규 계정 생성을 위한 기본 입력 정보를 수집한다.

## 주요 사용자 시나리오

- 사용자는 회원가입 필수 정보를 입력한다.
- 사용자는 이름, 전화번호, 이메일, 비밀번호, 비밀번호 확인을 순서대로 작성한다.
- 사용자는 모든 필수값 충족 후 다음 단계로 이동한다.

## 사용된 patterns

- 별도 pattern 없이 다단계 입력 폼 조합 중심

## 사용된 components

- `InputField`
- `Button`
- `StepProgressBar`

## 상태 variation

- 2단계 활성 상태
- 입력 전 기본 상태
- 필수값 충족 전 다음 버튼 비활성 상태

## AI 참고 포인트

- 상단 `StepProgressBar`로 현재 단계가 강조되며, 입력 필드는 단일 컬럼 스택으로 반복된다.
