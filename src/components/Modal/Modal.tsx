import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import React from "react";

type ModalType = "default" | "large" | "forcedAction";

interface Props {
  description: string;
  heading: string;
  id?: string;
  isOpen?: boolean;
  modalType?: ModalType;
  onClose?: () => void;
  primaryButtonText: string;
  primaryOnClick: () => void;
  secondaryButtonText: string;
  secondaryOnClick: () => void;
}

/**
 * Modal
 * @callback [onClose]
 * @callback primaryOnClick
 * @callback secondaryOnClick
 * @param {boolean}    [isOpen]             Sets whether or not the modal is visible and open.
 * @param {ModalType}  [modalType]          The type of Modal. Options include "default", "large", or "forcedAction".
 * @param {string}     [id]                 String used for the modal ID and related ARIA tags.
 * @param {string}     description          Description text that appears on the modal beneath the heading.
 * @param {string}     heading              Heading text that appears at the top of the modal.
 * @param {string}     primaryButtonText    Text shown on the primary button.
 * @param {string}     secondaryButtonText  Text shown on the secondary button.
 */

export const Modal: React.FC<Props> = ({
  description,
  heading,
  isOpen = false,
  modalType = "default",
  onClose,
  primaryButtonText,
  primaryOnClick,
  secondaryButtonText,
  secondaryOnClick,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="usa-modal-wrapper"
          role="dialog"
          id="example-modal-1"
          aria-labelledby="modal-1-heading"
          aria-describedby="modal-1-description"
        >
          <div className="usa-modal-overlay" aria-controls="example-modal-1">
            <div
              className={`usa-modal ${
                modalType === "large" ? "usa-modal--lg" : ""
              }`}
              id="example-modal-1"
              aria-labelledby="modal-1-heading"
              aria-describedby="modal-1-description"
            >
              <div className="usa-modal__content">
                <div className="usa-modal__main">
                  <h2 className="usa-modal__heading" id="modal-1-heading">
                    {heading}
                  </h2>
                  <div className="usa-prose">
                    <p id="modal-1-description">{description}</p>
                  </div>
                  <div className="usa-modal__footer">
                    <ul className="usa-button-group">
                      <li className="usa-button-group__item">
                        <Button
                          buttonText={primaryButtonText}
                          onClick={primaryOnClick}
                        />
                      </li>
                      <li>
                        <Button
                          buttonText={secondaryButtonText}
                          buttonVariation="link"
                          type="button"
                          className="usa-button--unstyled padding-105"
                          onClick={secondaryOnClick}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                {modalType !== "forcedAction" && (
                  <button
                    type="button"
                    className="usa-button usa-modal__close"
                    aria-label="Close this window"
                    data-close-modal
                    onClick={onClose}
                  >
                    <Icon name="close" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
