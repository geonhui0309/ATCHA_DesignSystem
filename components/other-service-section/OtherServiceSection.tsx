import type { HTMLAttributes } from "react";

import {
  ServiceItem,
  type ServiceItemType
} from "../service-item/ServiceItem";
import { cx } from "../shared/foundation";
import "./other-service-section.css";

type OtherServiceItem = {
  serviceType?: ServiceItemType;
  width?: 42 | 46;
};

const otherServiceRows: OtherServiceItem[][] = [
  [
    {
      serviceType: "washer"
    },
    {
      serviceType: "coolant"
    },
    {
      serviceType: "wiper"
    },
    {
      serviceType: "aircon-filter",
      width: 46
    }
  ],
  [
    {
      serviceType: "air-filter"
    },
    {
      serviceType: "oil-filter"
    },
    {
      width: 42
    },
    {
      width: 46
    }
  ]
];

export interface OtherServiceSectionProps extends HTMLAttributes<HTMLDivElement> {}

export function OtherServiceSection({
  className,
  ...rest
}: OtherServiceSectionProps) {
  return (
    <section {...rest} className={cx("ds-other-service-section", className)}>
      {otherServiceRows.map((row, rowIndex) => (
        <div className="ds-other-service-section__row" key={rowIndex}>
          {row.map((item, itemIndex) => {
            const width = item.width ?? 42;

            if (!item.serviceType) {
              return (
                <div
                  aria-hidden="true"
                  className="ds-other-service-section__item ds-other-service-section__item--empty"
                  key={`${rowIndex}-${itemIndex}`}
                  style={{ width }}
                />
              );
            }

            return (
              <div
                className="ds-other-service-section__item"
                key={item.serviceType}
                style={{ width }}
              >
                <ServiceItem serviceType={item.serviceType} />
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
