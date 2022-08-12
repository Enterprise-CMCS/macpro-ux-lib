import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "./Link";
import { Icon } from "components/Icon/Icon";

export default {
  title: "TYPOGRAPHY/Link",
  component: Link,
  args: {
    children: undefined,
    href: undefined,
    light: undefined,
    onClick: undefined,
    style: {
      display: "flex",
      alignItems: "center",
    },
    target: undefined,
    text: undefined,
  },
  argTypes: {
    children: {
      description:
        "In the event there are multiple items that to be wrapped by the link, contents of the link may be passed as children.\n\nNote: If both `text` and `children` have a value, `children` will be used.\n\n`React.Node`",
      control: false,
    },
    href: {
      description: "Optionally sets the href attribute.",
    },
    light: {
      description: "Boolean to use the light variant of a link.",
    },
    onClick: {
      control: false,
      description:
        "Optionally provide a function to be called when the link is clicked.",
    },
    style: {
      control: false,
      description:
        "A number of styles are applied to the `Link` component by default. These can be augmented or overridden by passing in a style object. Provided styles are appeneded to the default styles.\n\n`React.CSSProperties`",
    },
    target: {
      description: "Set the target attribute of the link.",
    },
    text: {
      description:
        "Text to be rendered within the link. If no value is set for `title`, `text` + 'Link' will be used to set the title.\n\nNote: If both `text` and `children` have a value, `children` will be used.",
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ children, ...rest }) => (
  <div
    style={{
      backgroundColor: rest.light ? "black" : "white",
      padding: "20px",
      display: "inline-block",
      textAlign: "center",
    }}
  >
    <Link {...rest}>{children}</Link>
  </div>
);

export const Standard = Template.bind({});
export const StandardLightOnDark = Template.bind({});
export const LinkWithIcon = Template.bind({});

Standard.args = {
  text: "A link to CMS.gov",
  href: "https://www.cms.gov",
  target: "_blank",
};

StandardLightOnDark.args = {
  children: "A link to CMS.gov",
  href: "https://www.cms.gov",
  light: true,
  target: "_blank",
};

LinkWithIcon.args = {
  children: [<Icon name="logout" color="#0071bc" />, "Log Out"],
  onClick: () => {
    console.log("Clicked: Log Out");
  },
};
