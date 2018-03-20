import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import Radio from ".";

describe("Radio", function() {
  configure({ adapter: new Adapter() });

  describe("handleClick", () => {
    let onClickSpy, event, onChangeSpy;
    beforeEach(() => {
      onClickSpy = jest.fn();
      event = {
        preventDefault: jest.fn()
      };
      onChangeSpy = jest.fn();
    });
    afterEach(() => {
      onClickSpy.mockReset();
      event.preventDefault.mockReset();
      onChangeSpy.mockReset();
    });
    test("should prevent default event behavior", function() {
      const component = shallow(<Radio onClick={onClickSpy} />);
      const { handleClick } = component.instance();
      handleClick(event);

      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
    test("should repass event to given onClick prop", function() {
      const component = shallow(<Radio onClick={onClickSpy} />);
      const { handleClick } = component.instance();
      handleClick(event);

      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith(event);
    });
    test("should not call onClick if prop disabled is given", function() {
      const component = shallow(<Radio onClick={onClickSpy} disabled />);
      const { handleClick } = component.instance();
      handleClick(event);

      expect(onClickSpy).not.toHaveBeenCalled();
    });
    test("should call onChange with given value", function() {
      const value = "a value";
      const component = shallow(<Radio onChange={onChangeSpy} value={value} />);
      const { handleClick } = component.instance();
      handleClick(event);

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(value);
    });
    test("should not call onChange if already checked", function() {
      const component = shallow(<Radio onChange={onChangeSpy} checked />);
      const { handleClick } = component.instance();
      handleClick(event);

      expect(onChangeSpy).toHaveBeenCalledTimes(0);
    });
  });
});
