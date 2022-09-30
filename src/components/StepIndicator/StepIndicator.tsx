import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["p"];

type Step = { label: string; order: number };

interface Props extends IntrinsicElements {
  headingText: string;
  currentProgress: number;
  steps: Step[];
  counters?: boolean;
  smallCounters?: boolean;
  showLabels?: boolean;
  isCentered?: boolean;
}

/**
 * **StepIndicator Component**
 *
 * @param {string}     headingText        The heading text of the step indicator.
 * @param {number}     currentProgress    Number tracker of which step the user is currently on.
 * @param {Step[]}     steps              An array of step object data which consist of a label and the order number. The order number is 1 based.
 * @param {boolean}   [counters]          ∂Boolean which shows the counters alternative to the step indidcator.
 * @param {boolean}   [smallCounters]     Boolean which shows the smaller counters alternative to the step indicator. Only shows if counters is true.
 * @param {boolean}   [showLabels]        Dictates whether or not labels are show under each step.
 * @param {boolean}   [isCentered]        Dictates whether the labels are centered under the steps. Labels must be true.
 */
export const StepIndicator: React.FC<Props> = ({
  counters = false,
  smallCounters = false,
  showLabels = true,
  currentProgress,
  steps,
  isCentered = false,
  headingText,
  ...rest
}) => {
  return (
    <div
      className={`usa-step-indicator${
        isCentered ? " usa-step-indicator--center" : ""
      }${
        counters
          ? ` usa-step-indicator--counters${smallCounters ? "-sm" : ""}`
          : ""
      }`}
      aria-label="progress"
      role="progressbar"
      {...rest}
    >
      <ol className="usa-step-indicator__segments">
        {steps.map((step) => {
          return (
            <li
              key={step.label}
              className={`usa-step-indicator__segment ${
                step.order === currentProgress
                  ? "usa-step-indicator__segment--current"
                  : step.order < currentProgress
                  ? "usa-step-indicator__segment--complete"
                  : ""
              }`}
            >
              <span className="usa-step-indicator__segment-label">
                {showLabels && step.label}
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
            <span className="usa-step-indicator__current-step margin-right-05">
              {currentProgress}
            </span>
            <span className="usa-step-indicator__total-steps">
              of {steps.length}
            </span>{" "}
          </span>
          <span className="usa-step-indicator__heading-text">
            {headingText}
          </span>
        </h4>
      </div>
    </div>
  );
};
