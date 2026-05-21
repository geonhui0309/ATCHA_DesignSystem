# AUTH_LOGIN_INPUT_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `AUTH`
- 2 Depth: `LOGIN`
- 3 Depth: `INPUT`

## Figma 기준

- 링크: Figma 링크 미기입, `Login_page01.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 이메일 로그인 입력 화면 기준

## 화면 목적

- 사용자가 인증 정보를 입력하고 로그인 시도를 수행하게 한다.

## 주요 사용자 시나리오

- 사용자는 선택한 로그인 방식에 맞는 입력을 진행한다.
- 인증 성공 시 홈으로 진입한다.

## 사용된 patterns

- 별도 pattern 없이 입력 폼 조합 중심

## 사용된 components

- `NavigationBar`
- `InputField`
- `Button`

## 상태 variation

- 기본 입력
- 빈 입력 상태
- 입력 완료 후 로그인 버튼 활성/비활성
- Google 로그인 보조 CTA 유지

## AI 참고 포인트

- 오류 화면은 별도 `Generate` 문서로 분리되어 있다.
- 이메일/비밀번호 2필드 구조이며, 하단 주 CTA는 입력 충족 전 비활성 상태를 가진다.
