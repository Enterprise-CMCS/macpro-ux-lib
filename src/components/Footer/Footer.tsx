import React from "react";
import { Logo } from "../Logo/Logo";
import depHealthHumanServicesWhite from "../../assets/img/logos/dept_health_human_services_usa_white.svg";
import depHealthHumanServicesBlack from "../../assets/img/logos/dept_health_human_services_usa_black.svg";
import medicaidLogoWhite from "../../assets/img/logos/medicaid_gov_white.svg";
import medicaidLogoBlack from "../../assets/img/logos/medicaid_gov_black.svg";
import { Icon, IconChoice } from "../Icon/Icon";
type IntrinsicElements = JSX.IntrinsicElements["footer"];

interface Link {
  href?: string;
  iconName?: IconChoice;
  onClick?: () => any;
  text: string;
  target?: string;
}

interface Props extends IntrinsicElements {
  emailAddress: string;
  address?: string;
  altFooter?: boolean;
  navigationLinks?: Link[];
}

/**
 * Footer Component
 * @param {string}                        emailAddress       Email Address used at the bottom left for contact help.
 * @param {string}                        [address]          Address used at the bottom right of footer.
 * @param {boolean}                       [altFooter]        Determines whether to use the alternative footer.
 * @param {Link[]}                        [navigationLinks]  Array of navigation links to render in the alternative footer.
 */

export const Footer: React.FC<Props> = ({
  altFooter = false,
  emailAddress,
  address = "7500 Security Boulevard Baltimore, MD 21244",
  navigationLinks,
  ...rest
}) => {
  return altFooter ? (
    <footer className="usa-footer text-white" {...rest}>
      <div className="usa-footer__primary-section bg-primary">
        <div className="grid-row padding-x-5 padding-y-2 flex-align-center">
          <div className="grid-col text-white">
            {navigationLinks && (
              <div className="grid-col-4">
                <h4 className="margin-0">Sitemap</h4>
                <hr />
                <div className="grid-row">
                  {navigationLinks.map((link, idx) => {
                    return (
                      <div key={idx} className="grid-col-6">
                        <a
                          className="text-white font-sans-md text-no-underline padding-x-1 grid-col"
                          href={link.href}
                          onClick={link.onClick}
                          target={link.target}
                        >
                          {link.text}
                          {link.iconName && (
                            <Icon
                              name={link.iconName}
                              color="#fff"
                              className="margin-top-3"
                            />
                          )}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="grid-col-4">
            <div className="grid-row flex-align-center">
              <Logo
                ariaLabel="Medicaid Logo"
                altText="Medicaid Logo"
                source={medicaidLogoWhite}
              />
              <Logo
                ariaLabel="Department of Health and Human Services"
                altText="Department of Health and Human Services Logo"
                source={depHealthHumanServicesWhite}
                className="grid-col-3 margin-left-1"
                height={80}
              />
            </div>
            <div className="font-sans-xs">
              A federal government website managed and paid for by the U.S.
              Centers for Medicare and Medicaid Services and part of the MACPro
              suite.
            </div>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section bg-primary-darker text-white font-sans-2xs padding-x-4">
        <div className="grid-row">
          <p className="tablet:grid-col-9 mobile-text-center">
            Email {<b className="text-underline">{emailAddress}</b>} for help or
            feedback.
          </p>

          <p className="tablet:grid-col-3 mobile-text-center">{address}</p>
        </div>
      </div>
    </footer>
  ) : (
    <footer className="usa-footer usa-footer--slim" {...rest}>
      <div className="usa-footer__primary-section bg-accent-cool-lighter flex-justify-end">
        <div className="grid-row padding-x-5 padding-y-2 flex-align-center">
          <div className="tablet:grid-col mobile-text-center">
            <Logo
              ariaLabel="Medicaid Logo"
              altText="Medicaid Logo"
              source={medicaidLogoBlack}
            />
          </div>

          <div className="grid-row tablet:grid-col-5 flex-align-center">
            <Logo
              ariaLabel="Department of Health and Human Services"
              altText="Department of Health and Human Services Logo"
              source={depHealthHumanServicesBlack}
              className="grid-col tablet:grid-col-3 text-center"
              height={80}
            />
            <p className="grid-col-12 tablet:grid-col-9 font-sans-xs">
              A federal government website managed and paid for by the U.S.
              Centers for Medicare and Medicaid Services and part of the MACPro
              suite.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section bg-primary text-white font-sans-2xs padding-x-4">
        <div className="grid-row">
          <p className="tablet:grid-col-9 mobile-text-center">
            Email {<b className="text-underline">{emailAddress}</b>} for help or
            feedback.
          </p>
          <p className="tablet:grid-col-3 mobile-text-center">{address}</p>
        </div>
      </div>
    </footer>
  );
};
