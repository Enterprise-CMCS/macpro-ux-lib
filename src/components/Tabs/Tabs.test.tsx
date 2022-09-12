import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

const tabPanels = [
  <TabPanel tab="Summary" id="tab-panel--summary">
    The Bill of Rights is the first ten amendments to the United States
    Constitution.
  </TabPanel>,
  <TabPanel tab="Preamble" id="tab-panel--preamble">
    We the People of the United States, in Order to form a more perfect Union,
    establish Justice, insure domestic Tranquility, provide for the common
    defence, promote the general Welfare, and secure the Blessings of Liberty to
    ourselves and our Posterity, do ordain and establish this Constitution for
    the United States of America.
  </TabPanel>,
  <TabPanel tab="Amendments" id="tab-panel--amendments">
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
  </TabPanel>,
  <TabPanel tab="Disabled" disabled id="tab-panel--disabled" />,
];

describe("Tests for the Tabs component", () => {
  it("should render", () => {
    const { container } = render(<Tabs children={tabPanels} />);

    // verify content is displayed as expected
    const tabs = container.getElementsByClassName("tab");
    expect(tabs.length).toBe(4);
    const currentTab = container.getElementsByClassName("current");
    expect(currentTab.length).toBe(1);
    expect(currentTab[0].innerHTML).toBe("Summary");
    const disabledTab = container.getElementsByClassName("disabled");
    expect(disabledTab.length).toBe(1);
    expect(disabledTab[0].innerHTML).toBe("Disabled");
    const tabsContent = container.getElementsByClassName("tabs-content");
    expect(tabsContent.length).toBe(1);
    const tabPanelContent = Array.from(tabsContent[0].children);
    expect(tabPanelContent.length).toBe(4);
    const currentContent = tabPanelContent.filter(
      (elem) => elem.getAttribute("aria-hidden") !== "true"
    );
    expect(currentContent.length).toBe(1);
    expect(currentContent[0].innerHTML).toBe(
      "The Bill of Rights is the first ten amendments to the United States Constitution."
    );
  });

  it("clicking a tab should set it to current", () => {
    const { container } = render(<Tabs children={tabPanels} />);
    expect(container.getElementsByClassName("current")[0].innerHTML).toBe(
      "Summary"
    );

    const preamble = screen.getByText("Preamble");
    fireEvent.click(preamble);
    expect(container.getElementsByClassName("current")[0].innerHTML).toBe(
      "Preamble"
    );
    const tabPanelContent =
      container.getElementsByClassName("tabs-content")[0].children;
    const currentContent = Array.from(tabPanelContent).filter(
      (elem) => elem.getAttribute("aria-hidden") !== "true"
    );
    expect(currentContent.length).toBe(1);
    expect(currentContent[0].innerHTML).toBe(
      "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
    );
  });

  it("clicking a disabled tab should do nothing", () => {
    const { container } = render(<Tabs children={tabPanels} />);
    expect(container.getElementsByClassName("current")[0].innerHTML).toBe(
      "Summary"
    );
    const disabled = screen.getByText("Disabled");
    fireEvent.click(disabled);
    expect(container.getElementsByClassName("current")[0].innerHTML).toBe(
      "Summary"
    );
  });

  it("providing an initial tab index sets the current tab", () => {
    const { container } = render(<Tabs children={tabPanels} initialTab={1} />);
    expect(container.getElementsByClassName("current")[0].innerHTML).toBe(
      "Preamble"
    );
    const tabPanelContent =
      container.getElementsByClassName("tabs-content")[0].children;
    const currentContent = Array.from(tabPanelContent).filter(
      (elem) => elem.getAttribute("aria-hidden") !== "true"
    );
    expect(currentContent.length).toBe(1);
    expect(currentContent[0].innerHTML).toBe(
      "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
    );
  });

  it("when all tabs are disabled none should be set to current", () => {
    const { container } = render(
      <Tabs>
        <TabPanel tab="Disabled 1" disabled id="tab-panel--disabled-1" />
        <TabPanel tab="Disabled 2" disabled id="tab-panel--disabled-2" />
        <TabPanel tab="Disabled 3" disabled id="tab-panel--disabled-3" />
      </Tabs>
    );
    expect(container.getElementsByClassName("current").length).toBe(0);
  });

  it("component snapshot", () => {
    const { container } = render(<Tabs children={tabPanels} />);
    expect(container).toMatchSnapshot();
  });
});
