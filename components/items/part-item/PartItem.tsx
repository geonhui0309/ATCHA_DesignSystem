import type { HTMLAttributes } from "react";

import type { PartItemData } from "../../../contracts/parts/PartItem";
import { horizontalDividerAsset } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import { Thumbnail } from "../../display/thumbnail/Thumbnail";
import "./part-item.css";

const dividerAsset = horizontalDividerAsset;

export interface PartItemProps extends HTMLAttributes<HTMLDivElement>, PartItemData {}

export function PartItem({
  name = "NAME",
  price = "000,000원",
  state = "default",
  className,
  ...rest
}: PartItemProps) {
  return (
    <section {...rest} className={cx("ds-part-item", className)} data-state={state}>
      <div className="ds-part-item__inner">
        <div className="ds-part-item__row">
          <Thumbnail variant="item-thumbnail" />
          <div className="ds-part-item__text">
            <span className="ds-part-item__name">{name}</span>
            <span className="ds-part-item__price">{price}</span>
          </div>
        </div>
      </div>
      <img className="ds-part-item__divider" src={dividerAsset} alt="" />
    </section>
  );
}
