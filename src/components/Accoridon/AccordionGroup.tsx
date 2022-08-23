import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  bordered?: boolean;
  className?: string;
  multiSelect?: boolean;
}

/**
 * **AccordionGroup Component**
 *
 * A wrapper component for `<Accordion>` items.
 *
 * ```JavaScript
 * <AccordionGroup>
 *     <Accordion></Accordion>
 *     <Accordion></Accordion>
 *     <Accordion></Accordion>
 * </AccordionGroup>
 * ```
 *
 * @param {boolean}          bordered     Determines whether or not a border is shown around each Accordion item in the group.
 * @param {string}           className    Additional classes that will be applied to the AccordionGroup root div.
 * @param {React.ReactNode}  children     React components that will be rendered within the AccordionGroup
 * @param {string}           id           Unique identifier that will be applied to the AccordionGroup root div.
 * @param {boolean}          multiSelect  Determines whether or not multiple Accordion items can be expanded at the same time.
 */
export const AccordionGroup: React.FC<PropsWithChildren<Props>> = ({
  bordered = false,
  className,
  children,
  id,
  multiSelect,
  ...rest
}) => {
  return (
    <div
      className={`usa-accordion${bordered ? " usa-accordion--bordered" : ""}${
        multiSelect ? " usa-accordion--multiselectable" : ""
      }${className ? ` ${className}` : ""}`}
      id={id}
      data-allow-multiple={multiSelect}
      {...rest}
    >
      {children}
    </div>
  );
};
