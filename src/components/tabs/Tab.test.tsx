import React from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import { TabProps } from "src/@types/props";

const TabWrapper = (props: TabProps) => <Tab {...props} />;

it("tab rendering", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Tab id={0} label={"탭입니다"} />, div);
  expect(div.textContent).toEqual("탭입니다");

  ReactDOM.unmountComponentAtNode(div);
});
