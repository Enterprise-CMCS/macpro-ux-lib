import React, { useState } from "react";

interface Props {
  modalType: "default" | "large" | "forcedAction";
}

export const Modal: React.FC<Props> = ({ modalType }) => {
  return (
    <>
      <div
        className="usa-modal-wrapper"
        role="dialog"
        id="example-modal-1"
        aria-labelledby="modal-1-heading"
        aria-describedby="modal-1-description"
      >
        <div
          className="usa-modal-overlay"
          aria-controls="example-modal-1"
          data-ol-has-click-handler
        >
          <div
            className="usa-modal"
            id="example-modal-1"
            aria-labelledby="modal-1-heading"
            aria-describedby="modal-1-description"
          >
            <div className="usa-modal__content">
              <div className="usa-modal__main">
                <h2 className="usa-modal__heading" id="modal-1-heading">
                  Are you sure you want to continue?
                </h2>
                <div className="usa-prose">
                  <p id="modal-1-description">
                    You have unsaved changes that will be lost.
                  </p>
                </div>
                <div className="usa-modal__footer">
                  <ul className="usa-button-group">
                    <li className="usa-button-group__item">
                      <button
                        type="button"
                        className="usa-button"
                        data-close-modal
                      >
                        Continue without saving
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="usa-button usa-button--unstyled padding-105 text-center"
                        data-close-modal
                      >
                        Go Back
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                className="usa-button usa-modal__close"
                aria-label="Close this window"
                data-close-modal
              >
                <svg
                  className="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  {/* <use xlink:href="/assets/img/sprite.svg#close"></use> */}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
