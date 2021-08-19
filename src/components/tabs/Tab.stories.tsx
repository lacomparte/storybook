import React from "react";
import { Story } from "@storybook/react";
import Tab from "./Tab";
import TabModule from "./TabModule";
import { IfTab, IfTabModule } from "../../@types/props";
// import { StyledIfTab } from "../../@types/model/styled";

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

const TemplateTabModule: Story<IfTabModule> = (args) => <TabModule {...args} />;
const TabModuleDefaultData = [
  {
    active: false,
    size: "small",
    label: "기본 탭",
  },
  {
    active: false,
    size: "small",
    label: "기본 탭",
  },
];

export const TabModuleComponent = TemplateTabModule.bind({});
TabModuleComponent.args = { tabs: [...TabModuleDefaultData] };

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

TabModuleComponent.parameters = {
  docs: {
    storyDescription: "- 탭 모듈",
  },
};
