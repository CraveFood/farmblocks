import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import Radio, { RadioGroup } from ".";

describe("RadioGroup", function() {
  configure({ adapter: new Adapter() });

  describe("handleChange", () => {
    let onChangeSpy, setStateSpy;
    beforeEach(() => {
      onChangeSpy = jest.fn();
      setStateSpy = jest.fn();
    });
    test("should run onChange when children changes", function() {
      const value = "a value";
      const component = mount(
        <RadioGroup name="radioExample" onChange={onChangeSpy}>
          <Radio value="first" label="First" />
          <Radio value="second" label="Second" />
        </RadioGroup>,
      );
      const childOnChange = component
        .find(Radio)
        .first()
        .props().onChange;
      childOnChange(value);

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(value);
    });
    test("should change value state when defaultValue prop changes", () => {
      const component = mount(
        <RadioGroup name="radioExample" defaultValue="oldValue">
          <Radio value="first" label="First" />
        </RadioGroup>,
      );
      const newValue = "newValue";
      component.setProps({ defaultValue: newValue });
      expect(component.state("value")).toBe(newValue);
    });
    test("should not change the state unnecessarily", () => {
      const defaultValue = "default";
      const component = mount(
        <RadioGroup name="radioExample" defaultValue={defaultValue}>
          <Radio value="first" label="First" />
        </RadioGroup>,
      );
      component.instance().setState = setStateSpy;

      component.setProps({ unrelatedProp: true });
      component.setProps({ defaultValue });
      expect(setStateSpy).toHaveBeenCalledTimes(0);
    });
    test("changes in defaultValue should not dispatch onChange", () => {
      const component = mount(
        <RadioGroup
          name="radioExample"
          defaultValue="oldValue"
          onChange={onChangeSpy}
        >
          <Radio value="first" label="First" />
        </RadioGroup>,
      );
      const newValue = "newValue";
      component.setProps({ defaultValue: newValue });
      expect(onChangeSpy).toHaveBeenCalledTimes(0);
    });
  });
});
