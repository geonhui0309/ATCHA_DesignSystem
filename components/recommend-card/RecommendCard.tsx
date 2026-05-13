import type { HTMLAttributes } from "react";

import { Button } from "../button";
import { cx } from "../shared/foundation";
import { Thumbnail } from "../thumbnail/Thumbnail";
import "./recommend-card.css";

export interface RecommendCardProps extends HTMLAttributes<HTMLDivElement> {
  category?: string;
  caption?: string;
  itemName?: string;
  price?: string;
  selected?: boolean;
}

export function RecommendCard({
  category = "Category_name",
  caption = "description",
  itemName = "NAME",
  price = "000,000원",
  selected = false,
  className,
  ...rest
}: RecommendCardProps) {
  return (
    <section
      {...rest}
      className={cx("ds-recommend-card", className)}
      data-selected={selected ? "true" : undefined}
    >
      <div className="ds-recommend-card__header">
        <span className="ds-recommend-card__category">{category}</span>
        <span className="ds-recommend-card__caption">{caption}</span>
      </div>
      <div className="ds-recommend-card__body">
        <div className="ds-recommend-card__content">
          <Thumbnail variant="item-thumbnail" />
          <div className="ds-recommend-card__meta">
            <span className="ds-recommend-card__name">{itemName}</span>
            <span className="ds-recommend-card__price">{price}</span>
          </div>
          <Button className="ds-recommend-card__action" variant="text" size="xsmall" iconRight>
            더보기
          </Button>
        </div>
      </div>
    </section>
  );
}
