import React, { useState } from "react";
import styled from "styled-components";
import { StyledIfTab } from "../../@types/model/styled";
import { IfTab } from "../../@types/props";

const StyledTab = styled.button<StyledIfTab>`
  display: inline-flex;
  align-items: center;
  width: auto;
  height: 32px;
  padding: 0 12px;
  color: ${({ active }) => (active ? "black" : "#E5E5E5")};
  border-radius: 4px;
  border: 1px solid ${({ active }) => (active ? "black" : "#E5E5E5")};
  box-sizing: border-box;
  background-color: white;
`;

/**
 - 기본 탭 입니다.
 - 설명을 추가 할 수 있읍니다
 - 클릭시 active 상태로 전환
 **/

const Tab = ({ active, label, rest }: IfTab) => {
  const [toggleActive, setToggleActive] = useState(active);
  const handleClickButton = (toggleActive: boolean): void => {
    setToggleActive(!toggleActive);
  };

  return (
    <StyledTab
      active={toggleActive}
      onClick={() => handleClickButton(toggleActive)}
      {...rest}
    >
      {label}
    </StyledTab>
  );
};

export default Tab;
