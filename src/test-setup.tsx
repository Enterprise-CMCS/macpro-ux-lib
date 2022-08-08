import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

// Here we can set all providers for themes, stores and other stuff
const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

/**
 * Clean up attributes from the rendered component by removing the generated ids.
 *
 * Before:
 *   for="input-type-text-123456"
 *   id="input-type-text-123456"
 *
 * After:
 *   for="input-type-text"
 *   id="input-type-text"
 *
 * This is useful during snapshot testing. Snapshot comparisons will fail without addressing these items.
 *
 * @param {HTMLElement} container The component to clean up.
 * @param {prefixes}      string[]  The reference substrings to leave alone.
 */
