import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActionsMenu } from "./ActionsMenu";
import { Button } from "components/Button/Button";
import { Link } from "components/Link/Link";
import { Logo } from "components/Logo/Logo";
import { Header } from "./Header";

import pngLogo from "../../assets/img/logos/cms_logo.png";

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
    navData: navData,
  },
  argTypes: {
    headerLogo: {
      control: false,
      description:
        "React element or elements that will be rendered in the upper left corner of the header.\n\nThis will most likely be an instance of the Logo component or Logo wrapped in the Link component.",
    },
    secondaryComponent: {
      control: false,
      description:
        "React element or elements to be displayed in the upper right corner of the header on desktop, or in the side menu on mobile.\n\nExample: the user `ActionsMenu`",
    },
    navData: {
      control: false,
      description:
        "A array of objects containing the data for each section of the navigation.\n\nEach section of the nav should be represented as an object in this list.",
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...rest }) => (
  <Header {...rest} />
);

export const Standard = Template.bind({});
export const HeaderWithButton = Template.bind({});
export const Empty = Template.bind({});

Standard.args = {
  headerLogo: (
    <Link href="" title="Project Title">
      <Logo altText={"Project Logo"} source={pngLogo} />
    </Link>
  ),
  secondaryComponent: (
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
  headerLogo: <Logo altText={"Project Logo"} />,
  secondaryComponent: (
    <Button buttonText="Click Me" buttonVariation="inverse" />
  ),
};

Empty.args = {};
