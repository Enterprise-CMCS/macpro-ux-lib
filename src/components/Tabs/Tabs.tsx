import React, { Children, PropsWithChildren, useState } from "react";
import { Tab } from "./Tab";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  initialTab?: number;
}

/**
 * **Tabs Component**
 *
 * @param {React.Node}    children    `TabPanel` children to be rendered in the Tabs component.
 * @param {number}        initialTab  Optionally set the initial tab to be open when the component renders.
 */
export const Tabs: React.FC<PropsWithChildren<Props>> = ({
  children,
  initialTab,
  ...rest
}) => {
  const arrayChildren = Children.toArray(children);

  const getInitialTab = () => {
    for (const child of arrayChildren) {
      if (React.isValidElement(child) && child.props.disabled !== true) {
        return arrayChildren.indexOf(child);
      }
    }
    return null;
  };

  // State of all tab content
  const [currentTab, setCurrentTab] = useState<number | null>(
    initialTab || getInitialTab()
  );

  return (
    <div className="tabs" {...rest}>
      <div className="tabs-row" role="tablist">
        {Children.map(arrayChildren, (child, idx) => {
          if (React.isValidElement(child)) {
            const current = currentTab === idx;
            const classNames = `tab ${current ? "current" : ""}`;
            return (
              <Tab
                aria-controls={child.props.tab}
                aria-selected={current}
                {...child.props}
                className={classNames}
                onClick={() => setCurrentTab(idx)}
                role="tab"
              />
            );
          }
        })}
      </div>
      <div className="tabs-content">
        {Children.map(arrayChildren, (child, idx) => {
          if (React.isValidElement(child)) {
            const current = currentTab === idx;
            return React.cloneElement(child, {
              hidden: !current,
            });
          }
        })}
      </div>
    </div>
  );
};
