import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  bordered?: boolean;
  darkBG?: boolean;
}

/**
 * CardChoice Component
 * @param {string}    text    Renders the text contained in the component.
 */
export const CardChoice: React.FC<Props> = ({ bordered, darkBG, ...rest }) => {
  return (
    <div
      className={`card-choice${darkBG ? " card-choice--dark" : ""}${
        bordered ? " card-choice--bordered" : ""
      }`}
      {...rest}
    >
      {/* TODO: Set a max-width for the content so it wraps elegantly */}
      <div className="content">
        <p className="heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="body">Aliquam pharetra amet vitae sed tempus turpis.</p>
      </div>
      <div className="select">Select</div>
    </div>
  );
};
