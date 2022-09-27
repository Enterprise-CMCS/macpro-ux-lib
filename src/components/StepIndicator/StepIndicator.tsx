import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["p"];

type Step = { label: string; order: number };

interface Props extends IntrinsicElements {
  currentProgress: number;
  steps: Step[];
  counters?: boolean;
  labels?: boolean;
}

/**
 * **StepIndicator Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const StepIndicator: React.FC<Props> = ({
  counters = false,
  labels = true,
  currentProgress = 1,
  steps = [],
  ...rest
}) => {
  return (
    <>
      {!counters && (
        <div className="usa-step-indicator" aria-label="progress" {...rest}>
          <ol className="usa-step-indicator__segments">
            {/* <li className="usa-step-indicator__segment usa-step-indicator__segment--complete">
              <span className="usa-step-indicator__segment-label">
                Personal information{" "}
                <span className="usa-sr-only">completed</span>
              </span>
            </li> */}
            {/* <li className="usa-step-indicator__segment usa-step-indicator__segment--complete">
              <span className="usa-step-indicator__segment-label">
                Household status <span className="usa-sr-only">completed</span>
              </span>
            </li> */}
            {/* <li
              className="usa-step-indicator__segment usa-step-indicator__segment--current"
              aria-current="true"
            >
              <span className="usa-step-indicator__segment-label">
                Supporting documents
              </span>
            </li> */}
            {/* <li className="usa-step-indicator__segment">
              <span className="usa-step-indicator__segment-label">
                Signature <span className="usa-sr-only">not completed</span>
              </span>
            </li> */}
            {steps.map((step) => {
              return (
                <li
                  className={`usa-step-indicator__segment ${
                    step.order === currentProgress
                      ? "usa-step-indicator__segment--current"
                      : step.order < currentProgress
                      ? "usa-step-indicator__segment--complete"
                      : ""
                  }`}
                >
                  <span className="usa-step-indicator__segment-label">
                    {labels && step.label}
                    {step.order !== currentProgress && (
                      <span className="usa-sr-only">
                        {step.order > currentProgress
                          ? "completed"
                          : "not completed"}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
          <div className="usa-step-indicator__header">
            <h4 className="usa-step-indicator__heading">
              <span className="usa-step-indicator__heading-counter">
                <span className="usa-sr-only">Step</span>
                <span className="usa-step-indicator__current-step">
                  {currentProgress}
                </span>
                <span className="usa-step-indicator__total-steps">
                  of {steps.length}
                </span>{" "}
              </span>
              <span className="usa-step-indicator__heading-text">
                Supporting documents
              </span>
            </h4>
          </div>
        </div>
      )}

      {counters && (
        <div
          className="usa-step-indicator usa-step-indicator--counters"
          aria-label="progress"
        >
          <ol className="usa-step-indicator__segments">
            <li className="usa-step-indicator__segment usa-step-indicator__segment--complete">
              <span className="usa-step-indicator__segment-label">
                Personal information{" "}
                <span className="usa-sr-only">completed</span>
              </span>
            </li>
            <li className="usa-step-indicator__segment usa-step-indicator__segment--complete">
              <span className="usa-step-indicator__segment-label">
                Household status <span className="usa-sr-only">completed</span>
              </span>
            </li>
            <li
              className="usa-step-indicator__segment usa-step-indicator__segment--current"
              aria-current="true"
            >
              <span className="usa-step-indicator__segment-label">
                Supporting documents
              </span>
            </li>
            <li className="usa-step-indicator__segment">
              <span className="usa-step-indicator__segment-label">
                Signature <span className="usa-sr-only">not completed</span>
              </span>
            </li>
            <li className="usa-step-indicator__segment">
              <span className="usa-step-indicator__segment-label">
                Review and submit{" "}
                <span className="usa-sr-only">not completed</span>
              </span>
            </li>
          </ol>
          <div className="usa-step-indicator__header">
            <h4 className="usa-step-indicator__heading">
              <span className="usa-step-indicator__heading-counter">
                <span className="usa-sr-only">Step</span>
                <span className="usa-step-indicator__current-step">
                  {currentProgress}
                </span>
                <span className="usa-step-indicator__total-steps">
                  of {steps.length}
                </span>{" "}
              </span>
              <span className="usa-step-indicator__heading-text">
                Supporting documents
              </span>
            </h4>
          </div>
        </div>
      )}
    </>
  );
};
