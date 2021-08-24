interface StyledIfTab {
  active: boolean;
  handleClickButton?(e: React.SyntheticEvent<HTMLButtonElement>): void;
}
interface TabProps {
  id: number;
  label: string;
  handleClickTab?: (id: number) => {};
  rest?: any;
  activeTab?: boolean;
}
