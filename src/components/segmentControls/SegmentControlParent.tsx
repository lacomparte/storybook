import React, { useState } from "react";
import styled from "styled-components";

const StyledSegmentControlParent = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 40px;
  padding: 1px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #f3f3f3;
`;

const SegmentControlParent = ({ children }: { children: JSX.Element[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClickButton = (idx: number) => {
    setActiveTab(idx);
  };
  const SegmentControl = children.map((item: JSX.Element) => {
    return React.cloneElement(item, {
      handleClickButton: () => handleClickButton(item.props.id),
      activeTab,
    });
  });

  return (
    <StyledSegmentControlParent role="tabgroup">
      {SegmentControl}
    </StyledSegmentControlParent>
  );
};

export default SegmentControlParent;
