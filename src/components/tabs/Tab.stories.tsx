import React from "react";
import { Story } from "@storybook/react";
import Tab from "./Tab";
import TabParent from "./TabParent";
import { IfTab, IfTabParent } from "../../@types/props";

export default {
  component: Tab,
  title: "DESIGN SYSTEM/Tabs",
  parameters: {
    componentSubtitle: "이것은 탭입니다",
  },
};

const TemplateTab: Story<IfTab> = (args) => <Tab {...args} />;
const TabDefaultData = {
  active: false,
  size: "small",
  label: "기본 탭",
};

export const TabComponent = TemplateTab.bind({});
TabComponent.args = { ...TabDefaultData };

export const TabActiveComponent = TemplateTab.bind({});
TabActiveComponent.args = { ...TabDefaultData, active: true };

const TabParentDefaultData = [
  {
    active: true,
    label: "기본 탭1",
  },
  {
    active: false,
    label: "기본 탭2",
  },
];

const Tabs = TabParentDefaultData.map(({ active, label }, idx) => (
  <Tab active={active} label={label} key={idx} />
));

const TemplateTabParent: Story<JSX.Element> = () => <TabParent tabs={Tabs} />;

export const TabParentComponent = TemplateTabParent.bind({});

TabComponent.parameters = {
  docs: {
    storyDescription: "- Default Tab",
  },
};

TabActiveComponent.parameters = {
  docs: {
    storyDescription: "- 활성화 상태",
  },
};

TabParentComponent.parameters = {
  docs: {
    storyDescription: "- 탭 모듈",
  },
};
