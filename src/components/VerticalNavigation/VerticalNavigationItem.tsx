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
}) => {
  return (
    <li className="usa-sidenav__item">
      <a
        href="javascript:void(0);"
        className={selectedIds.includes(id) ? "usa-current" : ""}
        onClick={() =>
          selectedIds.includes(id) && togglable ? navClick([]) : navClick([id])
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
                  href="javascript:void(0);"
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
                      {itemChild.items.map((itemGrandChild) => {
                        return (
                          <li
                            className="usa-sidenav__item"
                            key={itemGrandChild.id}
                          >
                            <a
                              href="javascript:void(0);"
                              className={
                                selectedIds.includes(itemGrandChild.id)
                                  ? "usa-current"
                                  : ""
                              }
                              onClick={() =>
                                navClick([id, itemChild.id, itemGrandChild.id])
                              }
                            >
                              {itemGrandChild.text}
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
