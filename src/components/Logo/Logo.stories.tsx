import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "./Logo";
import pngLogo from "../../assets/img/logos/cms_logo.png";
import svgLogo from "../../assets/img/logos/cms_logo.svg";

export default {
  title: "USWDS/Base/Logo",
  component: Logo,
  args: {
    altText: "CMS.gov Logo",
    ariaLabel: "CMS.gov Logo",
    ariaHidden: false,
    role: "img",
    width: 200,
  },
  argTypes: {
    altText: {
      description: "Alternate image text",
    },
    ariaHidden: {
      description: "Describes the image for a screen reader.",
    },
    ariaLabel: {
      description: "Source of the logo image.",
    },
    className: {
      description:
        "Determines whether or not the element is hidden from a screen reader.",
    },
    height: {
      description: "Optional additional className for the logo container",
    },
    role: {
      description: "Height parameter for logo in # of pixels.",
    },
    source: {
      description:
        "Describes the role of an element in programs that can make use of it",
    },
    width: {
      description: "Width parameter for logo in # of pixels.",
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({ ...rest }) => (
  <Logo {...rest} />
);

export const Default = Template.bind({});
export const PNGDefault = Template.bind({});
Default.args = {
  source: svgLogo,
};

PNGDefault.args = {
  source: pngLogo,
};
