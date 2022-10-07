import React, { useLayoutEffect, useRef } from "react";
const tooltip = require("@uswds/uswds/packages/usa-tooltip/src");

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
      if (typeof tooltip.on === "function") tooltip.off(tooltipElement);
    };
  });

  return (
    <div className="wrapper usa-tooltip" data-position={position} title={title}>
      {children}
    </div>
  );
};
