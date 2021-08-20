import React from "react";
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

const TabParent = ({ tabs }: { tabs: JSX.Element[] }) => {
  return <StyledTabParent role="tabgroup">{tabs}</StyledTabParent>;
};

export default TabParent;
