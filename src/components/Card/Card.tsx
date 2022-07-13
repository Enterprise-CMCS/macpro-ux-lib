import { Button } from "../Button/Button";
import React, { PropsWithChildren } from "react";

// Props
type Props = {};

export const Card: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <CardContainer>
      <CardHeader>Testing</CardHeader>
      <CardBody>
        <CardBodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        </CardBodyText>
      </CardBody>
      <CardFooter>
        <Button>Visit</Button>
      </CardFooter>
    </CardContainer>
  );
};

export const CardContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return <div className="usa-card__container">{children}</div>;
};

export const CardHeader: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="usa-card__header">
      <h2 className="usa-card__heading">{children}</h2>
    </div>
  );
};

export const CardBody: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className="usa-card__body">{children}</div>;
};

export const CardBodyText: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return <p className="usa-card__text">{children}</p>;
};

export const CardFooter: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return <div className="usa-card__footer">{children}</div>;
};

interface CardMediaProps {
  imageSource: string;
  altText: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  imageSource,
  altText,
}) => {
  return (
    <div className="usa-card__media">
      <div className="usa-card__img">
        <img src={imageSource} alt={altText} />
      </div>
    </div>
  );
};
