import React from "react";
import { Logo } from "../Logo/Logo";
import depHealthHumanServicesWhite from "../../assets/img/logos/dept_health_human_services_usa_white.svg";
import depHealthHumanServicesBlack from "../../assets/img/logos/dept_health_human_services_usa_black.svg";
import medicaidLogoWhite from "../../assets/img/logos/medicaid_gov_white.svg";
import medicaidLogoBlack from "../../assets/img/logos/medicaid_gov_black.svg";
type IntrinsicElements = JSX.IntrinsicElements["footer"];

interface Props extends IntrinsicElements {
  emailAddress: string;
  address?: string;
  altFooter?: boolean;
}

/**
 * Footer Component
 * @param {string}   emailAddress       Determines which icon that needs to be rendered.
 * @param {string}   [address]            String used to specify the size of the icon, a number between 3-9.
 * @param {boolean}  [altFooter]        Determines whether or not the element is hidden from a screen reader.
 */

export const Footer: React.FC<Props> = ({
  altFooter = false,
  emailAddress,
  address = "7500 Security Boulevard Baltimore, MD 21244",
  ...rest
}) => {
  return altFooter ? (
    <footer className="usa-footer text-white" {...rest}>
      <div className="usa-footer__primary-section bg-primary">
        <div className="grid-row padding-x-5 padding-y-2 flex-align-center">
          <div className="grid-col text-white">
            <h4 className="usa-footer__primary-link text-white">Sitemap</h4>
            <div className="grid-row">
              <ul className="usa-list usa-list--unstyled text-white">
                <li className="usa-footer__secondary-link ">
                  <a href="javascript:void(0);">FAQ</a>
                </li>
                <li className="usa-footer__secondary-link">
                  <a href="javascript:void(0);">FAQ</a>
                </li>
                <li className="usa-footer__secondary-link">
                  <a href="javascript:void(0);">Home</a>
                </li>
              </ul>
              <ul className="usa-list usa-list--unstyled text-white">
                <li className="usa-footer__secondary-link ">
                  <a href="javascript:void(0);">FAQ</a>
                </li>
                <li className="usa-footer__secondary-link">
                  <a href="javascript:void(0);">FAQ</a>
                </li>
                <li className="usa-footer__secondary-link">
                  <a href="javascript:void(0);">Home</a>
                </li>
              </ul>
            </div>
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
            <p className="grid-col font-sans-xs">
              A federal government website managed and paid for by the U.S.
              Centers for Medicare and Medicaid Services and part of the MACPro
              suite.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section bg-primary-darker text-white font-sans-2xs padding-x-4">
        <div className="grid-row ">
          <p className="grid-col-3">{`Email ${emailAddress} for help or feedback.`}</p>

          <p className="grid-col-3 grid-offset-6">{address}</p>
        </div>
      </div>
    </footer>
  ) : (
    <footer className="usa-footer usa-footer--slim">
      <div className="usa-footer__primary-section bg-accent-cool-lighter ">
        <div className="grid-row padding-x-5 padding-y-2 flex-align-center">
          <div className="grid-col">
            <Logo
              ariaLabel="Medicaid Logo"
              altText="Medicaid Logo"
              source={medicaidLogoBlack}
            />
          </div>

          <div className="grid-row grid-col-5 grid-offset-2 flex-align-center">
            <Logo
              ariaLabel="Department of Health and Human Services"
              altText="Department of Health and Human Services Logo"
              source={depHealthHumanServicesBlack}
              className="grid-col-3"
              height={80}
            />
            <p className="grid-col font-sans-xs">
              A federal government website managed and paid for by the U.S.
              Centers for Medicare and Medicaid Services and part of the MACPro
              suite.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section bg-primary text-white font-sans-2xs padding-x-4">
        <div className="grid-row ">
          <p className="grid-col-3">{`Email ${emailAddress} for help or feedback.`}</p>

          <p className="grid-col-3 grid-offset-6">{address}</p>
        </div>
      </div>
    </footer>
  );
};
