import React, { useRef, useState } from "react";
import { Icon, IconChoice } from "../Icon/Icon";
import { Link, LinkProps } from "../Link/Link";
import { useOutsideClick } from "hooks/useOutsideClick";

export interface ActionsMenuLink extends LinkProps {
  iconName?: IconChoice;
}

export interface ActionMenuProps {
  name: string;
  links: ActionsMenuLink[];
}

/**
 * ActionsMenu Component
 *
 * @param {string} name   The name of the menu.
 * @param {ActionsMenuLink[]} links  List of links to display in the menu.
 */

export const ActionsMenu: React.FC<ActionMenuProps> = ({ name, links, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`user-actions-container${
        isOpen ? " user-actions-container__drop-shadow" : ""
      }`}
      ref={wrapperRef}
    >
      <button className="menu-label" onClick={() => setIsOpen(!isOpen)}>
        {name}
        <Icon
          aria-hidden="true"
          name={isOpen ? "arrow_drop_up" : "arrow_drop_down"}
          color="#fff"
        />
      </button>

      <ul
        className="user-actions-menu usa-nav__submenu"
        {...rest}
        hidden={!isOpen} // TODO: This cannot say "hidden" when expanded in mobile
      >
        {links.map((linkData, idx) => {
          const { iconName, ...link } = linkData; // filter iconName out of linkData
          return (
            <li key={idx}>
              <Link {...link}>
                {iconName && <Icon name={iconName} />}
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
