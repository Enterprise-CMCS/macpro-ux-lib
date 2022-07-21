import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "USWDS/Base/Button",
  component: Button,
  argTypes: {
    buttonVariation: {
      defaultValue: "primary",
      description: "This is the style prop for the button",
    },
    buttonText: {
      defaultValue: "Click",
      buttonText: "This is the text prop for the button",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({
  buttonVariation,
  buttonText,
}) => <Button buttonVariation={buttonVariation} buttonText={buttonText} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
