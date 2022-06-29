import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

// export const Button = ({ text }: Props) => {
//   return <button className="usa-button">{text}</button>;
// };

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.sm};
`;
