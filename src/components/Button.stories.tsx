import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/,
};

const handleClickButton = (
  e: React.SyntheticEvent<HTMLButtonElement>
): void => {
  console.log("?!", e);
};

const actionsData = {
  handleClickButton,
};

const Template = (args: StyledButtonProps) => {
  return <Button {...args} {...actionsData} />;
};

export const buttonNormal = Template.bind({});
buttonNormal.args = {
  primary: false,
  outlined: false,
  rounded: false,
  border: false,
  text: "BUTTON_NORMAL",
};

export const buttonPrimary = Template.bind({});
buttonPrimary.args = {
  ...buttonNormal.args,
  primary: true,
  text: "BUTTON_PRIMARY",
};

export const buttonOutlined = Template.bind({});
buttonOutlined.args = {
  ...buttonNormal.args,
  outlined: true,
  text: "BUTTON_OUTLINED",
};

export const buttonRounded = Template.bind({});
buttonRounded.args = {
  ...buttonNormal.args,
  rounded: true,
  text: "BUTTON_ROUNDED",
};
