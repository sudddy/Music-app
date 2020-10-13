import React from "react";
import { shallow, configure, mount } from "enzyme";
import ImageCard from "./image";

import { findByTestArr } from "../../utils";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const component = shallow(<ImageCard {...props} />);
  return component;
};

describe("ImageCard Component ", () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it("Should display Image in Card", () => {
    const logo = findByTestArr(component, "CardImage");
    expect(logo.length).toBe(1);
  });

  it("should enable click in thumbnail", () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<ImageCard onClick={mockCallback} />);
    wrapper.find("[data-test='CardImage']").simulate("click");
    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  it("Should display Title in Card", () => {
    const text = findByTestArr(component, "CardTitle");
    expect(text.length).toBe(1);
  });
});
