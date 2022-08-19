import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { USWDSDecorator } from "../../utils";
import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

export default {
  title: "COMPONENTS/Accordion",
  component: Accordion,
  decorators: [...USWDSDecorator],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ ...rest }) => (
  <AccordionGroup>
    <Accordion {...rest} />
  </AccordionGroup>
);

export const Default = Template.bind({});
Default.args = {};
