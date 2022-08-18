import React from "react"
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    type: {
      description: "The type of Modal. Options include `default`, `large`, or `forcedAction`.",
  }
}
