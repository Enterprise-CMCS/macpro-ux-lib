import React, { Children, PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  alternatingBG?: boolean;
  bordered?: boolean;
}

/**
 * CardChoiceGroup Component
 * @param {boolean}            alternatingBG    CardChoice children are displayed with an alternating background color. The darkBG property on an individual CardChoice will override this property.
 * @param {boolean}            bordered         All CardChoice children are displayed with a gray border. The bordered property on an individual CardChoice will override this property.
 * @param {React.ReactNode}    children         CardChoice children to be rendered.
 */
export const CardChoiceGroup: React.FC<PropsWithChildren<Props>> = ({
  alternatingBG = false,
  bordered = false,
  children,
  ...rest
}) => {
  const arrayChildren = Children.toArray(children);
  return (
    <div className="card-choice-group" {...rest}>
      <span className="gradient-cap"></span>
      {Children.map(arrayChildren, (child, idx) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            bordered: child.props.bordered ?? bordered,
            darkBG: child.props.darkBG ?? (alternatingBG && idx % 2),
          });
        }
      })}
    </div>
  );
};
