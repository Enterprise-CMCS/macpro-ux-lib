import React, { PropsWithChildren } from "react";

interface Props {
  alignContent?: "left" | "right" | "center";
  altText?: string;
  bodyText?: string;
  exdent?: boolean;
  flagLayout?: boolean;
  flagRight?: boolean;
  headerText?: string;
  imageSource?: string;
  insetMedia?: boolean;
}

/**
 * Card Component
 * @param {string}    [alignContent]  String prop that aligns card content left, right, or center.
 * @param {string}    [altText]       Image alt text.
 * @param {string}    [bodyText]      Text for the card body.
 * @param {boolean}   [exdent]        Sets header at top of card, drops media below. This value will override flagLayout.
 * @param {boolean}   [flagLayout]    Controls the style of the card (normal or flag).
 * @param {boolean}   [flagRight]     Controls how the flag content is aligned.
 * @param {string}    [headerText]      Card header text.
 * @param {string}    [imageSource]   Source of image file to be used in card.
 * @param {boolean}   [insetMedia]    Set a border of whitespace around card content.
 */

export const Card: React.FC<PropsWithChildren<Props>> = ({
  alignContent,
  altText,
  bodyText,
  children,
  exdent,
  flagLayout,
  flagRight,
  headerText,
  imageSource,
  insetMedia,
  ...rest
}) => {
  const cardStyle = flagLayout ? "usa-card--flag" : "";
  const mediaRight = flagRight ? "usa-card--media-right" : "";
  const insetMediaMod = insetMedia ? "usa-card__media--inset" : "";

  return (
    <div className={`usa-card ${cardStyle} ${mediaRight}`} {...rest}>
      <div className="usa-card__container" style={{ textAlign: alignContent }}>
        <div className="usa-card__header">
          <h2 className="usa-card__heading">{headerText}</h2>
        </div>

        {imageSource && (
          <div
            className={`usa-card__media${
              exdent ? "--exdent" : ""
            } ${insetMediaMod}`}
          >
            <div className="usa-card__img">
              <img src={imageSource} alt={altText} />
            </div>
          </div>
        )}
        <div className="usa-card__body">
          <p className="usa-card__text">{bodyText}</p>
        </div>
        <div className="usa-card__footer">{children}</div>
      </div>
    </div>
  );
};
