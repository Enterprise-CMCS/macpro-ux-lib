import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

export default {
  title: "COMPONENTS/Accordion/Accordion",
  component: Accordion,
  args: { hidden: true },
  argTypes: {
    className: {
      description:
        "Additional classes that will be applied to the Accordion label.",
      type: { name: "string" },
    },
    children: {
      description:
        "React components that will be rendered within the Accordion content section.\n\n`React.Node`",
      control: false,
    },
    label: {
      description: "Label text to be rendered identifying the Accordion.",
    },
    hidden: {
      description:
        "Determines if the Accordion content will be visible or not on initial render. Defaults to true.",
      type: { name: "boolean" },
    },
    id: {
      description:
        "Unique identifier required for each Accordion item used for form control.",
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ ...rest }) => (
  <AccordionGroup>
    <Accordion {...rest} />
  </AccordionGroup>
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <p key={"accordion-1-prose"}>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>,
  ],
  id: "accordion-1",
  label: "First Amendment",
};
