# AUTH_ENTRY_S

## 문서 성격

Reference / Example

## IA 위치

- 1 Depth: `AUTH`
- 2 Depth: `ENTRY`


## Figma 기준

- 링크: Figma 링크 미기입, `Login_page.png` 스크린샷 기준 해석
- 마지막 확인 기준: 2026-05-21 제공 스크린샷의 기본 진입 화면 기준

## 화면 목적

- 인증 플로우 진입점을 제공하고 로그인/회원가입/계정 찾기 흐름으로 분기시킨다.

## 주요 사용자 시나리오

- 사용자는 앱 첫 진입 후 인증이 필요할 때 이 화면에 도달한다.
- 사용자는 로그인, 회원가입, 계정 찾기 중 필요한 흐름을 선택한다.

## 사용된 patterns

- 별도 pattern 없이 진입 CTA 중심으로 조립

## 사용된 components

- `ScreenContainer`
- `Stack`
- `Button`

## 상태 variation

- 기본 진입 상태
- 이메일 로그인 CTA 강조
- Google 로그인 CTA 보조
- 비회원 진입 링크 노출

## AI 참고 포인트

- 탭 구조 밖의 선행 플로우 시작점이다.
- 로고, 서비스 소개 문구, 1차/2차 CTA의 위계가 핵심이다.
