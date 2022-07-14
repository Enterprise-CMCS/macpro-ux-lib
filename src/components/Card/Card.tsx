import { Button } from "../Button/Button";
import React, { PropsWithChildren } from "react";

// Props
interface Props {
  cardHeaderText: string;
  showCardMedia?: boolean;
  cardMediaSource?: string;
  cardMediaAltText?: string;
  cardBodyTextContent: string;
  cardFooterContent: string;
}

export const Card: React.FC<Props> = ({
  cardHeaderText,
  cardMediaSource,
  cardMediaAltText,
  cardBodyTextContent,
  cardFooterContent,
  showCardMedia = false,
}) => {
  return (
    <CardContainer>
      <CardHeader>{cardHeaderText}</CardHeader>
      {showCardMedia && cardMediaSource && (
        <CardMedia
          imageSource={cardMediaSource}
          altText={cardMediaAltText ?? ""}
        />
      )}
      <CardBody>
        <CardBodyText>{cardBodyTextContent}</CardBodyText>
      </CardBody>
      <CardFooter>
        <Button>{cardFooterContent}</Button>
      </CardFooter>
    </CardContainer>
  );
};

export const CardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="usa-card__container">{children}</div>;
};

export const CardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="usa-card__header">
      <h2 className="usa-card__heading">{children}</h2>
    </div>
  );
};

export const CardBody: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="usa-card__body">{children}</div>;
};

export const CardBodyText: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="usa-card__text">{children}</p>;
};

export const CardFooter: React.FC<PropsWithChildren> = ({ children }) => {
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
