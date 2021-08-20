export interface StyledIfTab {
  active: boolean;
  handleClickButton?(e: React.SyntheticEvent<HTMLButtonElement>): void;
}
export interface IfTab extends StyledIfTab {
  label: string;
  rest?: object;
}
export interface IfTabParent {
  active: boolean;
  label: string;
  rest?: object;
}
