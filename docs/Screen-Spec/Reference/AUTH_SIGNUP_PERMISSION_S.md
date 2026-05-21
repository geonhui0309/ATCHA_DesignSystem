# AUTH_SIGNUP_PERMISSION_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `AUTH`
- 2 Depth: `SIGNUP`
- 3 Depth: `PERMISSION`

## Figma 기준

- 링크: Figma 링크 미기입, `권한 요청.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 권한 허용 단계 기준

## 화면 목적

- 앱 사용에 필요한 권한을 사용자에게 설명하고 동의/허용을 유도한다.

## 주요 사용자 시나리오

- 사용자는 권한 목적을 이해하고 다음 단계로 진행한다.
- 사용자는 필수 권한과 선택 권한을 구분해 읽는다.
- 사용자는 이전 또는 다음 액션으로 회원가입 흐름을 이동한다.

## 사용된 patterns

- `AuthorityList`

## 사용된 components

- `StepProgressBar`
- `Button`

## 상태 variation

- 3단계 활성 상태
- 필수/선택 권한 그룹 분리
- 이전/다음 2버튼 하단 고정

## AI 참고 포인트

- 실제 OS 권한 허용 팝업이 아니라, 허용 전에 이유를 설명하는 사전 안내 화면이다.
