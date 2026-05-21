import { agreementItemMetadata } from "./inputs/agreement-item/metadata";
import { matrixProgressBarMetadata } from "./feedback/matrix-progress-bar/metadata";
import { stepProgressBarMetadata } from "./feedback/step-progress-bar/metadata";
import { timelineProgressBarMetadata } from "./feedback/timeline-progress-bar/metadata";
import { pageSectionMetadata } from "./layout/page-section/metadata";
import { screenContainerMetadata } from "./layout/screen-container/metadata";
import { stackMetadata } from "./layout/stack/metadata";

export const componentMetadataRegistry = [
  agreementItemMetadata,
  screenContainerMetadata,
  stackMetadata,
  pageSectionMetadata,
  stepProgressBarMetadata,
  timelineProgressBarMetadata,
  matrixProgressBarMetadata
];
