import React, { Children, PropsWithChildren, useState } from "react";
import { Tab } from "./Tab";

type IntrinsicElements = JSX.IntrinsicElements["div"];

export interface TabsProps extends IntrinsicElements {
  initialTab?: number;
}

/**
 * **Tabs Component**
 *
 * `Tabs` acts as a parent for one or many `TabPanel` children. These components are reliant on
 * each other and will not display correctly if used independently.
 *
 * ```html
 * <Tabs>
 *   <TabPanel></TabPanel>
 *   <TabPanel></TabPanel>
 *   <TabPanel></TabPanel>
 * </Tabs>
 * ```
 *
 * @param {React.Node}    children    `TabPanel` children to be rendered in the Tabs component.
 * @param {number}        initialTab  Index of the tab to be open when the component renders. Defaults to first non-disabled tab.
 */
export const Tabs: React.FC<PropsWithChildren<TabsProps>> = ({
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
            const classNames = `tab${current ? " current" : ""}`;
            return (
              <Tab
                aria-controls={child.props.tab}
                aria-selected={current}
                aria-hidden={!current}
                {...child.props}
                className={classNames}
                id={child.props.id}
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
            return React.cloneElement(child as React.ReactElement, {
              hidden: !current,
              "aria-hidden": !current,
            });
          }
        })}
      </div>
    </div>
  );
};
