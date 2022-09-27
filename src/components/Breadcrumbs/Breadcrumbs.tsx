import React from "react";

export type BreadcrumbItems = {
  name: string;
  path: string;
}[];

export interface BreadcrumbProps {
  currentItemName: string;
  items: BreadcrumbItems;
  parentOnly?: boolean;
}

/**
 * Breadcrumbs Component
 * @param {string}          currentItemName The name of the current item, displayed as the last breadcrumb item.
 * @param {BreadcrumbItems} items             An array of breadcrumb items.
 * @param {boolean}         [parentOnly]        Use the parent-only variation.
 */

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  currentItemName,
  items,
  parentOnly = false,
}) => {
  return (
    <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
      <ol className="usa-breadcrumb__list">
        {items.map((item, index) => (
          <li className="usa-breadcrumb__list-item">
            <a href={item.path} className="usa-breadcrumb__link">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        {currentItemName && (
          <li
            className="usa-breadcrumb__list-item usa-current"
            aria-current="page"
          >
            <span>{currentItemName}</span>
          </li>
        )}
      </ol>
    </nav>
  );
};
