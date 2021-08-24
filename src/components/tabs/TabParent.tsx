import React, { useState } from "react";
import styled from "styled-components";

const StyledTabParent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  overflow-x: auto;
  padding: 0 5px;
`;

const TabParent = ({ children }: { children: JSX.Element[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClickTab = (idx: number) => {
    setActiveTab(idx);
  };
  const Tab = children.map((item: JSX.Element) => {
    return React.cloneElement(item, {
      handleClickTab: () => handleClickTab(item.props.id),
      activeTab,
    });
  });

  return <StyledTabParent role="tabgroup">{Tab}</StyledTabParent>;
};

export default TabParent;
