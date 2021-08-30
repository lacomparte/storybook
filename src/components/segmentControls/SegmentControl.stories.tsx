import React from "react";
import { Story } from "@storybook/react";
import SegmentControl from "./SegmentControl";
import SegmentControlParent from "./SegmentControlParent";
import { SegmentControlProps } from "src/@types/props";

export default {
  component: SegmentControl,
  title: "DESIGN SYSTEM/SegmentControls",
  parameters: {
    componentSubtitle: "이것은 탭입니다",
  },
  argTypes: {
    label: {
      description: "SegmentControl 의 이름",
      defaultValue: 123,
    },
    id: {
      description: "고유 값",
      defaultValue: 0,
    },
    count: {
      description: "count 가 있을 경우",
      defaultValue: 0,
    },
  },
};

const TemplateSegmentControl: Story<SegmentControlProps> = (args) => (
  <SegmentControl {...args} />
);
const SegmentDefaultData = {
  id: 0,
  label: "기본 SegmentControl",
  count: 0,
};

export const segmentControlComponent = TemplateSegmentControl.bind({});
segmentControlComponent.args = { ...SegmentDefaultData };

segmentControlComponent.parameters = {
  docs: {
    storyDescription: "- Default Tab",
  },
};

const SegmentControlDefaultData = [
  {
    label: "기본 SegmentControl",
    count: 0,
  },
  {
    label: "기본 SegmentControl",
    count: 123,
  },
  {
    label: "기본 SegmentControl",
    count: 0,
  },
];

const TemplateSegmentControlParent: Story<JSX.Element> = () => {
  return (
    <SegmentControlParent>
      {SegmentControlDefaultData.map(
        ({ label, count, ...rest }: SegmentControlProps, idx) => {
          return (
            <SegmentControl
              id={idx}
              label={label}
              count={count}
              rest={rest}
              key={idx}
              addStyle={{
                flex: "1 1 auto",
                width: "100%",
              }}
            />
          );
        }
      )}
    </SegmentControlParent>
  );
};

export const SegmentControlParentComponent = TemplateSegmentControlParent.bind(
  {}
);

SegmentControlParentComponent.parameters = {
  docs: {
    storyDescription: "- 세그먼트 컨트롤",
  },
};
