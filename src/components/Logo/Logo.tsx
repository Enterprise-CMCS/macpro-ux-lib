import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["img"];

interface Props extends IntrinsicElements {
  altText: string;
  ariaHidden?: boolean;
  ariaLabel: string;
  className?: string;
  height?: number;
  role?: string;
  source: string;
  width?: number;
}

/**
 * Logo Component
 * @param {string} altText        Alternate image text.
 * @param {string} ariaLabel      Describes the image for a screen reader.
 * @param {string} source         Source of the logo image. This can be an image file or a web address pointing to an image.
 * @param {string} [ariaHidden]   Determines whether or not the element is hidden from a screen reader.
 * @param {string} [className]    Optional additional className for the logo container.
 * @param {string} [height]       Height parameter for logo in # of pixels.
 * @param {string} [role]         Describes the role of an element in programs that can make use of it.
 * @param {string} [width]        Width parameter for logo in # of pixels.
 */

export const Logo: React.FC<Props> = ({
  altText,
  ariaHidden = false,
  ariaLabel,
  className,
  height,
  role = "img",
  source,
  width = 200,
  ...rest
}) => {
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      className={`application-logo-container ${className}`}
    >
      <img
        alt={altText}
        aria-hidden={ariaHidden}
        height={height}
        src={source}
        width={width}
        {...rest}
      />
    </div>
  );
};
