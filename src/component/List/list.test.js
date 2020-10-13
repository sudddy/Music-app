import React from "react";
import { shallow, configure } from "enzyme";
import List from "./List";
import { findByTestArr } from "../../utils";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const component = shallow(<List {...props} />);
  return component;
};

describe("List Component ", () => {
  var component;

  beforeEach(() => {
    component = setup();
  });

  it("Should display Image in the list", () => {
    const logo = findByTestArr(component, "ListImage");
    expect(logo.length).toBe(1);
  });

  describe("Check props Value", () => {
    const props = {
      name: "test title"
    };

    it("Should have Name value", () => {
      component = setup(props);
      const text = findByTestArr(component, "ListText");
      expect(text.length).toBe(1);
    });

    it("should enable click in thumbnail", () => {
      const mockCallback = jest.fn();
      const wrapper = shallow(<List onClick={mockCallback} />);
      wrapper.find("[data-test='ListComponent']").simulate("click");
      expect(mockCallback.mock.calls.length).toEqual(1);
    });
  });
});
