import { RadioGroup } from "../RadioGroup/RadioGroup";
import { render, screen } from "../../test-setup";
import { fireEvent } from "@storybook/testing-library";
import React from "react";

describe("RadioGroup", () => {
  describe("default group", () => {
    beforeEach(() => {
      render(
        <form data-testid="test-form">
          <RadioGroup
            groupName="test-group"
            radioProps={[
              { id: "radio-1", label: "Radio 1", value: "radio-1" },
              { id: "radio-2", label: "Radio 2", value: "radio-2" },
            ]}
          />
        </form>
      );
    });
  });
});
