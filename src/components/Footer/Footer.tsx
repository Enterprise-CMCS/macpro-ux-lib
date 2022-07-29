import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["footer"];

interface Props extends IntrinsicElements {}

/**
 * Footer Component
 
 */

export const Footer: React.FC<Props> = ({ ...rest }) => {
  return <footer></footer>;
};
