import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import TextInput from "./TextInput";

describe("TextInput > mask", () => {
  configure({ adapter: new Adapter() });

  test("a react-input-mask component should be used as the base input when prop mask is present", () => {
    const mask = "999-999-9999";
    const typedValue = "1234567890";
    const expectedValue = "123-456-7890";
    const component = mount(<TextInput mask={mask} />);
    component
      .find("input")
      .simulate("change", { target: { value: typedValue } });
    expect(component.find("input").prop("value")).toBe(expectedValue);
  });
});
