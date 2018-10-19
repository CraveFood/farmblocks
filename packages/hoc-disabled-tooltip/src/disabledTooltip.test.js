import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import disabledTooltip from ".";

describe("disabledTooltip HOC", function() {
  configure({ adapter: new Adapter() });

  test("mouse events are passed to the wrapped component when not disabled", function() {
    const onClickMock = jest.fn();

    const EnhancedInput = disabledTooltip("input");
    const component = mount(<EnhancedInput onClick={onClickMock} />);
    const wrappedComponent = component.find("input");

    wrappedComponent.simulate("click", {});

    expect(onClickMock).toBeCalled();
  });
});
