import React from "react";
import styled from "styled-components";
import { StyledSegmentButton, SegmentControlProps } from "src/@types/props";

const StyledSegment = styled.button<StyledSegmentButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  min-height: calc(100% - 2px);
  padding: 0 4px;
  border: 0;
  border-radius: 4px;
  font-size: 13px;
  color: ${({ active }) => (active ? "black" : "#b3b3b3")};
  background: ${({ active }) => (active ? "white" : "#f3f3f3")};
  ${({ addStyle }) => addStyle};

  span {
    margin-left: 2px;
    color: ${({ active }) => (active ? "blue" : "#b3b3b3")};
  }
`;

/**
 - 기본 세그먼트 컨트롤 입니다.
 - 설명을 추가 할 수 있읍니다
 **/

const SegmentControl = ({
  id = 0,
  label,
  activeTab = 0,
  count = 0,
  handleClickButton,
  addStyle,
}: SegmentControlProps) => {
  const handleClickTab = () => {
    if (handleClickButton) {
      handleClickButton(id);
    } else {
      return;
    }
  };

  const convertedCount = count >= 10000 ? "9999+" : count;
  const isActive = id === activeTab;
  return (
    <StyledSegment
      active={isActive}
      onClick={handleClickTab}
      addStyle={{ ...addStyle }}
    >
      {label}
      {!!count && <span>{convertedCount}</span>}
    </StyledSegment>
  );
};

export default SegmentControl;
