import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", function() {
  test("should call onClick when clicking on the button", function() {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button onClick={onClickMock} />);

    const buttonWrap = wrapper.find("StyledButton");
    buttonWrap.simulate("click");

    expect(onClickMock).toBeCalled();
  });

  test("should render the wg-loading icon the loading prop is true", function() {
    const wrapper = shallow(<Button loading />);
    const iconWrapper = wrapper.find("i");

    expect(iconWrapper.hasClass("wg-loading")).toBeTruthy();
  });

  describe("Tooltip", function() {
    test("should show and hide the tooltip when mouse enters and leave the disabled button", function() {
      const wrapper = shallow(<Button disabled />);

      const hitBoxWrap = wrapper.children().at(0);
      hitBoxWrap.simulate("mouseOver");

      expect(wrapper.state("showTooltip")).toBeTruthy();
      hitBoxWrap.simulate("mouseLeave");
      expect(wrapper.state("showTooltip")).toBeFalsy();
    });

    test("should do nothing if button is not disabled", function() {
      const wrapper = shallow(<Button />);

      const instance = wrapper.instance();
      const setStateMock = jest.fn();
      instance.setState = setStateMock;

      instance.mouseOver();
      instance.mouseLeaves();

      expect(setStateMock.mock.calls).toHaveLength(0);
    });
  });
});
