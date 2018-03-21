import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import Radio, { RadioGroup } from ".";

describe("RadioGroup", function() {
  configure({ adapter: new Adapter() });

  describe("handleChange", () => {
    let onChangeSpy;
    beforeEach(() => {
      onChangeSpy = jest.fn();
    });
    test("should run onChange when children changes", function() {
      const value = "a value";
      const component = mount(
        <RadioGroup name="radioExample" onChange={onChangeSpy}>
          <Radio value="first" label="First" />
          <Radio value="second" label="Second" />
        </RadioGroup>
      );
      const childOnChange = component
        .find(Radio)
        .first()
        .props().onChange;
      childOnChange(value);

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(value);
    });
  });
});
