import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    modalType: {
      description:
        "The type of Modal. Options include `default`, `large`, or `forcedAction`.",
    },
  },
  args: {
    description: "You have unsaved changes that will be lost.",
    heading: "Are you sure you want to continue?",
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
      <Button buttonText="Open deftaul modal" onClick={toggleModal} />
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
