# FLOW

## 문서 목적

이 문서는 IA 기준 화면 구조를 실제 사용자 행동 흐름으로 연결해 설명한다.

## 흐름 원칙

- `AUTH`와 `Splash`는 앱 진입 전/직후의 선행 플로우다.
- `HOME`, `DIAG`, `RSV`, `RCD`, `MYP`는 글로벌 내비게이션으로 이동 가능한 주요 도메인이다.
- `RSV`와 `AUTH SIGNUP`은 단계형(step) 플로우로 본다.
- `ERROR`, `EMPTY`, `COMPLETE`는 메인 플로우 중간의 상태 분기 화면이다.

## 주요 플로우

### 1. 앱 진입 및 인증 플로우

1. 진입 화면: `Splash`
2. 사용자 행동: 앱 실행 후 초기 상태 확인
3. 전환 화면:
   - 로그인 필요 시 `AUTH_ENTRY_S`
   - 이미 인증된 사용자면 `HOME_MAIN_S`
4. 완료 조건: 사용자가 인증 완료 후 홈으로 진입

세부 흐름:

1. `AUTH_ENTRY_S`
2. `AUTH_LOGIN_INPUT_S` 또는 회원가입/계정찾기 분기
3. 로그인 실패 시 `AUTH_LOGIN_ERROR_P`
4. 로그인 성공 시 `HOME_MAIN_S`

### 2. 회원가입 플로우

1. 진입 화면: `AUTH_ENTRY_S` 또는 로그인 화면 내 회원가입 진입
2. 사용자 행동: 신규 계정 생성 시작
3. 전환 화면:
   - `AUTH_SIGNUP_AGREEMENT_S`
   - `AUTH_SIGNUP_INPUT_S`
   - `AUTH_SIGNUP_PERMISSION_S`
   - `AUTH_SIGNUP_COMPLETE_S`
4. 완료 조건: 회원가입 완료 후 로그인 또는 홈 진입 가능 상태 도달

설계 포인트:

- 단계가 명확한 순차 플로우다.
- 진행 상태 표시가 필요한 대표 시나리오다.

### 3. 홈에서 서비스 진입 플로우

1. 진입 화면: `HOME_MAIN_S`
2. 사용자 행동:
   - 현재 차량/정비 상태 확인
   - 경고/정비 알림 확인
   - 진단, 예약, 이력, 내 정보 등 주요 기능으로 이동
3. 전환 화면:
   - `HOME_ALERT_DETAIL_S`
   - `HOME_MAINTENANCE_DETAIL_S`
   - `DIAG_MAIN_S`
   - `RSV_TYPE_SELECT_S`
   - `RCD_MAIN_S`
   - `MYP_MAIN_S`
4. 완료 조건: 사용자가 필요한 도메인으로 진입

### 4. 진단 플로우

1. 진입 화면: `DIAG_MAIN_S`
2. 사용자 행동: 차량 진단 시작 또는 진단 결과 확인
3. 전환 화면:
   - 진단 진행 시 `DIAG_PROGRESS_S`
   - 진단 완료 시 `DIAG_RESULT_S`
   - 결과 없음 시 `DIAG_RESULT_EMPTY_S`
   - 시스템 이상 시 `DIAG_ERROR_S` 또는 `DIAG_EMPTY_S`
4. 완료 조건: 사용자가 진단 결과를 이해하고 후속 액션 여부를 판단

설계 포인트:

- `진행`과 `결과`가 명확히 분리된다.
- 상태 분기 문서화가 중요한 영역이다.

### 5. 예약 플로우

1. 진입 화면: `RSV_TYPE_SELECT_S`
2. 사용자 행동: 필요한 정비/소모품/예약 대상을 선택
3. 전환 화면:
   - `RSV_RECOMMEND_S`
   - `RSV_ITEM_LIST_S`
   - `RSV_ITEM_DETAIL_S`
   - `RSV_GARAGE_LIST_S`
   - `RSV_GARAGE_MAP_S`
   - `RSV_GARAGE_DETAIL_S`
   - `RSV_CONFIRM_S`
   - `RSV_COMPLETE_S`
4. 완료 조건: 사용자가 예약을 확정하고 완료 화면에 도달

주요 분기:

- 정비소 선택 방식:
  - 리스트 기반
  - 지도 기반
- 예외 상태:
  - `RSV_EMPTY_S`
  - `RSV_ERROR_S`

설계 포인트:

- 현재 앱에서 가장 긴 단계형 흐름이다.
- 아이템 선택, 정비소 선택, 일정 선택, 확인의 위계가 중요하다.

### 6. 이력 조회 플로우

1. 진입 화면: `RCD_MAIN_S`
2. 사용자 행동: 과거 정비 내역 또는 진단 내역 확인
3. 전환 화면:
   - `RCD_SERVICE_DETAIL_S`
   - `RCD_DIAG_DETAIL_S`
   - 필요 시 `RCD_EMPTY_S`
   - 필요 시 `RCD_ERROR_S`
4. 완료 조건: 사용자가 원하는 이력 상세를 확인

설계 포인트:

- 서비스 이력과 진단 이력은 분리된 상세 흐름으로 관리한다.

### 7. 내 정보 플로우

1. 진입 화면: `MYP_MAIN_S`
2. 사용자 행동: 차량 등록, 자동 예약, 가이드, 연동 설정 진입
3. 전환 화면:
   - `MYP_VEHICLE_REGISTER_S`
   - `MYP_AUTO_RESERVATION_S`
   - `MYP_GUIDE_DETAIL_S`
   - `MYP_INTEGRATION_S`
4. 완료 조건: 사용자가 개인 설정 또는 관리 작업을 완료

## 상태 전이 메모

- `HOME_MAIN_S` -> `HOME_ALERT_DETAIL_S`: 알림 카드 선택 시
- `HOME_MAIN_S` -> `HOME_MAINTENANCE_DETAIL_S`: 정비 상태 상세 진입 시
- `DIAG_MAIN_S` -> `DIAG_PROGRESS_S`: 진단 실행 시
- `DIAG_PROGRESS_S` -> `DIAG_RESULT_S`: 진단 완료 시
- `RSV_GARAGE_DETAIL_S` -> `RSV_CONFIRM_S`: 정비소 상세 선택 완료 시
- `RSV_CONFIRM_S` -> `RSV_COMPLETE_S`: 예약 확정 시
- `RCD_MAIN_S` -> `RCD_SERVICE_DETAIL_S`: 정비 이력 상세 진입 시
- `RCD_MAIN_S` -> `RCD_DIAG_DETAIL_S`: 진단 이력 상세 진입 시

## 예외 흐름

### 인증 실패

1. `AUTH_LOGIN_INPUT_S`
2. 로그인 실패
3. `AUTH_LOGIN_ERROR_P`
4. 재입력 또는 다른 로그인 방식 선택

### 진단 결과 없음

1. `DIAG_MAIN_S`
2. 결과 조회 또는 진단 완료 이후
3. `DIAG_RESULT_EMPTY_S`
4. 안내 메시지 확인 후 재시도 또는 다른 기능 이동

### 예약 불가

1. `RSV_ITEM_LIST_S` 또는 `RSV_GARAGE_LIST_S`
2. 선택 가능한 데이터 없음 또는 시스템 오류
3. `RSV_EMPTY_S` 또는 `RSV_ERROR_S`
4. 이전 단계로 복귀 또는 홈 이동

### 기록 없음

1. `RCD_MAIN_S`
2. 이력 데이터 없음
3. `RCD_EMPTY_S`
4. 홈 또는 관련 기능 이동

## 화면 간 관계 메모

- `HOME`는 허브 역할이다.
- `DIAG`, `RSV`, `RCD`, `MYP`는 홈에서 진입 가능하면서도 글로벌 탭으로 독립 접근 가능하다.
- `RSV`와 `RCD`는 실제 사용자 여정에서 서로 이어질 가능성이 높다.
  - 예약 완료 후 추후 이력으로 축적
- `DIAG` 결과는 예약 또는 이력 확인으로 이어질 수 있다.

## 설계 주의사항

- 중간 이탈 시 복귀 정책은 단계형 플로우에서 특히 중요하다.
- `RSV`와 `AUTH SIGNUP`은 현재 단계, 이전 단계, 다음 행동이 명확해야 한다.
- `ERROR`, `EMPTY`, `COMPLETE`는 메인 화면과 분리된 상태 화면으로 문서화해야 한다.
- 홈에서 다른 도메인으로 이동하는 진입 버튼/패턴은 허브 역할을 유지해야 한다.
