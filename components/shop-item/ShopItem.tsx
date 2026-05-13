import type { HTMLAttributes } from "react";

import { CategoryLabel } from "../category-label/CategoryLabel";
import { ChoiceChip } from "../choice-chip";
import { cx } from "../shared/foundation";
import { Thumbnail } from "../thumbnail/Thumbnail";
import "./shop-item.css";

const defaultCategories = [
  "#엔진오일",
  "#타이어",
  "#브레이크패드",
  "#미션오일",
  "#부동액",
  "#브레이크오일"
];

const defaultTimeSlots = [
  { value: "09:00", selected: false, state: "default" as const },
  { value: "10:00", selected: true, state: "default" as const },
  { value: "11:00", selected: false, state: "default" as const },
  { value: "12:00", selected: false, state: "disabled" as const },
  { value: "13:00", selected: false, state: "default" as const },
  { value: "14:00", selected: false, state: "default" as const },
  { value: "15:00", selected: false, state: "default" as const },
  { value: "16:00", selected: false, state: "default" as const },
  { value: "17:00", selected: false, state: "default" as const },
  { value: "18:00", selected: false, state: "default" as const }
];

export interface ShopItemProps extends HTMLAttributes<HTMLDivElement> {
  address?: string;
  name?: string;
  state?: "default" | "pressed";
  categories?: string[];
}

export function ShopItem({
  address = "서울 서대문구 거북골로 34",
  name = "블루핸즈 명지대점",
  state = "default",
  categories = defaultCategories,
  className,
  ...rest
}: ShopItemProps) {
  return (
    <section {...rest} className={cx("ds-shop-item", className)} data-state={state}>
      <div className="ds-shop-item__shop-info">
        <Thumbnail variant="item-thumbnail" />
        <div className="ds-shop-item__content">
          <div className="ds-shop-item__text">
            <span className="ds-shop-item__name">{name}</span>
            <span className="ds-shop-item__address">{address}</span>
          </div>
          <div className="ds-shop-item__category-list">
            {categories.map((category) => (
              <CategoryLabel key={category}>{category}</CategoryLabel>
            ))}
          </div>
        </div>
      </div>
      <div className="ds-shop-item__time-slot-list">
        {defaultTimeSlots.map((slot) => (
          <ChoiceChip
            key={slot.value}
            value={slot.value}
            selected={slot.selected}
            state={slot.state}
          />
        ))}
      </div>
    </section>
  );
}
