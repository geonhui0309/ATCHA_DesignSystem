export type DiagnosticSummaryStatus = "warning" | "success" | "information";

export interface DiagnosticSummaryItemData {
  date?: string;
  guideText?: string;
  resultText?: string;
  status?: DiagnosticSummaryStatus;
}
