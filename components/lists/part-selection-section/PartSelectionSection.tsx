import type { HTMLAttributes } from "react";

import type { AtchapickPartItemData } from "../../../contracts/parts/AtchapickPartItem";
import type { PartItemData } from "../../../contracts/parts/PartItem";
import { AtchapickPartItem } from "../../items/atchapick-part-item/AtchapickPartItem";
import { PartItem } from "../../items/part-item/PartItem";
import { cx } from "../../shared/foundation";
import "./part-selection-section.css";

export interface PartSelectionSectionProps extends HTMLAttributes<HTMLDivElement> {
  atchapickPartItem?: AtchapickPartItemData;
  items?: PartItemData[];
}

const defaultAtchapickPartItem: AtchapickPartItemData = {
  itemName: "한국타이어 Ventus S2 AS",
  price: "154,000원"
};

const defaultItems: PartItemData[] = Array.from({ length: 7 }, (_, index) => ({
  name: `부품 ${index + 1}`,
  price: "34,000원"
}));

export function PartSelectionSection({
  atchapickPartItem = defaultAtchapickPartItem,
  items = defaultItems,
  className,
  ...rest
}: PartSelectionSectionProps) {
  return (
    <div {...rest} className={cx("ds-part-list", className)}>
      <AtchapickPartItem {...atchapickPartItem} />
      {items.map((item, index) => (
        <PartItem key={`${item.name ?? "part-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
