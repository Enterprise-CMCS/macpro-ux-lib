import { Button } from "components/Button/Button";
import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["button"];

export interface FilterChipProps extends IntrinsicElements {
  text: string;
}

/**
 * **FilterChip Component**
 *
 * @param {string}    text  Text content to be displayed within the FilterChip.
 */
export const FilterChip: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Button
      buttonVariation="primary"
      buttonText={text}
      className={"filter-chip"}
      iconName="close"
      {...rest}
    />
  );
};
