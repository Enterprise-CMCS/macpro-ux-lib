import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["h4"];

export interface TabPanelProps extends IntrinsicElements {
  disabled?: boolean;
  id: string;
  tabLabel: string;
}

/**
 * **TabPanel Component**
 *
 * The `TabPanel` is intended to be used as a child of `Tabs`. Each `TabPanel` represents a tab and the corresponding content
 * to be rendered when the tab is active.
 *
 * ```html
 * <Tabs>
 *   <TabPanel tab="Summary">The Bill of...</TabPanel>
 * </Tabs>
 * ```
 *
 * @param {React.Node}    children  Contents to be displayed when Tab is clicked.
 * @param {boolean}       disabled  Setting this value will render Tab with disabled styles and make tab unclickable.
 * @param {string}        id        Unique identifier required for each TabPanel item. The id is used to associate the tab and it's content, as well as populate aria tags.
 * @param {string}        tabLabel  Text label for each tab.
 *
 */
export const TabPanel: React.FC<PropsWithChildren<Props>> = ({
  children,
  id,
  tabLabel,
  ...rest
}) => {
  return (
    <div {...rest} aria-labelledby={id} role="tabpanel">
      {children}
    </div>
  );
};
