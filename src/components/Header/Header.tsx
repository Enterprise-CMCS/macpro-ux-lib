import React, { PropsWithChildren } from "react";
import { Button } from "components/Button/Button";
import { Link } from "components/Link/Link";
import { Logo, LogoProps } from "components/Logo/Logo";

interface SubMenuColumnProps {
  links: Link[];
}

const SubMenuColumn: React.FC<SubMenuColumnProps> = ({ links }) => {
  return (
    <div className="usa-col">
      <ul className="usa-nav__submenu-list">
        {links.map((link, idx) => {
          return (
            <li
              className="usa-nav__submenu-item"
              key={`usa-nav__submenu-item-${idx}`}
            >
              <Link {...link} />
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
  columns: { text: string; href?: string; onClick?: () => any }[][];
}

interface NavSectionProps {
  section: NavSection;
  index: number;
}

const NavSection: React.FC<NavSectionProps> = ({ section, index }) => {
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
  logoProps: LogoProps;
  navData?: NavSection[];
}

/**
 * Header Component
 * @param {JSX.Element}   [children]    Component children to be rendered in the header.
 * @param {LogoProps}     [logoProps]   Props to be passed to an instance of the Logo component which will render as part of the Header.
 * @param {NavSection[]}  [navData]     A list of objects containing the data for each section of the navigation.
 */

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  logoProps,
  navData,
  ...rest
}) => {
  return (
    <>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--extended">
        <div className="usa-navbar-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <a href="" title="Project Title">
                <Logo {...logoProps} />
              </a>
            </div>
            <Button buttonText="Menu" className="usa-menu-btn" />
          </div>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav" {...rest}>
          <div className="usa-nav__inner">
            <Button buttonText="" iconName="close" className="usa-nav__close" />
            <ul className="usa-nav__primary usa-accordion">
              {navData?.map((section, idx) => {
                return (
                  <NavSection
                    section={section}
                    key={`usa-nav__primary-${idx}`}
                    index={idx}
                  />
                );
              })}
            </ul>
            <div className="usa-nav__secondary usa-header--extended">
              {children}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
