import React from "react";
import "@enterprise-cmcs/macpro-ux-lib/build/assets/css/index.css";
import * as UX from "@enterprise-cmcs/macpro-ux-lib";
import "./App.css";
import logo from "./logo.svg";

/**
 * TODO / Notes:
 *
 * Is there enough information available to the developer while working to figure out what data types are needed (data objects specifically)
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

      <div className="content">
        <UX.Typography as="p">Houston, we have liftoff!</UX.Typography>
        <UX.Logo source={logo} altText="Test Logo" />
        <UX.Search
          onSearch={() => console.log("Searching!")}
          variation={"small"}
        />
        <UX.AccordionGroup>
          <UX.Accordion id="accordion-1" label="First Amendment">
            <p key={"accoridon-1-prose"}>
              Congress shall make no law respecting an establishment of
              religion, or prohibiting the free exercise thereof; or abridging
              the freedom of speech, or of the press; or the right of the people
              peaceably to assemble, and to petition the Government for a
              redress of grievances.
            </p>
          </UX.Accordion>
          <UX.Accordion id="accordion-2" label="Second Amendment">
            <p key={"accoridon-2-prose"}>
              A well regulated Militia, being necessary to the security of a
              free State, the right of the people to keep and bear Arms, shall
              not be infringed.
            </p>
            <ul key={"accoridon-2-list"}>
              <li>This is a list item</li>
              <li>Another list item</li>
            </ul>
          </UX.Accordion>
          <UX.Accordion id="accordion-3" label="Third Amendment">
            <p key={"accoridon-3-prose"}>
              No Soldier shall, in time of peace be quartered in any house,
              without the consent of the Owner, nor in time of war, but in a
              manner to be prescribed by law.
            </p>
          </UX.Accordion>
        </UX.AccordionGroup>

        <UX.CardChoiceGroup bordered>
          <UX.CardChoice
            actionText="Select"
            headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            href=""
            key="card-1"
          >
            <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
          </UX.CardChoice>
          <UX.CardChoice
            actionText="Click Me"
            headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            href=""
            key="card-2"
          >
            <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
            <p>
              Praesent sem mauris, sollicitudin ut interdum nec, auctor a nunc.
            </p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </UX.CardChoice>
          <UX.CardChoice
            headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            href=""
            key="card-3"
          >
            <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
          </UX.CardChoice>
          <UX.CardChoice
            actionText="Select"
            headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            href=""
            key="card-4"
          >
            <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
          </UX.CardChoice>
        </UX.CardChoiceGroup>

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
        <UX.Icon name="accessibility_new" color="#000" />
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
      </div>
      <UX.Footer emailAddress="jhechter@fearless.tech" />
    </div>
  );
}

export default App;
