import type { HTMLAttributes } from "react";

import type { HistoryItemData } from "../../../contracts/history/HistoryItem";
import { HistoryItem } from "../../items/history-item/HistoryItem";
import { cx } from "../../shared/foundation";
import "./history-timeline-section.css";

export interface HistoryTimelineSectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: HistoryItemData[];
}

const defaultItems: HistoryItemData[] = Array.from({ length: 8 }, (_, index) => ({
  day: `12.${String(index + 1).padStart(2, "0")}`,
  item: "엔진오일 교체 외 1건",
  name: "블루핸즈 명지대점",
  price: "100,000원"
}));

export function HistoryTimelineSection({
  items = defaultItems,
  className,
  ...rest
}: HistoryTimelineSectionProps) {
  return (
    <div {...rest} className={cx("ds-history-list", className)}>
      {items.map((item, index) => (
        <HistoryItem key={`${item.day ?? "history-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
