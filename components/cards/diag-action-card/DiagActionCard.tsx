import type { HTMLAttributes } from "react";

import { Button } from "../../inputs/button";
import { placeholderVehicleAsset } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import "./diag-action-card.css";

const vehicleImage = placeholderVehicleAsset;

export interface DiagActionCardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
}

export function DiagActionCard({
  imageSrc = vehicleImage,
  className,
  ...rest
}: DiagActionCardProps) {
  return (
    <section {...rest} className={cx("ds-diag-action-card", className)}>
      <div className="ds-diag-action-card__content">
        <span className="ds-diag-action-card__title">차량 원격 진단 실행중</span>
        <span className="ds-diag-action-card__description">
          완료된 차량 진단은 이력에서 확인 가능합니다
        </span>
      </div>
      <img className="ds-diag-action-card__image" src={imageSrc} alt="" />
      <Button variant="filled" size="xlarge" state="disabled">
        진단 결과 확인
      </Button>
    </section>
  );
}
