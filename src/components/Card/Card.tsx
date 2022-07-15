import { Button } from "../Button/Button";
import React, { PropsWithChildren } from "react";

interface CardProps {
  type?: "normal" | "flag";
  mediaRight?: boolean;
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  children,
  type = "normal",
  mediaRight = false,
}) => {
  const styleClass = type === "normal" ? "" : "usa-card--flag";
  const mediaRightMod = mediaRight ? "usa-card--media-right" : "";

  return (
    <div className={`usa-card ${styleClass} ${mediaRightMod}`}>{children}</div>
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
  exdent?: boolean;
  insetMedia?: boolean;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  imageSource,
  altText,
  exdent,
  insetMedia = false,
}) => {
  const exdentMod = exdent ? "--exdent" : "";
  const insetMediaMod = insetMedia ? "usa-card__media--inset" : "";

  return (
    <div className={`usa-card__media${exdentMod} ${insetMediaMod}`}>
      <div className="usa-card__img">
        <img src={imageSource} alt={altText} />
      </div>
    </div>
  );
};
