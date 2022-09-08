import { Icon } from "../Icon/Icon";
import React, { Dispatch, SetStateAction } from "react";
import { IVerticalNavigationItem } from "./VerticalNavigation";

export interface NavigationItemChild extends IVerticalNavigationItem {
  navClick: Dispatch<SetStateAction<string[]>>;
  selectedIds: string[];
}

/**
 * Vertical Navigation Child Component
 * @param {Dispatch<SetStateAction<string[]>>}     navClick       Click hanlder passed from the Veritical Navigation component that handles showing/hiding sections.
 * @param {string[]}                               selectedIds    An array of currently selected ids that is being tracked by parent component.
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
        {togglable && (
          <span className="float-right">
            {selectedIds.includes(id) ? (
              <Icon name="arrow_drop_up" />
            ) : (
              <Icon name="arrow_drop_down" />
            )}
          </span>
        )}
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
                  {itemChild.togglable && (
                    <span className="float-right">
                      {selectedIds.includes(itemChild.id) ? (
                        <Icon name="arrow_drop_up" />
                      ) : (
                        <Icon name="arrow_drop_down" />
                      )}
                    </span>
                  )}
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
