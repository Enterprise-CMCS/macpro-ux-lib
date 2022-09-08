import React, { Children, PropsWithChildren, useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {}

/**
 * **Tabs Component**
 *
 * @param {boolean}    multiSelect  Determines whether or not multiple Accordion items can be expanded at the same time.
 */
export const Tabs: React.FC<PropsWithChildren<Props>> = ({ ...rest }) => {
  return (
    <div className="tabs">
      <div className="tabs-row" role="tablist">
        <a
          aria-selected="true"
          aria-controls="summary"
          href="#summary"
          role="tab"
          className="tab current"
          id="ds-c-tabs__item--summary"
        >
          Summary
        </a>
        <a
          aria-selected="false"
          aria-controls="preamble"
          href="#preamble"
          role="tab"
          className="tab"
          id="ds-c-tabs__item--preamble"
        >
          Preamble
        </a>
      </div>
      <div className="tabs-content">
        <div
          aria-labelledby="ds-c-tabs__item--summary"
          aria-hidden="false"
          className="ds-c-tabs__panel"
          id="summary"
          role="tabpanel"
        >
          The Bill of Rights is the first ten amendments to the United States
          Constitution.
        </div>
        <div
          aria-labelledby="ds-c-tabs__item--preamble"
          aria-hidden="true"
          className="ds-c-tabs__panel"
          id="preamble"
          role="tabpanel"
        >
          We the People of the United States, in Order to form a more perfect
          Union, establish Justice, insure domestic Tranquility, provide for the
          common defence, promote the general Welfare, and secure the Blessings
          of Liberty to ourselves and our Posterity, do ordain and establish
          this Constitution for the United States of America.
        </div>
      </div>
    </div>
  );
};
