import React, { useState } from "react";

import flag from "../../assets/img/us_flag_small.png";
import gov from "../../assets/img/icon-dot-gov.svg";
import lock from "../../assets/img/icon-https.svg";

interface Props {
  className?: string;
  id?: string;
  locale?: "en" | "es";
  variant?: "default" | "dark";
}

/**
 * USA Banner Component
 * @param {string}  className     Additional classes to be added to the root `section` element.
 * @param {string}  id            A unique ID to be applied to the banner content at the root `section` element.
 * @param {string}  locale        Determines which version of the banner to display (en === english, es === español).
 * @param {string}  variant       Indicates which color variant of the banner to display.
 */

export const UsaBanner: React.FC<Props> = ({
  className,
  variant,
  id,
  locale = "en",
  ...rest
}) => {
  const [hidden, setHidden] = useState(true);
  const classNames = `usa-banner${
    variant === "dark" ? ` usa-banner--dark` : ""
  }${className ? ` ${className}` : ""}`;
  return (
    <>
      {locale === "en" && (
        <section
          aria-label="Official government website"
          className={classNames}
          id={id}
          {...rest}
        >
          <div className="usa-accordion">
            <header
              className={`usa-banner__header${
                hidden ? "" : " usa-banner__header--expanded"
              }`}
            >
              <div className="usa-banner__inner">
                <div className="grid-col-auto">
                  <img
                    className="usa-banner__header-flag"
                    src={flag}
                    alt="U.S. flag"
                  />
                </div>
                <div className="grid-col-fill tablet:grid-col-auto">
                  <p className="usa-banner__header-text">
                    An official website of the United States government
                  </p>
                  <p className="usa-banner__header-action" aria-hidden="true">
                    Here's how you know
                  </p>
                </div>
                <button
                  type="button"
                  className="usa-accordion__button usa-banner__button"
                  aria-expanded={hidden ? "false" : "true"}
                  aria-controls="gov-banner-default-default"
                  onClick={() => setHidden(!hidden)}
                >
                  <span className="usa-banner__button-text">
                    Here's how you know
                  </span>
                </button>
              </div>
            </header>
            <div
              className="usa-banner__content usa-accordion__content"
              id="gov-banner-default-default"
              hidden={hidden}
            >
              <div className="grid-row grid-gap-lg">
                <div className="usa-banner__guidance tablet:grid-col-6">
                  <img
                    className="usa-banner__icon usa-media-block__img"
                    src={gov}
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="usa-media-block__body">
                    <p>
                      <strong>Official websites use .gov</strong>
                      <br />A <strong>.gov</strong> website belongs to an
                      official government organization in the United States.
                    </p>
                  </div>
                </div>
                <div className="usa-banner__guidance tablet:grid-col-6">
                  <img
                    className="usa-banner__icon usa-media-block__img"
                    src={lock}
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="usa-media-block__body">
                    <p>
                      <strong>Secure .gov websites use HTTPS</strong>
                      <br />A <strong>lock</strong> (
                      <span className="icon-lock">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="64"
                          viewBox="0 0 52 64"
                          className="usa-banner__lock-image"
                          role="img"
                          aria-labelledby="banner-lock-title-default banner-lock-description-default"
                          focusable="false"
                        >
                          <title id="banner-lock-title-default">Lock</title>
                          <desc id="banner-lock-description-default">
                            A locked padlock
                          </desc>
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                          />
                        </svg>
                      </span>
                      ) or <strong>https://</strong> means you've safely
                      connected to the .gov website. Share sensitive information
                      only on official, secure websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {locale === "es" && (
        <section
          aria-label="Un sitio oficial del Gobierno de Estados Unidos"
          className={classNames}
          id={id}
          {...rest}
        >
          <div className="usa-accordion">
            <header
              className={`usa-banner__header${
                hidden ? "" : " usa-banner__header--expanded"
              }`}
            >
              <div className="usa-banner__inner">
                <div className="grid-col-auto">
                  <img
                    className="usa-banner__header-flag"
                    src={flag}
                    alt="U.S. flag"
                  />
                </div>
                <div className="grid-col-fill tablet:grid-col-auto">
                  <p className="usa-banner__header-text">
                    Un sitio oficial del Gobierno de Estados Unidos
                  </p>
                  <p className="usa-banner__header-action" aria-hidden="true">
                    Así es como usted puede verificarlo
                  </p>
                </div>
                <button
                  type="button"
                  className="usa-accordion__button usa-banner__button"
                  aria-expanded={hidden ? "false" : "true"}
                  aria-controls="gov-banner-spanish-lang-es"
                  onClick={() => setHidden(!hidden)}
                >
                  <span className="usa-banner__button-text">
                    Así es como usted puede verificarlo
                  </span>
                </button>
              </div>
            </header>
            <div
              className="usa-banner__content usa-accordion__content"
              id="gov-banner-spanish-lang-es"
              hidden={hidden}
            >
              <div className="grid-row grid-gap-lg">
                <div className="usa-banner__guidance tablet:grid-col-6">
                  <img
                    className="usa-banner__icon usa-media-block__img"
                    src={gov}
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="usa-media-block__body">
                    <p>
                      <strong>Los sitios web oficiales usan .gov</strong>
                      <br />
                      Un sitio web <strong>.gov</strong> pertenece a una
                      organización oficial del Gobierno de Estados Unidos.
                    </p>
                  </div>
                </div>
                <div className="usa-banner__guidance tablet:grid-col-6">
                  <img
                    className="usa-banner__icon usa-media-block__img"
                    src={lock}
                    role="img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="usa-media-block__body">
                    <p>
                      <strong>Los sitios web seguros .gov usan HTTPS</strong>
                      <br />
                      Un <strong>candado</strong> (
                      <span className="icon-lock">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="64"
                          viewBox="0 0 52 64"
                          className="usa-banner__lock-image"
                          role="img"
                          aria-labelledby="banner-lock-title-spanish banner-lock-description-spanish"
                          focusable="false"
                        >
                          <title id="banner-lock-title-spanish">Lock</title>
                          <desc id="banner-lock-description-spanish">
                            A locked padlock
                          </desc>
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                          />
                        </svg>
                      </span>
                      ) o <strong>https://</strong> significa que usted se
                      conectó de forma segura a un sitio web .gov. Comparta
                      información sensible sólo en sitios web oficiales y
                      seguros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
