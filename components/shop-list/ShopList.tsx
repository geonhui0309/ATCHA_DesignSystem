import type { HTMLAttributes } from "react";

import { cx } from "../shared/foundation";
import { ShopItem, type ShopItemProps } from "../shop-item/ShopItem";
import "./shop-list.css";

export interface ShopListProps extends HTMLAttributes<HTMLDivElement> {
  items?: ShopItemProps[];
}

const defaultItems: ShopItemProps[] = Array.from({ length: 6 }, (_, index) => ({
  name: `블루핸즈 명지대점 ${index + 1}`,
  address: "서울 서대문구 거북골로 34"
}));

export function ShopList({
  items = defaultItems,
  className,
  ...rest
}: ShopListProps) {
  return (
    <div {...rest} className={cx("ds-shop-list", className)}>
      {items.map((item, index) => (
        <ShopItem key={`${item.name ?? "shop-item"}-${index}`} {...item} />
      ))}
    </div>
  );
}
