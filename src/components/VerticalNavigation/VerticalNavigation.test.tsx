// import React from "react";
// import { screen, render } from "../../test-setup";
// import { Footer } from "./VerticalNavigation";

// describe("Tests for the Footer component.", () => {
//   it("Should render with default address and test email", () => {
//     render(<Footer emailAddress="test@gmail.com" data-testid="Footer" />);

//     const FooterComp = screen.getByTestId("Footer");
//     expect(FooterComp).toBeInTheDocument();
//     expect(FooterComp).toHaveTextContent(
//       "Email test@gmail.com for help or feedback."
//     );
//     expect(FooterComp).toHaveTextContent(
//       "7500 Security Boulevard Baltimore, MD 21244"
//     );
//   });

//   it("Should render with user address and user email", () => {
//     render(
//       <Footer
//         emailAddress="user@gmail.com"
//         data-testid="Footer"
//         address="111 user drive"
//       />
//     );

//     const FooterComp = screen.getByTestId("Footer");
//     expect(FooterComp).toHaveTextContent(
//       "Email user@gmail.com for help or feedback."
//     );
//     expect(FooterComp).toHaveTextContent("111 user drive");
//   });

//   it("Should render alternative footer with a link", () => {
//     render(
//       <Footer
//         navigationLinks={[
//           {
//             href: "https://www.google.com/",
//             iconName: "launch",
//             onClick: () => {
//               console.log("launch");
//             },
//             text: "FAQ",
//           },
//         ]}
//         emailAddress="user@gmail.com"
//         altFooter
//         data-testid="Footer"
//       />
//     );

//     const FooterComp = screen.getByTestId("Footer");
//     expect(FooterComp).toHaveTextContent("FAQ");
//   });
// });

// describe("compontent snapshots", () => {
//   it("Basic Footer", () => {
//     const { container } = render(<Footer emailAddress="test@gmail.com" />);
//     expect(container).toMatchSnapshot();
//   });

//   it("Alternative Footer", () => {
//     const { container } = render(
//       <Footer
//         altFooter
//         navigationLinks={[
//           {
//             href: "https://www.google.com/",
//             iconName: "launch",
//             onClick: () => {
//               console.log("launch");
//             },
//             text: "FAQ",
//           },
//         ]}
//         emailAddress="test@gmail.com"
//         address="111 test drive"
//       />
//     );
//     expect(container).toMatchSnapshot();
//   });
// });
