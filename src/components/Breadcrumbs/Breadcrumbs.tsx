import React from "react";
import { Icon } from "../Icon/Icon";

type BreadcrumbItems = {
  name: string;
  path: string;
}[];

interface BreadcrumbProps {
  currentItemName: string;
  items: BreadcrumbItems;
  parentOnly?: boolean;
}

/**
 * Breadcrumbs Component
 * @param {string}          [currentItemName] The name of the current item, displayed as the last breadcrumb item.
 * @param {BreadcrumbItems} items             An array of breadcrumb items.
 * @param {boolean}         [parentOnly]      Use the parent-only variation.
 */

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  currentItemName,
  items,
  parentOnly = false,
}) => {
  return (
    <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
      {!parentOnly && (
        <ol className="usa-breadcrumb__list">
          {items.map((item, index) => (
            <li
              className="usa-breadcrumb__list-item"
              key={`${index}-${item.name}`}
            >
              <a href={item.path} className="usa-breadcrumb__link">
                <span>{item.name}</span>
              </a>
            </li>
          ))}
          {currentItemName && (
            <li
              className="usa-breadcrumb__list-item usa-current"
              aria-current="page"
              key={`current-item-${currentItemName}`}
            >
              <span>{currentItemName}</span>
            </li>
          )}
        </ol>
      )}
      {parentOnly && (
        <ol className="usa-breadcrumb__list">
          <li className="usa-breadcrumb__list-item">
            <a href={items[0].path}>
              <div className="parent-only">
                <Icon name="arrow_back" className="arrow-back" />
                <span>{items[0].name}</span>
              </div>
            </a>
          </li>
        </ol>
      )}
    </nav>
  );
};
