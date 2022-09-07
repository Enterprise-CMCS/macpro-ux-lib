import React, { Dispatch, SetStateAction } from "react";
import { NavigationItem } from "./VerticalNavigation";

export interface NavigationItemChild extends NavigationItem {
  navClick: Dispatch<SetStateAction<string[]>>;
}

/**
 * Vertical Navigation Child Component
 * @param {string}                        emailAddress       Email Address used at the bottom left for contact help.
 */

export const VerticalNavigationItem: React.FC<NavigationItemChild> = ({
  navClick,
  id,
  selectedIds,
  text,
  togglable,
  items,
  href,
}) => {
  return (
    <li className="usa-sidenav__item">
      <a
        href={href}
        className={selectedIds.includes(id) ? "usa-current" : ""}
        onClick={() =>
          !selectedIds.includes(id)
            ? navClick([id])
            : togglable
            ? navClick([])
            : undefined
        }
      >
        {text}
      </a>
      {selectedIds.includes(id) && items && items.length > 0 && (
        <ul className="usa-sidenav__sublist">
          {items.map((itemChild) => {
            return (
              <li className="usa-sidenav__item" key={itemChild.id}>
                <a
                  href={itemChild.href}
                  className={
                    selectedIds.includes(itemChild.id) ? "usa-current" : ""
                  }
                  onClick={() =>
                    !selectedIds.includes(itemChild.id)
                      ? navClick([id, itemChild.id])
                      : itemChild.togglable
                      ? navClick([id])
                      : undefined
                  }
                >
                  {itemChild.text}
                </a>
                {selectedIds.includes(itemChild.id) &&
                  itemChild.items &&
                  itemChild.items.length > 0 && (
                    <ul className="usa-sidenav__sublist">
                      {itemChild.items.map((itemGrandchild) => {
                        return (
                          <li
                            className="usa-sidenav__item"
                            key={itemGrandchild.id}
                          >
                            <a
                              href={itemGrandchild.href}
                              className={
                                selectedIds.includes(itemGrandchild.id)
                                  ? "usa-current"
                                  : ""
                              }
                              onClick={() =>
                                navClick([id, itemChild.id, itemGrandchild.id])
                              }
                            >
                              {itemGrandchild.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
