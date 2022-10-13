import React, { useLayoutEffect, useRef } from "react";
import tooltip from "../../../node_modules/@uswds/uswds/packages/usa-tooltip/src";

type Props = {
  children?: React.ReactNode;
  position: "top" | "right" | "bottom" | "left";
  title: string;
};

export const Tooltip: React.FC<Props> = ({ children, position, title }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const tooltipElement = tooltipRef.current;
    if (typeof tooltip.on === "function") tooltip.on(tooltipElement);
    return () => {
      if (typeof tooltip.off === "function") tooltip.off(tooltipElement);
    };
  });

  return (
    <div className="wrapper usa-tooltip" data-position={position} title={title}>
      {children}
    </div>
  );
};
