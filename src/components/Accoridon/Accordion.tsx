import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["h4"];

interface Props extends IntrinsicElements {
  className?: string;
  label: string;
  id: string;
}

/**
 * **Accordion Component**
 *
 * A single Accordion item. Any instance of an Accordion requires an AccordionGroup wrapper.
 *
 * ```JavaScript
 * <Accordion label="First Amendment" id="accordion-1">
 *     <p>
 *        Congress shall make no law respecting an establishment of religion, or
 *        prohibiting the free exercise thereof; or abridging the freedom of
 *        speech, or of the press; or the right of the people peaceably to
 *        assemble, and to petition the Government for a redress of grievances.
 *      </p>
 * </Accordion>
 * ```
 *
 * @param {string}           className    Additional classes that will be applied to the Accordion label.
 * @param {React.ReactNode}  children     React components that will be rendered within the Accordion content section.
 * @param {string}           label        Label text to be rendered identifying the Accordion.
 * @param {boolean}          hidden       Determines if the Accordion content will be visible or not on initial render. Defaults to true.
 * @param {string}           id           Unique identifier required for each Accordion item used for form control.
 */
export const Accordion: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  label,
  hidden = true,
  id,
  onClick,
  ...rest
}) => {
  return (
    <>
      <h4
        className={`usa-accordion__heading${className ? ` ${className}` : ""}`}
        {...rest}
        onClick={onClick}
      >
        <button
          type="button"
          className="usa-accordion__button"
          aria-expanded={!hidden}
          aria-controls={id}
        >
          {label}
        </button>
      </h4>
      <div id={id} className="usa-accordion__content usa-prose" hidden={hidden}>
        {children}
      </div>
    </>
  );
};
