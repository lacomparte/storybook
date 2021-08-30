import React from "react";
import { Story } from "@storybook/react";
import Tab from "./Tab";
import TabParent from "./TabParent";
import { TabProps } from "src/@types/props";

export default {
  component: Tab,
  title: "DESIGN SYSTEM/Tabs",
  parameters: {
    componentSubtitle: "이것은 탭입니다",
  },
};

const TemplateTab: Story<TabProps> = (args) => <Tab {...args} />;
const TabDefaultData = {
  id: 0,
  label: "기본 탭",
};

export const TabComponent = TemplateTab.bind({});
TabComponent.args = { ...TabDefaultData };

TabComponent.parameters = {
  docs: {
    storyDescription: "- Default Tab",
  },
};

const TabParentDefaultData = [
  {
    id: 0,
    label: "기본 탭1",
  },
  {
    id: 1,
    label: "기본 탭2",
  },
  {
    id: 2,
    label: "기본 탭3",
  },
  {
    id: 3,
    label: "기본 탭4",
  },
];

const Tabs = TabParentDefaultData.map(
  ({ label, id, ...rest }: TabProps, idx) => {
    return <Tab label={label} key={idx} id={id} rest={rest} />;
  }
);

const TemplateTabParent: Story<JSX.Element> = () => (
  <TabParent>{Tabs}</TabParent>
);

export const TabParentComponent = TemplateTabParent.bind({});

TabParentComponent.parameters = {
  docs: {
    storyDescription: "- 탭 모듈",
  },
};
