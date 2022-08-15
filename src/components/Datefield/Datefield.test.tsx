import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";

// describe("Tests for the Datefield component.", () => {
//   it("Should render and fire a callback", () => {
//     render(<Datefield data-testid="Datefield" />);
//     const DatefieldComp = screen.getByTestId("Datefield");

//     fireEvent.click(DatefieldComp);
//     expect(DatefieldComp).toBeInTheDocument();
//     expect(DatefieldComp).toHaveTextContent("Datefield");
//   });
// });

// it("Should render a Datefield with an aria label of shift icon left", () => {
//   render(<Datefield />);
//   const DatefieldComp = screen.getByTestId("Datefield");

//   expect(DatefieldComp).toBeInTheDocument();
// });

// describe("compontent snapshots", () => {
//   it("primary big disabled", () => {
//     const { container } = render(<Datefield />);
//     expect(container).toMatchSnapshot();
//   });
// });
