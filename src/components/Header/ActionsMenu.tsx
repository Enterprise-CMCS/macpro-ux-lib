import "./ActionsMenu.css";

import React from "react";
import { Icon } from "components/Icon/Icon";

export const ActionsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <menu className="user-actions-menu">
      <div className="menu-label" onClick={() => setIsOpen(!isOpen)}>
        My Account
        <Icon
          aria-hidden="true"
          name={isOpen ? "arrow_drop_up" : "arrow_drop_down"}
          color="#fff"
        />
      </div>
      <ul
        className="user-actions-drop-down usa-nav__secondary-links"
        style={isOpen ? { display: "block" } : {}}
      >
        <li key="1">
          <a onClick={() => console.log("PING")}>
            <Icon name="person" color="#fff" />
            Manage Profile
          </a>
        </li>
        <li key="2">
          <a onClick={() => console.log("PING")}>
            <Icon name="people" color="#fff" />
            Request Role Change
          </a>
        </li>
        <li key="3">
          <a onClick={() => console.log("PING")}>
            <Icon name="logout" color="#fff" />
            Log Out
          </a>
        </li>
      </ul>
    </menu>
  );
};
