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
export const cleanAttributes = (container: HTMLElement, prefixes: string[]) => {
  const attributes = ["id", "for"];

  const clean = (attr: string) => {
    for (const prefix of prefixes) {
      if (attr.includes(prefix)) {
        const attrList = attr.split("-");
        attrList.splice(-1);
        return attrList.join("-");
      }
    }
    return attr;
  };

  attributes.forEach((attr) => {
    if (container.hasAttribute(attr)) {
      const value = clean(container.getAttribute(attr)!);
      container.setAttribute(attr, value);
    }
  });

  Array.from(container.children).forEach((child) => {
    cleanAttributes(child as HTMLElement, prefixes);
  });
};
