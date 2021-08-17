import React from "react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/,
};

const handleClickButton = (
  e: React.SyntheticEvent<HTMLButtonElement>
): void => {
  console.log(e.target);
};

export const buttonData = {
  primary: false,
  outlined: false,
  rounded: false,
  border: false,
  text: "BUTTON_PRIMARY",
  handleClickButton,
};

const actionsData = {
  handleClickButton: action("handleClickButton"),
};

export const Default = () => (
  <Button button={{ ...buttonData }} {...actionsData} />
);

export const Primary = () => (
  <Button button={{ ...buttonData, primary: true }} {...actionsData} />
);
export const Outlined = () => (
  <Button
    button={{
      ...buttonData,
      primary: false,
      rounded: false,
      border: true,
      text: "BUTTON_OUTLINED",
    }}
    {...actionsData}
  />
);
export const RoundedPrimary = () => (
  <Button
    button={{
      ...buttonData,
      primary: false,
      rounded: true,
      text: "BUTTON_ROUNDED",
    }}
    {...actionsData}
  />
);
