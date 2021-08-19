import { StyledIfTab } from "./model/styled";
export interface IfTab extends StyledIfTab {
  label: string;
  size: string;
  rest?: object;
}
export interface IfTabModule {
  tabs: {
    active: boolean;
    label: string;
    size: string;
    rest?: object;
  }[];
}
