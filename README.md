# ATCHA Design System

ATCHA의 화면 생성과 UI 구현을 위한 디자인 시스템 패키지입니다.

이 패키지는 AI가 화면을 조립할 때 바로 사용할 수 있도록 다음 레이어를 함께 제공합니다.

- `components`: 기본 UI 구현체
- `patterns`: 화면 조합에 가까운 section/list 단위
- `contracts`: 공유 데이터 shape와 타입
- `styles.css`: 컴포넌트 공통 스타일
- `tokens.css`: 디자인 토큰 CSS 변수

## Package Goal

- ATCHA 화면을 코드로 일관되게 구현한다.
- AI가 screen spec을 읽고 기존 UI를 우선 재사용할 수 있게 한다.
- 필요 시 새 컴포넌트를 만들더라도 기존 token과 규칙 안에서 확장하게 한다.

## Install

```bash
npm install atcha_designsystem
```

`react`와 `react-dom`은 consumer app에서 직접 제공해야 합니다.

## Exports

```ts
import { ScreenContainer, Button } from "atcha_designsystem/components";
import { ServiceMenuSection } from "atcha_designsystem/patterns";
import type { ServiceMenuItemContract } from "atcha_designsystem/contracts";

import "atcha_designsystem/styles.css";
import "atcha_designsystem/tokens.css";
```

공식 entrypoint는 아래만 사용합니다.

- `atcha_designsystem`
- `atcha_designsystem/components`
- `atcha_designsystem/patterns`
- `atcha_designsystem/contracts`
- `atcha_designsystem/styles.css`
- `atcha_designsystem/tokens.css`

## AI Usage Rule

AI가 이 패키지를 사용할 때는 아래 우선순위를 따릅니다.

1. 기존 `patterns`가 있으면 우선 사용
2. 없으면 `components`와 layout primitive로 조합
3. 그래도 해결이 안 되면 새 컴포넌트를 생성

새 컴포넌트를 만들 때는 반드시:

- 기존 token을 우선 사용
- 기존 naming 규칙을 따름
- 기존 pattern과 충돌하는 새로운 시각 언어를 만들지 않음

자세한 규칙은 [docs/DesignSystem.md](docs/DesignSystem.md) 와 [docs/Prompt.md](docs/Prompt.md) 를 참고합니다.

## Build

```bash
npm run build:tokens
npm run build:package
```

## Publish Check

퍼블리시 전에는 아래 명령으로 패키지 산출물을 확인합니다.

```bash
npm run prepublishOnly
```

이 과정에는 다음이 포함됩니다.

1. token build
2. typecheck
3. package build
4. `npm pack --dry-run` 검증

## Docs

문서 진입점:

- [docs/README.md](docs/README.md)
- [docs/DesignSystem.md](docs/DesignSystem.md)
- [docs/Prompt.md](docs/Prompt.md)
- [docs/Screen-Spec/README.md](docs/Screen-Spec/README.md)

## License

이 패키지는 현재 `UNLICENSED`로 설정되어 있으며, 공개 오픈소스 배포를 전제로 하지 않습니다.
