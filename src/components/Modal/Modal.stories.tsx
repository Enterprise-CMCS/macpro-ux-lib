import React from "react";
import { Button } from "../Button/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "@storybook/addons";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    type: {
      description:
        "The type of Modal. Options include `default`, `large`, or `forcedAction`.",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ ...args }) => {
  return (
    <>
      <a
        className="usa-button"
        aria-controls="example-modal-1"
        data-open-modal
      >
        Open default modal
      </a>

      <Modal {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = { type: "default" };
