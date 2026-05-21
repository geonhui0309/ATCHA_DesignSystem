import type { PressableState } from "../common/status";

export type AccidentReportSummaryStatus = "processing" | "completed";

export interface AccidentReportSummaryItemData {
  reportDate?: string;
  reportTime?: string;
  locationName?: string;
  accidentTitle?: string;
  status?: AccidentReportSummaryStatus;
  state?: PressableState;
}
