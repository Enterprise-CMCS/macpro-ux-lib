import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: "USWDS/Base/Footer",
  component: Footer,
  argTypes: {
    emailAddress: {
      description: "Email Address used at the bottom left for contact help",
    },
    address: {
      description: "Address used at the bottom right of footer",
    },
    altFooter: {
      description: "Determines whether to use the alternative footer",
    },
    navigationLinks: {
      description:
        "Array of navigation elements to render in the alternative footer",
    },
  },
  args: {
    emailAddress: "storybook-test@cms.hhs.gov",
    altFooter: false,
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = ({ ...rest }) => (
  <Footer {...rest} />
);

export const Default = Template.bind({});
export const altFooterWithLinks = Template.bind({});
altFooterWithLinks.args = {
  altFooter: true,
  navigationLinks: [
    {
      href: "https://www.google.com/",
      iconName: "launch",
      onClick: () => {
        console.log("launch");
      },
      text: "FAQ",
    },
    {
      href: "https://www.google.com/",
      iconName: "launch",
      onClick: () => {
        console.log("launch");
      },
      text: "FAQ",
    },
    {
      href: "https://www.google.com/",
      iconName: "launch",
      onClick: () => {
        console.log("launch");
      },
      text: "FAQ",
    },
    {
      href: "https://www.google.com/",
      iconName: "launch",
      onClick: () => {
        console.log("launch");
      },
      text: "FAQ",
    },
    {
      href: "https://www.google.com/",
      onClick: () => {
        console.log("launch");
      },
      text: "Home",
    },
    {
      href: "https://www.google.com/",
      onClick: () => {
        console.log("launch");
      },
      text: "Home",
    },
  ],
};
