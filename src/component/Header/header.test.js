import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { findByTestArr } from "../../utils";
import Header from "./Header";
configure({ adapter: new Adapter() });

describe("Header Component ", () => {
  it("It should display header without Errors", () => {
    const component = shallow(<Header />);
    const wrapper = findByTestArr(component, "HeaderTitle");
    expect(wrapper.length).toBe(1);
  });
});
