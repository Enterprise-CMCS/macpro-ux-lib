import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActionsMenu } from "./ActionsMenu";
import { Button } from "components/Button/Button";
import { Header } from "./Header";

const navData = [
  {
    buttonText: "Current Section",
    current: true,
    columns: [
      [
        { text: "Navigational Link", href: "", target: "_blank" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
      ],
      [{ text: "Navigational Link", href: "" }],
      [
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
      ],
      [
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
      ],
    ],
  },
  {
    buttonText: "Section",
    columns: [
      [
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
        { text: "Navigational Link", href: "" },
      ],
    ],
  },
];

export default {
  title: "USWDS/Base/Header",
  component: Header,
  args: {
    logoProps: {
      altText: "CMS.gov Project",
    },
    navData: navData,
  },
  argTypes: {
    children: {
      control: false,
      description:
        "React element or elements to be displayed in the upper right corner of the header on desktop, or in the side menu on mobile.\n\nExample: the user `ActionsMenu`",
    },
    logoProps: {
      control: false,
      description:
        "Props to be passed to an instance of the Logo component which will render as part of the Header.\n\nSee Logo component for complete list of props.",
    },
    navData: {
      control: false,
      description:
        "A array of objects containing the data for each section of the navigation.\n\nEach section of the nav should be represented as an object in this list.",
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ children, ...rest }) => (
  <Header {...rest}>{children}</Header>
);

export const Default = Template.bind({});
export const HeaderWithButton = Template.bind({});
Default.args = {
  children: (
    <ActionsMenu
      name="My Account"
      links={[
        {
          href: "",
          iconName: "person",
          text: "Manage Profile",
          target: "_blank",
          onClick: () => console.log("Manage Profile"),
        },
        {
          href: "",
          iconName: "people",
          text: "Request Role Change",
          target: "_blank",
          onClick: () => console.log("Request Role Change"),
        },
        {
          href: "",
          iconName: "logout",
          text: "Log Out",
          target: "_blank",
          onClick: () => console.log("Log Out"),
        },
      ]}
    />
  ),
};

HeaderWithButton.args = {
  children: <Button buttonText="Click Me" buttonVariation="inverse" />,
};
