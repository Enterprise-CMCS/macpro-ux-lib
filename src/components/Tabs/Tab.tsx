import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["a"];

interface TabProps extends IntrinsicElements {
  disabled?: boolean;
  tab: string;
}

/**
 * **Tab Component**
 *
 * Used as a helper for the Tabs component. Not intended to be used as a standalone resource.
 *
 */
export const Tab: React.FC<TabProps> = ({
  className,
  disabled,
  tab,
  onClick,
  ...rest
}) => {
  return disabled ? (
    <span className={`${className} disabled`} aria-disabled="true" {...rest}>
      {tab}
    </span>
  ) : (
    <a className={className} onClick={onClick} {...rest}>
      {tab}
    </a>
  );
};
