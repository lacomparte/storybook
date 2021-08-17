interface ButtonProps {
  button: {
    primary: boolean;
    outlined: boolean;
    rounded: boolean;
    border: boolean;
    handleClickButton(): void;
    text?: string;
  };
}
