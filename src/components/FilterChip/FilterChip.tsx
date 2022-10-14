import { Button } from "components/Button/Button";
import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["button"];

interface Props extends IntrinsicElements {
  text: string;
}

/**
 * **FilterChip Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const FilterChip: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Button
      buttonVariation="primary"
      buttonText={text}
      iconName="close"
      {...rest}
    />
  );
};
