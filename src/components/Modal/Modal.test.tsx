import { Modal } from "./Modal";
import { fireEvent, render, screen } from "../../test-setup";
import React from "react";

describe("Modal", () => {
  let mockAction = jest.fn();

  describe("Default", () => {
    beforeEach(() => {
      mockAction.mockClear();

      render(
        <Modal
          description="You have unsaved changes that will be lost."
          heading="Are you sure you want to continue?"
          isOpen={true}
          onClose={mockAction}
          primaryButtonText="Continue without saving"
          primaryOnClick={mockAction}
          secondaryButtonText="Go back"
          secondaryOnClick={mockAction}
        />
      );
    });

    it("renders the heading text", () => {
      const m = screen.getByText("Are you sure you want to continue?");
      expect(m).toBeInTheDocument();
    });

    it("renders the description text", () => {
      const m = screen.getByText("You have unsaved changes that will be lost.");
      expect(m).toBeInTheDocument();
    });

    it("renders the button text", () => {
      const primary = screen.getByText("Continue without saving");
      expect(primary).toBeInTheDocument();

      const secondary = screen.getByText("Go back");
      expect(secondary).toBeInTheDocument();
    });

    it("renders the close button", () => {
      const close = screen.getByLabelText("Close this window");
      expect(close).toBeInTheDocument();
    });

    it("calls onClose() callback", () => {
      const close = screen.getByLabelText("Close this window");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(close);
      expect(mockAction).toBeCalled();
    });

    it("calls primaryOnClick() callback", () => {
      const primary = screen.getByText("Continue without saving");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(primary);
      expect(mockAction).toBeCalled();
    });

    it("calls secondaryOnClick() callback", () => {
      const secondary = screen.getByText("Go back");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(secondary);
      expect(mockAction).toBeCalled();
    });
  });

  describe("Large", () => {
    beforeEach(() => {
      mockAction.mockClear();

      render(
        <Modal
          description="You have unsaved changes that will be lost."
          heading="Are you sure you want to continue?"
          isOpen={true}
          modalType="large"
          onClose={mockAction}
          primaryButtonText="Continue without saving"
          primaryOnClick={mockAction}
          secondaryButtonText="Go back"
          secondaryOnClick={mockAction}
        />
      );
    });

    it("renders the heading text", () => {
      const m = screen.getByText("Are you sure you want to continue?");
      expect(m).toBeInTheDocument();
    });

    it("renders the description text", () => {
      const m = screen.getByText("You have unsaved changes that will be lost.");
      expect(m).toBeInTheDocument();
    });

    it("renders the button text", () => {
      const primary = screen.getByText("Continue without saving");
      expect(primary).toBeInTheDocument();

      const secondary = screen.getByText("Go back");
      expect(secondary).toBeInTheDocument();
    });

    it("renders the close button", () => {
      const close = screen.getByLabelText("Close this window");
      expect(close).toBeInTheDocument();
    });

    it("calls onClose() callback", () => {
      const close = screen.getByLabelText("Close this window");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(close);
      expect(mockAction).toBeCalled();
    });

    it("calls primaryOnClick() callback", () => {
      const primary = screen.getByText("Continue without saving");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(primary);
      expect(mockAction).toBeCalled();
    });

    it("calls secondaryOnClick() callback", () => {
      const secondary = screen.getByText("Go back");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(secondary);
      expect(mockAction).toBeCalled();
    });
  });

  describe("Forced action", () => {
    beforeEach(() => {
      mockAction.mockClear();

      render(
        <Modal
          description="You have unsaved changes that will be lost."
          heading="Are you sure you want to continue?"
          isOpen={true}
          modalType="forcedAction"
          onClose={mockAction}
          primaryButtonText="Continue without saving"
          primaryOnClick={mockAction}
          secondaryButtonText="Go back"
          secondaryOnClick={mockAction}
        />
      );
    });

    it("renders the heading text", () => {
      const m = screen.getByText("Are you sure you want to continue?");
      expect(m).toBeInTheDocument();
    });

    it("renders the description text", () => {
      const m = screen.getByText("You have unsaved changes that will be lost.");
      expect(m).toBeInTheDocument();
    });

    it("renders the button text", () => {
      const primary = screen.getByText("Continue without saving");
      expect(primary).toBeInTheDocument();

      const secondary = screen.getByText("Go back");
      expect(secondary).toBeInTheDocument();
    });

    it("renders the close button", () => {
      const close = screen.queryByLabelText("Close this window");
      expect(close).toBeNull();
    });

    it("calls primaryOnClick() callback", () => {
      const primary = screen.getByText("Continue without saving");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(primary);
      expect(mockAction).toBeCalled();
    });

    it("calls secondaryOnClick() callback", () => {
      const secondary = screen.getByText("Go back");
      expect(mockAction).not.toBeCalled();
      fireEvent.click(secondary);
      expect(mockAction).toBeCalled();
    });
  });

  describe("Closed by default", () => {
    beforeEach(() => {
      render(
        <Modal
          description="You have unsaved changes that will be lost."
          heading="Are you sure you want to continue?"
          primaryButtonText="Continue without saving"
          primaryOnClick={mockAction}
          secondaryButtonText="Go back"
          secondaryOnClick={mockAction}
        />
      );
    });
    it("renders the heading text", () => {
      const m = screen.queryByText("Are you sure you want to continue?");
      expect(m).toBeNull();
    });

    it("renders the description text", () => {
      const m = screen.queryByText(
        "You have unsaved changes that will be lost."
      );
      expect(m).toBeNull();
    });

    it("renders the button text", () => {
      const primary = screen.queryByText("Continue without saving");
      expect(primary).toBeNull();

      const secondary = screen.queryByText("Go back");
      expect(secondary).toBeNull();
    });

    it("renders the close button", () => {
      const close = screen.queryByLabelText("Close this window");
      expect(close).toBeNull();
    });
  });
});
