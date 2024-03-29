import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";

import Radio from ".";

describe("Radio", () => {
  configure({ adapter: new Adapter() });

  describe("handleClick", () => {
    let onClickSpy, onChangeSpy;
    beforeEach(() => {
      onClickSpy = jest.fn();
      onChangeSpy = jest.fn();
    });
    afterEach(() => {
      onClickSpy.mockReset();
      onChangeSpy.mockReset();
    });
    test("should repass event to given onClick prop", () => {
      const event = {};
      const component = shallow(<Radio onClick={onClickSpy} />);
      const { handleClick } = component.instance();
      handleClick(event);

      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith(event);
    });
    test("should not call onClick if prop disabled is given", () => {
      const component = shallow(<Radio onClick={onClickSpy} disabled />);
      const { handleClick } = component.instance();
      handleClick();

      expect(onClickSpy).not.toHaveBeenCalled();
    });
    test("should call onChange with given value", () => {
      const value = "a value";
      const component = shallow(<Radio onChange={onChangeSpy} value={value} />);
      const { handleClick } = component.instance();
      handleClick();

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(value);
    });
    test("should not call onChange if already checked", () => {
      const component = shallow(<Radio onChange={onChangeSpy} checked />);
      const { handleClick } = component.instance();
      handleClick();

      expect(onChangeSpy).toHaveBeenCalledTimes(0);
    });
  });
  describe("receiving new props", () => {
    let setStateSpy;

    beforeEach(() => {
      setStateSpy = jest.fn();
    });
    test("should change checked state if prop changes", () => {
      const component = shallow(<Radio />);
      expect(component.state().checked).toBe(false);

      component.setProps({ checked: true });
      expect(component.state().checked).toBe(true);
    });
    test("should not update state unnecessarily", () => {
      const component = shallow(<Radio checked />);
      component.instance().setState = setStateSpy;
      component.setProps({ checked: true });
      component.setProps({ unrelatedProp: false });
      expect(setStateSpy).toHaveBeenCalledTimes(0);
    });
  });
});
