import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  className?: string;
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
 * @param {string}           className    Additional classes that will be applied to the AccordionGroup root div.
 * @param {React.ReactNode}  children     React components that will be rendered within the AccordionGroup
 * @param {string}           id           Unique identifier that will be applied to the AccordionGroup root div.
 */
export const AccordionGroup: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  id,
  ...rest
}) => {
  return (
    <div
      className={`usa-accordion${className ? ` ${className}` : ""}`}
      id={id}
      {...rest}
    >
      {children}
    </div>
  );
};
