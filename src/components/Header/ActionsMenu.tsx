import React, { useState } from "react";
import { Icon, IconChoice } from "../Icon/Icon";
import { Link, LinkProps } from "../Link/Link";

interface ActionsMenuLink extends LinkProps {
  iconName?: IconChoice;
}

interface Props {
  name: string;
  links: ActionsMenuLink[];
}

/**
 * ActionsMenu Component
 *
 * @param {string} name   The name of the menu.
 * @param {ActionsMenuLink[]} links  List of links to display in the menu.
 */

export const ActionsMenu: React.FC<Props> = ({ name, links, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user-actions-container">
      <span className="menu-label" onClick={() => setIsOpen(!isOpen)}>
        {name}
        <Icon
          aria-hidden="true"
          name={isOpen ? "arrow_drop_up" : "arrow_drop_down"}
          color="#fff"
        />
      </span>
      <menu
        className="user-actions-menu usa-nav__secondary-links"
        style={isOpen ? { display: "block" } : {}}
        {...rest}
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
      </menu>
    </div>
  );
};
