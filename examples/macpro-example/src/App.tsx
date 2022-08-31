import React from "react";
import "@enterprise-cmcs/macpro-ux-lib/build/assets/css/index.css";
import * as UX from "@enterprise-cmcs/macpro-ux-lib";
import "./App.css";
import logo from "./logo.svg";

/**
 * TODO / Notes:
 *
 * Images are not being bundled
 *    - no Icons are available
 *    - UsaBanner does not render correctly
 * I don't feel as though enough information is available to the developer while working to figure out what data types are needed (data objects specifically)
 *    - See Link, Checkbox, Header, anything that has a data object
 * Types are being shown as incorrect
 *    - ActionsMenu should extend the LinkProps
 */
function App() {
  return (
    <div className="App">
      <UX.UsaBanner />
      <UX.Header
        headerLogo={<UX.Logo source={logo} altText="Test Logo" />}
        // secondaryComponent={
        //   <UX.ActionsMenu
        //     name="user-actions-menu"
        //     links={[
        //       {
        //         // This type should be correct
        //         href: "",
        //         iconName: "person",
        //         text: "Manage Profile",
        //         target: "_blank",
        //         onClick: () => console.log("Manage Profile"),
        //       },
        //       {
        //         href: "",
        //         iconName: "people",
        //         text: "Request Role Change",
        //         target: "_blank",
        //         onClick: () => console.log("Request Role Change"),
        //       },
        //       {
        //         href: "",
        //         iconName: "logout",
        //         text: "Log Out",
        //         target: "_blank",
        //         onClick: () => console.log("Log Out"),
        //       },
        //     ]}
        //   />
        // }
        navData={[
          {
            buttonText: "abc",
            current: true,
            columns: [[{ text: "link 1", href: "#" }]],
          },
        ]}
      />

      <UX.Typography as="p">Houston, we have liftoff!</UX.Typography>
      <UX.Logo source={logo} altText="Test Logo" />
      <UX.Button buttonText="test"> </UX.Button>
      <UX.Card
        headerText="This is my new card"
        bodyText="Do you like it?"
        imageSource="https://images.pexels.com/photos/13150285/pexels-photo-13150285.jpeg"
      >
        <UX.Button buttonText="A button could live here" />
      </UX.Card>
      <UX.Checkbox
        id="1"
        label="My Checkbox"
        name="the-checkbox"
        checked
      ></UX.Checkbox>
      <UX.Dropdown
        label="My Dropdown"
        data={[
          { displayString: "ABC", value: "abc" },
          { displayString: "DEF", value: "def" },
          { displayString: "GHI", value: "ghi" },
        ]}
      ></UX.Dropdown>
      <UX.Icon name="arrow_upward" color="#000" />
      <UX.Link>Log Out</UX.Link>
      <UX.RadioGroup
        groupName="children"
        radioProps={[
          {
            id: "child-1",
            value: "child-1",
            label: "Child 1",
            children: [
              <UX.TextArea
                fieldName="child-textarea"
                id="child-textarea"
                label="Child 1 TextArea"
              />,
              <UX.RadioGroup
                groupName="child-1-children"
                radioProps={[
                  {
                    id: "child-1-child-1",
                    value: "child-1-child-1",
                    label: "Child 1 Child 1",
                    children: [
                      <UX.TextArea
                        fieldName="child-1-child-textarea"
                        id="child-1-child-textarea"
                        label="Child 1 Child 1 TextArea"
                      />,
                    ],
                  },
                  {
                    id: "child-1-child-2",
                    value: "child-1-child-2",
                    label: "Child 1 Child 2",
                  },
                ]}
              />,
            ],
          },
          {
            id: "child-2",
            value: "child-2",
            label: "Child 2",
            children: [
              <UX.TextArea
                fieldName="child-textarea"
                id="child-textarea"
                label="Child 2 TextArea"
              />,
            ],
          },
        ]}
      />

      <UX.TextArea
        fieldName="child-textarea"
        id="child-textarea"
        label="Child 1 TextArea"
      />
      <UX.TextInput
        fieldName="text-input"
        id="text-input-1"
        label="The Text Input We've All Been Waiting For"
      ></UX.TextInput>
      <UX.Footer emailAddress="jhechter@fearless.tech" />
    </div>
  );
}

export default App;
