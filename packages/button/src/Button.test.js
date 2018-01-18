import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", function() {
  test("should call onClick when clicking on the button", function() {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button onClick={onClickMock} />);
    wrapper.simulate("click");

    expect(onClickMock).toBeCalled();
  });

  test("should render the wg-loading icon the loading prop is true", function() {
    const wrapper = shallow(<Button loading />);
    const iconWrapper = wrapper.find("i");

    expect(iconWrapper.hasClass("wg-loading")).toBeTruthy();
  });
});
