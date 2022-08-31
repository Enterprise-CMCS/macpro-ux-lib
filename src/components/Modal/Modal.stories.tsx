import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  title: "COMPONENTS/Modal",
  component: Modal,
  argTypes: {
    description: {
      description:
        "The description text that appears on the modal beneath the heading.",
    },
    heading: {
      description: "The heading text that appears on the modal.",
    },
    id: {
      control: false,
      description:
        "The modal ID, used to automatically create related ARIA tags.",
    },
    isOpen: {
      control: false,
      description:
        "A boolean flag that shows/hides the modal, set by the Modal's parent component.",
    },
    modalType: {
      description:
        "The type of Modal. Options include `default`, `large`, or `forcedAction`.",
    },
    onClose: {
      description:
        "The Modal calls this function when the user clicks the close button.",
    },
    primaryButtonText: {
      description: "Text shown on the primary button.",
    },
    primaryOnClick: {
      description:
        "The modal calls this function when the user clicks the primary button.",
    },
    secondaryButtonText: {
      description: "Text shown on the secondary button.",
    },
    secondaryOnClick: {
      description:
        "The modal calls this function when the user clicks the secondary button.",
    },
  },
  args: {
    description: "You have unsaved changes that will be lost.",
    heading: "Are you sure you want to continue?",
    id: "example-modal",
    modalType: "default",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ ...args }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Button buttonText="Open modal" onClick={toggleModal} />
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={toggleModal}
        primaryOnClick={toggleModal}
        secondaryOnClick={toggleModal}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = { modalType: "large" };

export const ForcedAction = Template.bind({});
ForcedAction.args = { modalType: "forcedAction" };
