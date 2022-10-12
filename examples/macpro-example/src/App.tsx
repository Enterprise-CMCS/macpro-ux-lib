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
        secondaryComponent={
          <UX.ActionsMenu
            name="user-actions-menu"
            links={[
              {
                // This type should be correct
                href: "",
                iconName: "person",
                text: "Manage Profile",
                target: "_blank",
                onClick: () => console.log("Manage Profile"),
              },
              {
                href: "",
                iconName: "people",
                text: "Request Role Change",
                target: "_blank",
                onClick: () => console.log("Request Role Change"),
              },
              {
                href: "",
                iconName: "logout",
                text: "Log Out",
                target: "_blank",
                onClick: () => console.log("Log Out"),
              },
            ]}
          />
        }
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
        <UX.VerticalNavigation
          items={[
            { id: "1", items: [], text: "Parent" },
            {
              id: "2",
              togglable: true,
              items: [
                {
                  id: "4",
                  togglable: true,
                  navClick: () => console.log(""),
                  selectedIds: [""],
                  items: [
                    {
                      id: "6",
                      text: "Grandchild",
                      selectedIds: [""],
                      navClick: () => console.log(""),
                    },
                    {
                      id: "7",
                      text: "Grandchild",
                      selectedIds: [""],
                      navClick: () => console.log(""),
                    },
                  ],
                  text: "Child with toggle",
                },
                {
                  id: "5",
                  items: [],
                  text: "Child",
                  selectedIds: [""],
                  navClick: () => console.log(""),
                },
              ],

              text: "Parent with toggle",
            },
            { id: "3", items: [], text: "Parent" },
          ]}
        />
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
        <UX.Datefield id="1" name="react-calendar" label="Calendar example" />
        <UX.TextInput
          fieldName="text-input"
          id="text-input-1"
          label="The Text Input We've All Been Waiting For"
        ></UX.TextInput>
        <UX.DateRange
          startInputId="id-1"
          startInputName="react-calendar"
          startLabel="Start Range"
          endInputId="id-2"
          endInputName="react-calendar2"
          endLabel="End Range"
          defaultStartDate="08/08/2022"
          hint={true}
        />
        <UX.Alert
          alertHeading="Alert Heading"
          alertBody="Alert Body"
          variation="info"
        />
        <UX.SiteAlert
          alertHeading="Alert Heading"
          alertBody="Alert Body"
          emergency
        />
        <UX.Datefield id="1" name="react-calendar" label="Calendar example" />
        <UX.Tabs>
          <UX.TabPanel tabLabel="Summary" id="tab-panel--summary">
            The Bill of Rights is the first ten amendments to the United States
            Constitution.
          </UX.TabPanel>
          <UX.TabPanel tabLabel="Preamble" id="tab-panel--preamble">
            We the People of the United States, in Order to form a more perfect
            Union, establish Justice, insure domestic Tranquility, provide for
            the common defence, promote the general Welfare, and secure the
            Blessings of Liberty to ourselves and our Posterity, do ordain and
            establish this Constitution for the United States of America.
          </UX.TabPanel>
          <UX.TabPanel tabLabel="Amendments" id="tab-panel--amendments">
            <h2>Bill of Rights</h2>
            <ol>
              <li>Freedoms, Petitions, Assembly</li>
              <li>Right to bear arms</li>
              <li>Quartering of soldiers</li>
              <li>Search and arrest</li>
              <li>Rights in criminal cases</li>
              <li>Right to a fair trial</li>
              <li>Rights in civil cases</li>
              <li>Bail, fines, punishment</li>
              <li>Rights retained by the People</li>
              <li>States' rights</li>
            </ol>
            <h2>Later Amendments</h2>
            <ol start={11}>
              <li>Lawsuits against states</li>
              <li>Presidential elections</li>
              <li>Abolition of slavery</li>
              <li>Civil rights</li>
              <li>Black suffrage</li>
              <li>Income taxes</li>
              <li>Senatorial elections</li>
              <li>Prohibition of liquor</li>
              <li>Women's suffrage</li>
              <li>Terms of office</li>
              <li>Repeal of Prohibition</li>
              <li>Term Limits for the Presidency</li>
              <li>Washington, D.C., suffrage</li>
              <li>Abolition of poll taxes</li>
              <li>Presidential succession</li>
              <li>18-year-old suffrage</li>
              <li>Congressional pay raises</li>
            </ol>
          </UX.TabPanel>
          <UX.TabPanel tabLabel="Disabled" disabled id="tab-panel--disabled" />
        </UX.Tabs>
        <div className="margin-5">
          <UX.StepIndicator
            currentProgress={3}
            headingText="This is the Step Indicator"
            steps={[
              { label: "Personal information", order: 1 },
              { label: "Household status", order: 2 },
              { label: "Supporting documents", order: 3 },
              { label: "Signature", order: 4 },
              { label: "Review and submit", order: 5 },
            ]}
          />
        </div>

        <UX.Table>
          <thead key="BasicTableChildren__thead">
            <tr>
              <UX.TH>Document title</UX.TH>
              <UX.TH>Description</UX.TH>
              <UX.TH>Year</UX.TH>
            </tr>
          </thead>
          <tbody key="BasicTableChildren__tbody">
            <tr>
              <UX.TH rowHeader>Declaration of Independence</UX.TH>
              <UX.TD>
                Statement adopted by the Continental Congress declaring
                independence from the British Empire.
              </UX.TD>
              <UX.TD>1776</UX.TD>
            </tr>
            <tr>
              <UX.TH rowHeader>Bill of Rights</UX.TH>
              <UX.TD>
                The first ten amendments of the U.S. Constitution guaranteeing
                rights and freedoms.
              </UX.TD>
              <UX.TD>1791</UX.TD>
            </tr>
            <tr>
              <UX.TH rowHeader>Declaration of Sentiments</UX.TH>
              <UX.TD>
                A document written during the Seneca Falls Convention outlining
                the rights that American women should be entitled to as
                citizens.
              </UX.TD>
              <UX.TD>1848</UX.TD>
            </tr>
            <tr>
              <UX.TH rowHeader>Emancipation Proclamation</UX.TH>
              <UX.TD>
                An executive order granting freedom to slaves in designated
                southern states.
              </UX.TD>
              <UX.TD>1863</UX.TD>
            </tr>
          </tbody>
        </UX.Table>
      </div>
      <UX.Footer emailAddress="jhechter@fearless.tech" />
    </div>
  );
}

export default App;
