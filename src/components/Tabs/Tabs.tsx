import React, { Children, PropsWithChildren, useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {}

/**
 * **Tabs Component**
 *
 * @param {boolean}    id  Unique identifier.
 */
export const Tabs: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  const arrayChildren = Children.toArray(children);

  const buildContentHidden = (idx: number = 0) => {
    const arr = Array(arrayChildren.length).fill(true);
    arr[idx] = false;
    return arr;
  };

  // State of all tab content
  const [contentHidden, setContentHidden] = useState<boolean[]>(
    buildContentHidden()
  );

  return (
    <div className="tabs" {...rest}>
      <div className="tabs-row" role="tablist">
        {Children.map(arrayChildren, (child, idx) => {
          if (React.isValidElement(child)) {
            const classNames = `tab ${contentHidden[idx] ? "" : "current"}`;
            return (
              <Tab
                aria-controls={child.props.tab}
                aria-selected={!contentHidden[idx]}
                {...child.props}
                className={classNames}
                onClick={() => setContentHidden(buildContentHidden(idx))}
                role="tab"
              />
            );
          }
        })}
      </div>
      <div className="tabs-content">
        {Children.map(arrayChildren, (child, idx) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              hidden: contentHidden[idx],
            });
          }
        })}
      </div>
    </div>
  );
};

type IntrinsicAnchor = JSX.IntrinsicElements["a"];

interface TabProps extends IntrinsicAnchor {
  disabled?: boolean;
  tab: string;
}

const Tab: React.FC<TabProps> = ({
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
