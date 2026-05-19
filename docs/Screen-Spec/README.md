# Screen-Spec

이 폴더는 IA의 `ScreenID`를 기준으로 화면 문서를 관리한다.

## Reference

완료 여부가 `O`인 화면 문서를 둔다.

- 목적: 이미 설계/디자인이 끝난 화면을 디자인 시스템 언어로 해석하기 위함
- 활용: pattern/component 매핑 예시, reference asset, few-shot example

## Generate

완료 여부가 `X`인 화면 문서를 둔다.

- 목적: 아직 미완성이거나 새로 생성이 필요한 화면 spec 정리
- 활용: prompt와 함께 직접 전달하는 생성 입력

## 작성 규칙

- 파일명은 IA의 `ScreenID`를 그대로 사용한다.
- 예: `AUTH_ENTRY_S.md`, `RSV_CONFIRM_S.md`
- `Reference` 문서는 Figma 링크와 해석 중심으로 작성한다.
- `Generate` 문서는 입력 요구사항과 생성 규칙 중심으로 작성한다.

## 현재 분류 기준

### Reference

- `AUTH_ENTRY_S`
- `AUTH_LOGIN_INPUT_S`
- `AUTH_SIGNUP_AGREEMENT_S`
- `AUTH_SIGNUP_INPUT_S`
- `AUTH_SIGNUP_PERMISSION_S`
- `HOME_MAIN_S`
- `HOME_ALERT_DETAIL_S`
- `HOME_MAINTENANCE_DETAIL_S`
- `DIAG_MAIN_S`
- `DIAG_PROGRESS_S`
- `DIAG_RESULT_S`
- `RSV_TYPE_SELECT_S`
- `RSV_RECOMMEND_S`
- `RSV_ITEM_LIST_S`
- `RSV_ITEM_DETAIL_S`
- `RSV_GARAGE_LIST_S`
- `RSV_GARAGE_MAP_S`
- `RSV_SCHEDULE_SELECT_S`
- `RSV_CONFIRM_S`
- `RSV_COMPLETE_S`
- `RCD_MAIN_S`
- `MYP_MAIN_S`

### Generate

- `AUTH_LOGIN_ERROR_P`
- `AUTH_SIGNUP_COMPLETE_S`
- `AUTH_FIND_ID_S`
- `AUTH_FIND_PASSWORD_S`
- `HOME_EMPTY_S`
- `HOME_ERROR_S`
- `DIAG_ERROR_S`
- `DIAG_EMPTY_S`
- `DIAG_RESULT_EMPTY_S`
- `RSV_GARAGE_DETAIL_S`
- `RSV_ERROR_S`
- `RSV_EMPTY_S`
- `RCD_SERVICE_DETAIL_S`
- `RCD_DIAG_DETAIL_S`
- `RCD_EMPTY_S`
- `RCD_ERROR_S`
- `MYP_VEHICLE_REGISTER_S`
- `MYP_AUTO_RESERVATION_S`
- `MYP_GUIDE_DETAIL_S`
- `MYP_INTEGRATION_S`
