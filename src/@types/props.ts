interface StyledTapButton {
  active: boolean;
  handleClickButton?(e: React.SyntheticEvent<HTMLButtonElement>): void;
}
interface TabProps {
  id: number;
  label: string;
  handleClickButton?: (id: number) => {};
  activeTab?: number;
  rest?: any;
}

interface StyledSegmentButton {
  active: boolean;
  addStyle: AddStyle;
}

interface AddStyle {
  [index: string]: string;
}
interface SegmentControlProps {
  id: number;
  label: string;
  count: number;
  handleClickButton?: (id: number) => {};
  activeTab?: number;
  addStyle?: AddStyle;
  rest?: any;
}
