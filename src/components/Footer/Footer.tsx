import React from "react";
import { Logo } from "../Logo/Logo";
import depHealthHumanServices from "../../assets/img/logos/depthealthhumanservices_usa.svg";
import medicaidLogo from "../../assets/img/logos/logo-MedicaidGov.svg";
type IntrinsicElements = JSX.IntrinsicElements["footer"];

interface Props extends IntrinsicElements {
  altFooter?: boolean;
}

/**
 * Footer Component
 
 */

export const Footer: React.FC<Props> = ({ altFooter, ...rest }) => {
  return altFooter ? (
    <></>
  ) : (
    // <footer className="usa-footer usa-footer--big text-white">
    //   <div className="grid-container usa-footer__return-to-top">
    //     <a href="#">Return to top</a>
    //   </div>
    //   <div className="usa-footer__primary-section">
    //     <div className="grid-container">
    //       <div className="grid-row grid-gap">
    //         <div className="tablet:grid-col-8">
    //           <nav className="usa-footer__nav" aria-label="Footer navigation,,">
    //             <div className="grid-row grid-gap-4">
    //               <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
    //                 <section
    //                   className="
    //                 usa-footer__primary-content
    //                 usa-footer__primary-content--collapsible
    //               "
    //                 >
    //                   <h4 className="usa-footer__primary-link">[Topic]</h4>
    //                   <ul className="usa-list usa-list--unstyled">
    //                     <li className="usa-footer__secondary-link">
    //                       <a href="javascript:void(0);">[Secondary link]</a>
    //                     </li>
    //                     <li className="usa-footer__secondary-link">
    //                       <a href="javascript:void(0);">[Secondary link]</a>
    //                     </li>
    //                     <li className="usa-footer__secondary-link">
    //                       <a href="javascript:void(0);">[Secondary link]</a>
    //                     </li>
    //                   </ul>
    //                 </section>
    //               </div>
    //               <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
    //                 <section
    //                   className="
    //                 usa-footer__primary-content
    //                 usa-footer__primary-content--collapsible
    //               "
    //                 >
    //                   <h4 className="usa-footer__primary-link">[Topic]</h4>
    //                   <ul className="usa-list usa-list--unstyled">
    //                     <li className="usa-footer__secondary-link">
    //                       <a href="javascript:void(0);">[Secondary link]</a>
    //                     </li>
    //                     <li className="usa-footer__secondary-link">
    //                       <a href="javascript:void(0);">[Secondary link]</a>
    //                     </li>
    //                     <li className="usa-footer__secondary-link">
    //                       <a href="javascript:void(0);">[Secondary link]</a>
    //                     </li>
    //                   </ul>
    //                 </section>
    //               </div>
    //             </div>
    //           </nav>
    //         </div>
    //         <div className="tablet:grid-col-4">
    //           <div className="usa-sign-up">
    //             <h3 className="usa-sign-up__heading">Sign up</h3>
    //             <form className="usa-form">
    //               <label className="usa-label" for="email" id="">
    //                 Your email address
    //               </label>
    //               <input
    //                 className="usa-input"
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //               />
    //               <button className="usa-button" type="submit">
    //                 Sign up
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="usa-footer__secondary-section bg-primary-darker">
    //     <div className="grid-container">
    //       <div className="grid-row grid-gap">
    //         <div
    //           className="
    //         usa-footer__logo
    //         grid-row
    //         mobile-lg:grid-col-6 mobile-lg:grid-gap-2
    //       "
    //         >
    //           <div className="mobile-lg:grid-col-auto">
    //             <img
    //               className="usa-footer__logo-img"
    //               src="/assets/img/logo-img.png"
    //               alt=""
    //             />
    //           </div>
    //           <div className="mobile-lg:grid-col-auto">
    //             <p className="usa-footer__logo-heading">[Name of Agency]</p>
    //           </div>
    //         </div>
    //         <div className="usa-footer__contact-links mobile-lg:grid-col-6">
    //           <div className="usa-footer__social-links grid-row grid-gap-1">
    //             <div className="grid-col-auto">
    //               <a className="usa-social-link" href="javascript:void(0);">
    //                 <img
    //                   className="usa-social-link__icon"
    //                   src="/assets/img/usa-icons/facebook.svg"
    //                   alt="Facebook"
    //                 />
    //               </a>
    //             </div>
    //             <div className="grid-col-auto">
    //               <a className="usa-social-link" href="javascript:void(0);">
    //                 <img
    //                   className="usa-social-link__icon"
    //                   src="/assets/img/usa-icons/twitter.svg"
    //                   alt="Twitter"
    //                 />
    //               </a>
    //             </div>
    //             <div className="grid-col-auto">
    //               <a className="usa-social-link" href="javascript:void(0);">
    //                 <img
    //                   className="usa-social-link__icon"
    //                   src="/assets/img/usa-icons/youtube.svg"
    //                   alt="YouTube"
    //                 />
    //               </a>
    //             </div>
    //             <div className="grid-col-auto">
    //               <a className="usa-social-link" href="javascript:void(0);">
    //                 <img
    //                   className="usa-social-link__icon"
    //                   src="/assets/img/usa-icons/instagram.svg"
    //                   alt="Instagram"
    //                 />
    //               </a>
    //             </div>
    //             <div className="grid-col-auto">
    //               <a className="usa-social-link" href="javascript:void(0);">
    //                 <img
    //                   className="usa-social-link__icon"
    //                   src="/assets/img/usa-icons/rss_feed.svg"
    //                   alt="RSS"
    //                 />
    //               </a>
    //             </div>
    //           </div>
    //           <p className="usa-footer__contact-heading">
    //             Email sample@cms.hhs.gov for help or feedback.
    //           </p>
    //           <address className="usa-footer__address">
    //             <div className="usa-footer__contact-info grid-row grid-gap">
    //               <div className="grid-col-auto">
    //                 <a href="tel:1-800-555-5555">[(800) 555-GOVT]</a>
    //               </div>
    //               <div className="grid-col-auto">
    //                 <a href="mailto:info@agency.gov">[info@agency.gov]</a>
    //               </div>
    //             </div>
    //           </address>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="usa-footer usa-footer--slim">
      <div className="usa-footer__primary-section bg-accent-cool-lighter padding-3">
        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-col">
              <Logo
                ariaLabel="Medicaid Logo"
                altText="Medicaid Logo"
                source={medicaidLogo}
              />
            </div>

            <div className="grid-row grid-col-5 grid-offset-2">
              <Logo
                ariaLabel="Department of Health and Human Services"
                altText="Department of Health and Human Services Logo"
                source={depHealthHumanServices}
                className="grid-col-3"
              />
              <p className="grid-col font-sans-xs">
                A federal government website managed and paid for by the U.S.
                Centers for Medicare and Medicaid Services and part of the
                MACPro suite.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section bg-primary text-white font-sans-2xs">
        <div className="grid-container">
          <div className="grid-row">
            <p className="grid-col-4">
              Email sample@cms.hhs.gov for help or feedback.
            </p>

            <p className="grid-col-4 grid-offset-3">
              7500 Security Boulevard Baltimore, MD 21244
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
