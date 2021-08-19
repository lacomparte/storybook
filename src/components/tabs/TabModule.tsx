import React from "react";
import styled from "styled-components";
import { IfTabModule } from "../../@types/props";
import Tab from "./Tab";

const StyledTabWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  overflow-x: auto;
  padding: 0 5px;
`;

interface TabModule {
  active: boolean;
  label: string;
  size: string;
  rest?: any;
  role: string;
}

const TabModule = ({ tabs }: { tabs: TabModule[] }) => {
  return (
    <StyledTabWrap role="tabgroup">
      {tabs.map(({ active, label, size }, idx) => (
        <Tab active={active} size={size} label={label} key={idx} role="tab" />
      ))}
    </StyledTabWrap>
  );
};

export default TabModule;
