import type { DiagnosticStatus } from "../common/status";

export interface DiagItemData {
  day?: string;
  description?: string;
  header?: string;
  status?: DiagnosticStatus;
}
