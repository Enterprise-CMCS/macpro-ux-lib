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

    try {
      tooltip.on(tooltipElement);
    } catch (error) {
      console.log(error);
    }
    return () => {
      try {
        tooltip.off(tooltipElement);
      } catch (error) {
        console.log(error);
      }
    };
  });

  return (
    <div className="wrapper usa-tooltip" data-position={position} title={title}>
      {children}
    </div>
  );
};
