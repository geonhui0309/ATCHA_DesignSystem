import type { HTMLAttributes } from "react";

import type { AtchapickPartItemData } from "../../../contracts/parts/AtchapickPartItem";
import { cx } from "../../shared/foundation";
import { Thumbnail } from "../../display/thumbnail/Thumbnail";
import "./atchapick-part-item.css";

export interface AtchapickPartItemProps
  extends HTMLAttributes<HTMLDivElement>,
    AtchapickPartItemData {}

export function AtchapickPartItem({
  itemName = "NAME",
  price = "000,000원",
  state = "default",
  className,
  ...rest
}: AtchapickPartItemProps) {
  return (
    <section
      {...rest}
      className={cx("ds-atchapick-part-item", className)}
      data-state={state}
    >
      <Thumbnail variant="item-thumbnail" />
      <div className="ds-atchapick-part-item__content">
        <span className="ds-atchapick-part-item__eyebrow">ATCHA PICK</span>
        <span className="ds-atchapick-part-item__name">{itemName}</span>
        <span className="ds-atchapick-part-item__price">{price}</span>
      </div>
    </section>
  );
}
