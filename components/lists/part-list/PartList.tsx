import type { HTMLAttributes } from "react";

import {
  AtchapickPartItem,
  type AtchapickPartItemProps
} from "../../items/atchapick-part-item/AtchapickPartItem";
import { PartItem, type PartItemProps } from "../../items/part-item/PartItem";
import { cx } from "../../shared/foundation";
import "./part-list.css";

export interface PartListProps extends HTMLAttributes<HTMLDivElement> {
  atchapickPartItem?: AtchapickPartItemProps;
  items?: PartItemProps[];
}

const defaultAtchapickPartItem: AtchapickPartItemProps = {
  itemName: "한국타이어 Ventus S2 AS",
  price: "154,000원"
};

const defaultItems: PartItemProps[] = Array.from({ length: 7 }, (_, index) => ({
  name: `부품 ${index + 1}`,
  price: "34,000원"
}));

export function PartList({
  atchapickPartItem = defaultAtchapickPartItem,
  items = defaultItems,
  className,
  ...rest
}: PartListProps) {
  return (
    <div {...rest} className={cx("ds-part-list", className)}>
      <AtchapickPartItem {...atchapickPartItem} />
      {items.map((item, index) => (
        <PartItem key={`${item.name ?? "part-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
