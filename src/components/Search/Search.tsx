import React, { EventHandler } from "react";

type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {
  variation?: "default" | "big" | "small";
  onSearch: EventHandler<any>;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
}

/**
 * Search Component
 * @param {string}            variation             Renders the style of the search component.
 * @param {EventHandler}      onSearch            Handles its behavior when the button is clicked.
 * @param {boolean}           [disabled]            Determines whether or not a button is enabled.
 * @param {string}            [value]               The searched value within the input.
 * @param {string}            [placeholder]         The text placeholder for this component.
 */

export const Search: React.FC<Props> = ({
  variation = "default",
  disabled = false,
  onSearch,
  value,
  ...rest
}) => {
  return (
    <>
      {variation === "default" && (
        <section aria-label="Search component">
          <form className="usa-search" role="search">
            <label className="usa-sr-only" htmlFor="search-field">
              Search
            </label>
            <input
              className="usa-input"
              id="search-field"
              type="search"
              name="search"
              value={value}
              disabled={disabled}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSearch(e);
                }
              }}
              {...rest}
            />
            <button
              className="usa-button padding-y-0 padding-x-2"
              type="button"
              onClick={onSearch}
            >
              <span className="usa-search__submit-text">Search </span>
              <img
                src="/assets/img/usa-icons-bg/search--white.svg"
                className="usa-search__submit-icon"
                alt="Search"
              />
            </button>
          </form>
        </section>
      )}

      {variation === "big" && (
        <section aria-label="Big search component">
          <form className="usa-search usa-search--big" role="search">
            <label className="usa-sr-only" htmlFor="search-field-en-big">
              Search
            </label>
            <input
              className="usa-input"
              id="search-field-en-big"
              type="search"
              name="search"
              value={value}
              disabled={disabled}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSearch(e);
                }
              }}
              {...rest}
            />
            <button
              className="usa-button padding-y-0 padding-x-2"
              type="button"
              onClick={onSearch}
              onSubmit={onSearch}
            >
              <span className="usa-search__submit-text">Search </span>
              <img
                src="/assets/img/usa-icons-bg/search--white.svg"
                className="usa-search__submit-icon"
                alt="Search"
              />
            </button>
          </form>
        </section>
      )}

      {variation === "small" && (
        <section aria-label="Small search component">
          <form className="usa-search usa-search--small" role="search">
            <label className="usa-sr-only" htmlFor="search-field-en-small">
              Search
            </label>
            <input
              className="usa-input"
              id="search-field-en-small"
              type="search"
              name="search"
              value={value}
              disabled={disabled}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSearch(e);
                }
              }}
              {...rest}
            />
            <button
              className="usa-button padding-y-0 padding-x-2"
              type="button"
              onClick={onSearch}
              onSubmit={onSearch}
            >
              <img
                src="/assets/img/usa-icons-bg/search--white.svg"
                className="usa-search__submit-icon"
                alt="Search"
              />
            </button>
          </form>
        </section>
      )}
    </>
  );
};
