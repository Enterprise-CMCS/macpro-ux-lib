import React from "react";
import { Button } from "components/Button/Button";
import { Logo } from "components/Logo/Logo";

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

interface NavSection {
  buttonText: string;
  current?: boolean;
  columns: { text: string; href: string }[][];
}

interface NavSectionProps {
  section: NavSection;
  index: number;
}

const NavSection = ({ section, index }: NavSectionProps) => {
  const { buttonText, current } = section;
  return (
    <>
      <li className="usa-nav__primary-item">
        <Button
          buttonText={buttonText}
          className={`usa-accordion__button usa-nav__link ${
            current ? "usa-current" : ""
          }`}
          aria-expanded="false"
          aria-controls={`extended-mega-nav-section-${index}`}
        />
        <div
          id={`extended-mega-nav-section-${index}`}
          className="usa-nav__submenu usa-megamenu"
          hidden
        >
          <div className="grid-row grid-gap-4">
            {section.columns.map((column, idx) => {
              return (
                <SubMenuColumn
                  key={`usa-nav__submenu-list-${idx}`}
                  links={column}
                />
              );
            })}
          </div>
        </div>
      </li>
    </>
  );
};

type IntrinsicElements = JSX.IntrinsicElements["nav"];

interface HeaderProps extends IntrinsicElements {
  navData: NavSection[];
}

export const Header: React.FC<HeaderProps> = ({ navData, ...rest }) => {
  return (
    <>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--extended">
        <div className="usa-navbar">
          <div className="usa-logo" id="basic-logo">
            {
              // TODO: This should be a prop
            }
            <a href="" title="Project Title">
              <Logo altText="Project Title" />
            </a>
          </div>
          <Button buttonText="Menu" className="usa-menu-btn" />
        </div>
        <nav aria-label="Primary navigation" className="usa-nav" {...rest}>
          <div className="usa-nav__inner">
            <Button buttonText="" iconName="close" className="usa-nav__close" />
            <ul className="usa-nav__primary usa-accordion">
              {navData.map((section, idx) => {
                return (
                  <NavSection
                    section={section}
                    key={`usa-nav__primary-${idx}`}
                    index={idx}
                  />
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
