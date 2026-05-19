# IA

## 문서 목적

이 문서는 현재 정리된 메뉴 트리, 시트 기반 ScreenID 목록, Figma 흐름 이미지를 기준으로 ATCHA 앱의 정보 구조를 1차 정리한다.

## 정리 기준

- 이 문서는 현재 자료를 해석한 working IA다.
- 완료 여부가 `X`인 화면도 정보 구조상 필요한 경우에는 함께 기록한다.
- 이름이 서로 다르게 표기된 경우 다음 약어를 기준으로 통일했다.
  - `AUTH`: 인증
  - `HOME`: 홈
  - `DIAG`: 진단
  - `RSV`: 예약
  - `RCD`: 이력/기록
  - `MYP`: 내 정보

## 최상위 구조

- Splash
- AUTH
- HOME
- DIAG
- RSV
- RCD
- MYP

## 글로벌 내비게이션 기준

현재 자료상 앱의 주요 1depth는 아래 5개 탭 구조로 읽힌다.

1. HOME
2. DIAG
3. RSV
4. RCD
5. MYP

`AUTH`와 `Splash`는 글로벌 탭보다 상위의 진입 플로우로 본다.

## 메뉴 트리

### Splash

- Splash

### AUTH

- ENTRY
- LOGIN
  - 로그인 방식 선택
  - 비회원 로그인
  - Google 로그인
  - 이메일 로그인
  - 로그인 입력
  - 로그인 에러
- SIGNUP
  - 약관 동의
  - 계정 생성 / 입력
  - 권한 동의
  - 가입 완료
- FIND
  - 아이디 찾기
  - 비밀번호 찾기

### HOME

- MAIN
- ALERT
  - DETAIL
- MAINTENANCE
  - DETAIL
- SYSTEM
  - EMPTY
  - ERROR

### DIAG

- MAIN
- PROCESS
  - PROGRESS
- RESULT
  - SUMMARY
  - EMPTY
- SYSTEM
  - ERROR
  - EMPTY

### RSV

- TYPE
  - SELECT
- ITEM
  - RECOMMEND
  - LIST
  - DETAIL
- GARAGE
  - LIST
  - MAP
  - DETAIL
- SCHEDULE
  - SELECT
- CONFIRM
- COMPLETE
- SYSTEM
  - ERROR
  - EMPTY

### RCD

- MAIN
- SERVICE
  - DETAIL
- DIAG
  - DETAIL
- SYSTEM
  - EMPTY
  - ERROR

### MYP

- MAIN
- VEHICLE
  - REGISTER
- RESERVATION
  - AUTO
- GUIDE
  - DETAIL
- INTEGRATION

## ScreenID 기준 화면 목록

### AUTH

- `AUTH_ENTRY_S`
- `AUTH_LOGIN_INPUT_S`
- `AUTH_LOGIN_ERROR_P`
- `AUTH_SIGNUP_AGREEMENT_S`
- `AUTH_SIGNUP_INPUT_S`
- `AUTH_SIGNUP_PERMISSION_S`
- `AUTH_SIGNUP_COMPLETE_S`
- `AUTH_FIND_ID_S`
- `AUTH_FIND_PASSWORD_S`

### HOME

- `HOME_MAIN_S`
- `HOME_ALERT_DETAIL_S`
- `HOME_MAINTENANCE_DETAIL_S`
- `HOME_EMPTY_S`
- `HOME_ERROR_S`

### DIAG

- `DIAG_MAIN_S`
- `DIAG_PROGRESS_S`
- `DIAG_RESULT_S`
- `DIAG_ERROR_S`
- `DIAG_EMPTY_S`
- `DIAG_RESULT_EMPTY_S`

### RSV

- `RSV_TYPE_SELECT_S`
- `RSV_RECOMMEND_S`
- `RSV_ITEM_LIST_S`
- `RSV_ITEM_DETAIL_S`
- `RSV_GARAGE_LIST_S`
- `RSV_GARAGE_MAP_S`
- `RSV_GARAGE_DETAIL_S`
- `RSV_SCHEDULE_SELECT_S`
- `RSV_CONFIRM_S`
- `RSV_COMPLETE_S`
- `RSV_ERROR_S`
- `RSV_EMPTY_S`

### RCD

- `RCD_MAIN_S`
- `RCD_SERVICE_DETAIL_S`
- `RCD_DIAG_DETAIL_S`
- `RCD_EMPTY_S`
- `RCD_ERROR_S`

### MYP

- `MYP_MAIN_S`
- `MYP_VEHICLE_REGISTER_S`
- `MYP_AUTO_RESERVATION_S`
- `MYP_GUIDE_DETAIL_S`
- `MYP_INTEGRATION_S`

## 영역별 정보 역할

### AUTH

- 앱 사용 시작 전 인증/가입/계정 복구를 처리하는 진입 영역
- 탭 구조 밖의 선행 플로우

### HOME

- 현재 차량 상태와 정비 진행 상태를 가장 먼저 보여주는 대시보드
- 서비스 진입의 허브 역할

### DIAG

- 차량 진단 실행, 진행, 결과 확인을 담당하는 기능 영역
- `process`와 `result`가 명확히 나뉜 구조

### RSV

- 소모품/정비 항목 선택부터 정비소 선택, 일정 선택, 확인, 완료까지 이어지는 예약 플로우
- 단계형 플로우 구조가 가장 강한 영역

### RCD

- 과거 정비 이력과 진단 이력을 확인하는 기록 영역
- `service detail`과 `diag detail`이 분리되어 있음

### MYP

- 차량 등록, 자동 예약, 가이드, 연동 등 사용자 개인 설정/관리 영역

## 네비게이션 규칙

### 글로벌 이동

- `HOME`, `DIAG`, `RSV`, `RCD`, `MYP`는 하단 글로벌 내비게이션으로 이동하는 구조로 본다.
- `AUTH`는 로그인 전 플로우라 글로벌 내비게이션 밖에 위치한다.

### 로컬 이동

- 각 2depth는 해당 도메인 내부의 리스트/상세/진행/결과 흐름을 이룬다.
- `DETAIL`, `ERROR`, `EMPTY`, `COMPLETE`는 대부분 서브 상태 화면 또는 세부 화면으로 해석한다.

### 단계형 이동

- `RSV`와 `AUTH SIGNUP`은 순차 단계형 흐름을 가진다.
- 이 두 영역은 progress UI와 step 구조 문서화가 중요하다.

## 상태 화면 규칙

- `EMPTY`와 `ERROR`는 개별 기능 화면이 아니라 시스템/결과 상태 화면으로 분리 관리한다.
- 상태 화면은 screen spec 작성 시 별도 섹션으로 반드시 포함한다.

## IA 관점 우선순위

문서상 우선 reference로 정리하기 좋은 주요 화면군은 아래와 같다.

1. `HOME_MAIN_S`
2. `DIAG_MAIN_S`
3. `DIAG_PROGRESS_S`
4. `DIAG_RESULT_S`
5. `RSV_TYPE_SELECT_S`
6. `RSV_GARAGE_LIST_S`
7. `RSV_SCHEDULE_SELECT_S`
8. `RCD_MAIN_S`
9. `MYP_MAIN_S`

## 확인 필요 사항

- `AUTH_ENTRY`와 `LOGIN`의 관계가 실제 화면 분리인지 진입 wrapper인지 확인 필요
- `HOME ALERT DETAIL`과 `HOME MAINTENANCE DETAIL`이 독립 화면인지 modal/panel인지 확인 필요
- `RSV ITEM RECOMMEND`와 `RSV ITEM LIST`의 선후 관계 확인 필요
- `MYP RESERVATION AUTO`의 실제 기능 범위가 자동 예약 설정인지 예약 현황인지 확인 필요
- `INTEGRATION`이 계정 연동 단일 화면인지 다단계 흐름인지 확인 필요
