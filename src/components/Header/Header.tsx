import React from "react";

interface Props {}

export const Header: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--extended">
        <div className="usa-navbar">
          <div className="usa-logo" id="basic-logo">
            <em className="usa-logo__text">
              <a href="javascript:void(0)" title="<Project title>">
                &lt;Project title&gt;
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
              <li className="usa-nav__primary-item">
                <button
                  type="button"
                  className="usa-accordion__button usa-nav__link usa-current"
                  aria-expanded="false"
                  aria-controls="extended-mega-nav-section-one"
                >
                  <span>&lt;Current section&gt;</span>
                </button>
                <div
                  id="extended-mega-nav-section-one"
                  className="usa-nav__submenu usa-megamenu"
                >
                  <div className="grid-row grid-gap-4">
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">
                            &lt;A very long navigation link that goes onto two
                            lines&gt;
                          </a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="usa-nav__primary-item">
                <button
                  type="button"
                  className="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="extended-mega-nav-section-two"
                >
                  <span>&lt;Section&gt;</span>
                </button>
                <div
                  id="extended-mega-nav-section-two"
                  className="usa-nav__submenu usa-megamenu"
                  hidden
                >
                  <div className="grid-row grid-gap-4">
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">
                            &lt;A very long navigation link that goes onto two
                            lines&gt;
                          </a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                    <div className="usa-col">
                      <ul className="usa-nav__submenu-list">
                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>

                        <li className="usa-nav__submenu-item">
                          <a href="">&lt;Navigation link&gt;</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="usa-nav__secondary usa-header--extended">
              <ul className="usa-nav__secondary-links">
                <li className="usa-nav__secondary-item">
                  <a href="javascript:void(0);">Secondary link</a>
                </li>
                <li className="usa-nav__secondary-item">
                  <a href="javascript:void(0);" className="usa-current">
                    Another secondary link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
