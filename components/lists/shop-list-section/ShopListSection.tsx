import type { HTMLAttributes } from "react";

import type { ShopItemData } from "../../../contracts/shop/ShopItem";
import { cx } from "../../shared/foundation";
import { ShopItem } from "../../items/shop-item/ShopItem";
import "./shop-list-section.css";

export interface ShopListSectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: ShopItemData[];
}

const defaultItems: ShopItemData[] = Array.from({ length: 6 }, (_, index) => ({
  name: `블루핸즈 명지대점 ${index + 1}`,
  address: "서울 서대문구 거북골로 34"
}));

export function ShopListSection({
  items = defaultItems,
  className,
  ...rest
}: ShopListSectionProps) {
  return (
    <div {...rest} className={cx("ds-shop-list", className)}>
      {items.map((item, index) => (
        <ShopItem key={`${item.name ?? "shop-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
