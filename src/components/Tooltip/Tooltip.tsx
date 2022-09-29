import React from "react";

export const Tooltip: React.FC = ({}) => {
  return (
    <button
      type="button"
      className="usa-button usa-tooltip"
      data-position="top"
      title="Top"
    >
      Show on top
    </button>
  );
};
