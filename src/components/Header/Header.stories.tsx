import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActionsMenu } from "./ActionsMenu";
// import { Button } from "components/Button/Button";
import { Header } from "./Header";

export default {
  title: "USWDS/Base/Header",
  component: Header,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ children, ...rest }) => (
  <Header {...rest}>{children}</Header>
);

export const Default = Template.bind({});
Default.args = {
  logoProps: {
    altText: "CMS.gov Project",
    // source: "https://www.cms.gov/themes/custom/cms_evo/logo.svg",
  },
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
  // children: <Button buttonText="test" />,
  navData: [
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
  ],
};
