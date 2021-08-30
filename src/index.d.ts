declare module "*.ts";

export interface StyledTapButton {
  active: boolean;
  handleClickButton?(e: React.SyntheticEvent<HTMLButtonElement>): void;
}
export interface TabProps {
  id: number;
  label: string;
  handleClickButton?: (id: number) => {};
  activeTab?: number;
  rest?: any;
}

export interface StyledSegmentButton {
  active: boolean;
  addStyle: AddStyle;
}

export interface AddStyle {
  [index: string]: string;
}
export interface SegmentControlProps {
  id?: number;
  label: string;
  count: number;
  handleClickButton?: (id: number) => {};
  activeTab?: number;
  addStyle?: AddStyle;
  rest?: any;
}
