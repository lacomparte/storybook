import React from "react";
import styled from "styled-components";

const StyledTab = styled.button<StyledTapButton>`
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
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }
`;

/**
 - 기본 탭 입니다.
 - 설명을 추가 할 수 있읍니다
 **/

const Tab = ({
  id = 0,
  label,
  activeTab = 0,
  handleClickButton,
  rest,
}: TabProps) => {
  const handleClickTab = () => {
    if (handleClickButton) {
      handleClickButton(id);
    } else {
      return;
    }
  };

  const isActive = id === activeTab;
  return (
    <StyledTab active={isActive} onClick={handleClickTab}>
      {label}
    </StyledTab>
  );
};

export default Tab;
