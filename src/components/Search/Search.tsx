import React, { EventHandler, FormEventHandler, useState } from "react";
type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {
  variation?: SearchVariation;
  onSearch: EventHandler<any>;
  onInput?: FormEventHandler<HTMLInputElement>;
  disabled?: boolean;
  initialValue?: string;
  placeholder?: string;
  labelText?: string;
}
type SearchVariation = "default" | "big" | "small";

/**
 * Search Component
 * @param {string}            variation             Renders the style of the search component.
 * @param {EventHandler}      onSearch              Handles its behavior when the search button is clicked or the user presses enter in the input. Returns value of the input. Returns value of the input.
 * @param {EventHandler}      onInput               Handles its behavior when the user is typing.
 * @param {boolean}           [disabled]            Determines whether or not a button is enabled.
 * @param {string}            [initialValue]        If provided, used as value of search input.
 * @param {string}            [placeholder]         The text placeholder for this component.
 * @param {string}            [labelText]           Label text for screen reader.
 */

export const Search: React.FC<Props> = ({
  variation = "default",
  disabled = false,
  onSearch,
  initialValue = "",
  labelText = "search",
  onInput,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  return (
    <section aria-label="Search component">
      <form
        className={`usa-search role usa-search--${variation}`}
        role="search"
      >
        <label className="usa-sr-only" htmlFor="search-field">
          {labelText}
        </label>
        <input
          className="usa-input"
          id="search-field"
          type="search"
          name="search"
          value={inputValue}
          disabled={disabled}
          onInput={onInput}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSearch(inputValue);
            }
          }}
          {...rest}
        />
        <button
          className="usa-button padding-y-0 padding-x-2 radius-left-0"
          type="button"
          disabled={disabled}
          onClick={() => onSearch(inputValue)}
        >
          {variation !== "small" && (
            <span className="usa-search__submit-text">Search </span>
          )}
          <img
            src="/assets/img/usa-icons-bg/search--white.svg"
            className="usa-search__submit-icon"
            alt="Search"
          />
        </button>
      </form>
    </section>
  );
};
