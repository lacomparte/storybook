import React from "react";
import styled from "styled-components";
import Logo from "../assets/svg/Logo";

const StyledWrapper = styled.button<StyledButtonProps>`
  width: auto;
  height: 30px;
  color: ${({ primary }) => (primary ? "white" : "black")};
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  border: ${({ border }) => (border ? "1px solid black" : "none")};
  background-color: ${({ primary }) => (primary ? "blue" : "gray")};
`;

const Button = ({
  primary,
  outlined,
  rounded,
  border,
  text,
  handleClickButton,
}: StyledButtonProps) => {
  return (
    <StyledWrapper
      primary={primary}
      outlined={outlined}
      rounded={rounded}
      border={border}
      onClick={(e) => handleClickButton && handleClickButton(e)}
    >
      <Logo />
      {text}
    </StyledWrapper>
  );
};

export default Button;
