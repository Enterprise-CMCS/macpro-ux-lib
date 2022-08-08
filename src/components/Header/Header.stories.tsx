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
        { text: "Navigational Link", href: "" },
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
      // source: "../../assets/img/logos/cms_logo.png",
    },
    navData: navData,
  },
  argTypes: {
    logoProps: {
      description:
        "Props to be passed to an instance of the Logo component which will render as part of the Header.\n\nSee Logo component for complete list of props.",
    },
    navData: {
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
          text: "Manage Profile",
          iconName: "person",
          onClick: () => console.log("Manage Profile"),
        },
        {
          text: "Request Role Change",
          iconName: "people",
          onClick: () => console.log("Request Role Change"),
        },
        {
          text: "Log Out",
          iconName: "logout",
          onClick: () => console.log("Log Out"),
        },
      ]}
    />
  ),
};

HeaderWithButton.args = {
  children: <Button buttonText="Click Me" buttonVariation="inverse" />,
};
