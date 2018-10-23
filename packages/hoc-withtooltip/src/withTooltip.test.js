import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import withTooltip from "./withTooltip";

configure({ adapter: new Adapter() });

const InputWithTooltip = withTooltip("input");

describe("withTooltip", () => {
  let onMouseOverMock, onMouseLeaveMock;

  beforeEach(() => {
    onMouseOverMock = jest.fn();
    onMouseLeaveMock = jest.fn();
  });

  afterEach(() => {
    onMouseOverMock.mockRestore();
    onMouseLeaveMock.mockRestore();
  });

  it("should open tooltip on mouse over and call on mouse over function", () => {
    const wrapper = mount(<InputWithTooltip onMouseOver={onMouseOverMock} />);

    wrapper.find(".hitArea").simulate("mouseover");

    expect(wrapper.state()).toEqual({ tooltipVisible: true });
    expect(onMouseOverMock).toHaveBeenCalledTimes(1);
  });

  it("should close tooltip on mouse leave and call on mouse leave function", () => {
    const wrapper = mount(<InputWithTooltip onMouseLeave={onMouseLeaveMock} />);
    const div = wrapper.find(".hitArea");

    div.simulate("mouseover");
    expect(wrapper.state()).toEqual({ tooltipVisible: true });

    div.simulate("mouseleave");
    expect(wrapper.state()).toEqual({ tooltipVisible: false });
    expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
  });

  it("should deactivate tooltip display and mouse events if disableTooltip is true", () => {
    const wrapper = mount(
      <InputWithTooltip
        disableTooltip
        onMouseOver={onMouseOverMock}
        onMouseLeave={onMouseLeaveMock}
      />
    );

    expect(wrapper.find(".hitArea").length).toBe(0);

    wrapper.simulate("mouseover");
    expect(onMouseOverMock).toHaveBeenCalledTimes(0);

    wrapper.simulate("mouseleave");
    expect(onMouseLeaveMock).toHaveBeenCalledTimes(0);
  });
});
