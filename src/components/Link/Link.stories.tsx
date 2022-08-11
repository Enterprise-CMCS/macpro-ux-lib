import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "./Link";
import { Icon } from "components/Icon/Icon";

export default {
  title: "TYPOGRAPHY/Link",
  component: Link,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ children, ...rest }) => (
  <Link {...rest}>{children}</Link>
);

export const Standard = Template.bind({});
export const LinkWithIcon = Template.bind({});
Standard.args = {
  children: "A link to CMS.gov",
  href: "https://www.cms.gov",
  target: "_blank",
};

LinkWithIcon.args = {
  children: (
    <>
      <Icon name="logout" />
      Log Out
    </>
  ),
  // href: "https://www.cms.gov",
  onClick: () => {
    console.log("Clicked: Log Out");
  },
};
