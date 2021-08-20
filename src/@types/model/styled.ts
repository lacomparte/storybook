interface StyledButtonProps {
  primary: boolean;
  outlined?: boolean;
  rounded?: boolean;
  border?: boolean;
  text?: string;
  label?: string;
  handleClickButton?(e: React.SyntheticEvent<HTMLButtonElement>): void;
}
