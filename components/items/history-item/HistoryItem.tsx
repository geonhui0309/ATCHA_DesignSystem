import type { HTMLAttributes } from "react";

import { cx } from "../../shared/foundation";
import { Thumbnail } from "../../display/thumbnail/Thumbnail";
import "./history-item.css";

export interface HistoryItemProps extends HTMLAttributes<HTMLDivElement> {
  day?: string;
  item?: string;
  name?: string;
  price?: string;
  state?: "default" | "pressed";
}

export function HistoryItem({
  day = "12.06",
  item = "엔진오일 교체 외 1건",
  name = "블루핸즈 명지대점",
  price = "100,000원",
  state = "default",
  className,
  ...rest
}: HistoryItemProps) {
  return (
    <section {...rest} className={cx("ds-history-item", className)} data-state={state}>
      <div className="ds-history-item__leading">
        <Thumbnail variant="shop-logo-thumbnail" />
        <span className="ds-history-item__day">{day}</span>
      </div>
      <div className="ds-history-item__content">
        <span className="ds-history-item__name">{name}</span>
        <div className="ds-history-item__footer">
          <span className="ds-history-item__item">{item}</span>
          <span className="ds-history-item__price">{price}</span>
        </div>
      </div>
    </section>
  );
}
