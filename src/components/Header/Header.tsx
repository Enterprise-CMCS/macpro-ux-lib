import React, { useRef, useState } from "react";
import { Button } from "components/Button/Button";
import { Link, LinkProps } from "components/Link/Link";
import { useOutsideClick } from "hooks/useOutsideClick";

interface SubMenuColumnProps {
  links: LinkProps[];
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
  const [expanded, setExpanded] = useState(false);
  const { buttonText, current } = section;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    setExpanded(false);
  });
  return (
    <>
      <li className="usa-nav__primary-item" ref={wrapperRef}>
        <Button
          buttonText={buttonText}
          className={`usa-accordion__button usa-nav__link ${
            current ? "usa-current" : ""
          }`}
          aria-expanded={expanded}
          aria-controls={`extended-mega-nav-section-${index}`}
          onClick={() => setExpanded(!expanded)}
        />
        <div
          id={`extended-mega-nav-section-${index}`}
          className="usa-nav__submenu usa-megamenu"
          hidden={!expanded}
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
  headerLogo?: React.ReactNode;
  secondaryComponent?: React.ReactNode;
  navData?: NavSection[];
}

/**
 * Header Component
 *
 * @param {React.ReactNode} [headerLogo]            React element that will be rendered in the upper left corner of the header.
 * @param {React.ReactNode} [secondaryComponent]    React element that will be rendered in the upper right corner of the header on desktop, and will be tucked in the side menu on mobile.
 * @param {NavSection[]}    [navData]               A list of objects containing the data for each section of the navigation.
 */

export const Header: React.FC<HeaderProps> = ({
  headerLogo,
  secondaryComponent,
  navData,
  ...rest
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("usa-js-mobile-nav--active");
    setMenuOpen(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("usa-js-mobile-nav--active");
    setMenuOpen(false);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    closeMenu();
  });

  return (
    <>
      <div className={`usa-overlay${menuOpen ? " is-visible" : ""}`}></div>
      <header className="usa-header usa-header--extended" ref={wrapperRef}>
        <div className="usa-navbar-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              {headerLogo}
            </div>
            <Button
              buttonText="Menu"
              className="usa-menu-btn"
              onClick={openMenu}
            />
          </div>
        </div>
        <nav
          aria-label="Primary navigation"
          className={`usa-nav${menuOpen ? " is-visible" : ""}`}
          {...rest}
        >
          <div className="usa-nav__inner">
            <Button
              buttonText=""
              iconName="close"
              className="usa-nav__close"
              onClick={closeMenu}
            />
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
              {secondaryComponent}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
