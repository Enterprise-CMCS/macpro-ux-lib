import { ComponentStory } from "@storybook/react";
import React from "react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

export default {
  title: "COMPONENTS/Tooltip",
  component: Tooltip,
  args: {
    position: "top",
    title: "Tooltip",
  },
  argTypes: {
    position: {
      description: "The position where the tooltip should appear.",
    },
    title: {
      description: "The text that should appear on the tooltip.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'To display a tooltip when a user hovers over an element, wrap it in the `Tooltip` component, which takes `position` and `title` properties. If there is not enough room for the tooltip on the left or right sides, `Tooltip` will automatically switch the position to `"top"` for improved readability.',
      },
    },
  },
};

const Template: ComponentStory<typeof Tooltip> = ({ ...rest }) => (
  <div className="padding-8">
    <Tooltip {...rest}>
      <Button buttonText="Show on top" type="button" />
    </Tooltip>
  </div>
);

export const Top = Template.bind({});
Top.args = {
  position: "top",
  title: "Top",
};

export const Right = Template.bind({});
Right.args = {
  position: "right",
  title: "Right",
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
  title: "Bottom",
};

export const Left = Template.bind({});
Left.args = {
  position: "left",
  title: "Left",
};
