import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

export default {
  title: "COMPONENTS/Accordion/AccordionGroup",
  component: AccordionGroup,
  argTypes: {
    bordered: {
      description:
        "Determines whether or not a border is shown around each Accordion item in the group.",
      type: { name: "boolean" },
    },
    className: {
      description:
        "Additional classes that will be applied to the AccordionGroup root div.",
      type: { name: "string" },
    },
    children: {
      description:
        "React components that will be rendered within the AccordionGroup\n\n`React.Node`",
      control: false,
    },
    id: {
      description:
        "Unique identifier that will be applied to the AccordionGroup root div.",
      type: { name: "string" },
    },
    multiSelect: {
      description:
        "Determines whether or not multiple Accordion items can be expanded at the same time.",
    },
  },
} as ComponentMeta<typeof AccordionGroup>;

const Template: ComponentStory<typeof AccordionGroup> = ({ ...rest }) => (
  <AccordionGroup {...rest}>
    {data.map((item) => (
      <Accordion
        label={item.label}
        id={item.id}
        key={item.id}
        hidden={item?.hidden}
      >
        {item.children}
      </Accordion>
    ))}
  </AccordionGroup>
);

export const Default = Template.bind({});
Default.args = {};
export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};
export const MultipleSelections = Template.bind({});
MultipleSelections.args = {
  multiSelect: true,
};

const data = [
  {
    id: "accoridon-1",
    label: "First Amendment",
    children: [
      <p key={"accoridon-1-prose"}>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of
        speech, or of the press; or the right of the people peaceably to
        assemble, and to petition the Government for a redress of grievances.
      </p>,
    ],
    hidden: false,
  },
  {
    id: "accoridon-2",
    label: "Second Amendment",
    children: [
      <p key={"accoridon-2-prose"}>
        A well regulated Militia, being necessary to the security of a free
        State, the right of the people to keep and bear Arms, shall not be
        infringed.
      </p>,
      <ul key={"accoridon-2-list"}>
        <li>This is a list item</li>
        <li>Another list item</li>
      </ul>,
    ],
  },
  {
    id: "accoridon-3",
    label: "Third Amendment",
    children: [
      <p key={"accoridon-3-prose"}>
        No Soldier shall, in time of peace be quartered in any house, without
        the consent of the Owner, nor in time of war, but in a manner to be
        prescribed by law.
      </p>,
    ],
  },
  {
    id: "accoridon-4",
    label: "Fourth Amendment",
    children: [
      <p key={"accoridon-4-prose"}>
        The right of the people to be secure in their persons, houses, papers,
        and effects, against unreasonable searches and seizures, shall not be
        violated, and no Warrants shall issue, but upon probable cause,
        supported by Oath or affirmation, and particularly describing the place
        to be searched, and the persons or things to be seized.
      </p>,
    ],
  },
  {
    id: "accoridon-5",
    label: "Fifth Amendment",
    children: [
      <p key={"accoridon-5-prose"}>
        No person shall be held to answer for a capital, or otherwise infamous
        crime, unless on a presentment or indictment of a Grand Jury, except in
        cases arising in the land or naval forces, or in the Militia, when in
        actual service in time of War or public danger; nor shall any person be
        subject for the same offence to be twice put in jeopardy of life or
        limb; nor shall be compelled in any criminal case to be a witness
        against himself, nor be deprived of life, liberty, or property, without
        due process of law; nor shall private property be taken for public use,
        without just compensation.
      </p>,
    ],
  },
];
