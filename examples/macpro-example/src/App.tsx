import React from "react";
import "@enterprise-cmcs/macpro-ux-lib/build/assets/css/index.css";
import * as UX from "@enterprise-cmcs/macpro-ux-lib";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <UX.Button buttonText="test"> </UX.Button>
      <UX.Card
        headerText="This is my new card"
        bodyText="Do you like it?"
        imageSource="https://images.pexels.com/photos/13150285/pexels-photo-13150285.jpeg"
      >
        <UX.Button buttonText="A button could live here" />
      </UX.Card>
      {/* <UX.Checkbox
        id="1"
        label="My Checkbox"
        name="the-checkbox"
        checked
      ></UX.Checkbox> */}
      <UX.Dropdown
        label="My Dropdown"
        data={[
          { displayString: "ABC", value: "abc" },
          { displayString: "DEF", value: "def" },
          { displayString: "GHI", value: "ghi" },
        ]}
      ></UX.Dropdown>
      {/* Enough information isn't available to the developer while working to figure out what data types are needed (data objects specifically) */}
      <UX.UsaBanner />
      <UX.Header
        headerLogo={<UX.Logo source={logo} altText="Test Logo" />}
        // secondaryComponent={
        //   <UX.ActionsMenu name="user-actions-menu" links={[{}]} />
        // }
        navData={[
          {
            buttonText: "abc",
            current: true,
            columns: [[{ text: "link 1", href: "#" }]],
          },
        ]}
      />
      <UX.Footer emailAddress="jhechter@fearless.tech" />
      {/* I don't think we have access to the SVG here */}
      <UX.Icon name="arrow_upward" color="#000" />
      <UX.Link>Log Out</UX.Link>
      {/* <UX.RadioGroup
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
      /> */}

      {/* <UX.TextArea
        fieldName="child-textarea"
        id="child-textarea"
        label="Child 1 TextArea"
      /> */}
      <UX.Typography as="p">Houston, we have liftoff!</UX.Typography>
      <UX.Logo source={logo} altText="Test Logo" />
    </div>
  );
}

export default App;
