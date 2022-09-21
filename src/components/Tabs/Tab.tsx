import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["a"];

interface TabProps extends IntrinsicElements {
  disabled?: boolean;
  tabLabel: string;
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
  tabLabel,
  onClick,
  ...rest
}) => {
  return disabled ? (
    <span {...rest} className={`${className} disabled`} aria-disabled="true">
      {tabLabel}
    </span>
  ) : (
    <a {...rest} className={className} onClick={onClick} href="javascript:;">
      {tabLabel}
    </a>
  );
};
