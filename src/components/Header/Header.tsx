import React from "react";
import { generateId } from "utils";
import { Logo } from "components/Logo/Logo";

interface Props {}

export const Header: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--extended">
        <div className="usa-navbar">
          <div className="usa-logo" id="basic-logo">
            <em className="usa-logo__text">
              {/* TODO: This should be a prop */}
              <a href="" title="Project Title">
                <Logo altText="Project Title" />
              </a>
            </em>
          </div>
          <button type="button" className="usa-menu-btn">
            Menu
          </button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav">
          <div className="usa-nav__inner">
            <button type="button" className="usa-nav__close">
              <img src="./img/usa-icons/close.svg" role="img" alt="" />
            </button>

            <ul className="usa-nav__primary usa-accordion">
              {[
                { buttonText: "Current Section", current: true },
                { buttonText: "Section" },
              ].map((section) => {
                return <NavSection section={section} />;
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

interface SubMenuColumnProps {
  links: { text: string; href: string }[];
}

const SubMenuColumn: React.FC<SubMenuColumnProps> = ({ links }) => {
  return (
    <div className="usa-col">
      <ul className="usa-nav__submenu-list">
        {links.map((link) => {
          return (
            <li className="usa-nav__submenu-item">
              <a href={link.href}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface NavSectionProps {
  section: {
    buttonText: string;
    current?: boolean;
  };
}

const NavSection: React.FC<NavSectionProps> = ({ section }) => {
  const { buttonText, current } = section;
  const id = generateId();
  return (
    <>
      <li className="usa-nav__primary-item">
        <button
          type="button"
          className={`usa-accordion__button usa-nav__link ${
            current ? "usa-current" : ""
          }`}
          aria-expanded="false"
          aria-controls={`extended-mega-nav-section-${id}`}
        >
          <span>{buttonText}</span>
        </button>
        <div
          id={`extended-mega-nav-section-${id}`}
          className="usa-nav__submenu usa-megamenu"
          hidden
        >
          <div className="grid-row grid-gap-4">
            {/* For each... */}
            <SubMenuColumn
              links={[
                { text: "one", href: "www.com" },
                { text: "two", href: "www.com" },
              ]}
            />

            <SubMenuColumn
              links={[
                { text: "one", href: "www.com" },
                { text: "two", href: "www.com" },
              ]}
            />
          </div>
        </div>
      </li>
    </>
  );
};
