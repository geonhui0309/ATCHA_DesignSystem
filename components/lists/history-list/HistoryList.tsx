import type { HTMLAttributes } from "react";

import { HistoryItem, type HistoryItemProps } from "../../items/history-item/HistoryItem";
import { cx } from "../../shared/foundation";
import "./history-list.css";

export interface HistoryListProps extends HTMLAttributes<HTMLDivElement> {
  items?: HistoryItemProps[];
}

const defaultItems: HistoryItemProps[] = Array.from({ length: 8 }, (_, index) => ({
  day: `12.${String(index + 1).padStart(2, "0")}`,
  item: "엔진오일 교체 외 1건",
  name: "블루핸즈 명지대점",
  price: "100,000원"
}));

export function HistoryList({
  items = defaultItems,
  className,
  ...rest
}: HistoryListProps) {
  return (
    <div {...rest} className={cx("ds-history-list", className)}>
      {items.map((item, index) => (
        <HistoryItem key={`${item.day ?? "history-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
