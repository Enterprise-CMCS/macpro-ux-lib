import "./ActionsMenu.css";

import React from "react";
import { Icon, IconChoice } from "components/Icon/Icon";

interface Props {
  name: string;
  links: {
    href?: string;
    iconName?: IconChoice;
    onClick?: () => any;
    text: string;
  }[];
}

export const ActionsMenu: React.FC<Props> = ({ name, links, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
      >
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a href={link.href} onClick={link.onClick}>
                {link.iconName && <Icon name={link.iconName} color="#fff" />}
                {link.text}
              </a>
            </li>
          );
        })}
      </menu>
    </div>
  );
};
