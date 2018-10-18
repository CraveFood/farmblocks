import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import withTooltip from "./withTooltip";

configure({ adapter: new Adapter() });

const InputWithTooltip = withTooltip("input");

describe("withTooltip", () => {
  it("should open tooltip on mouse over", () => {
    const wrapper = mount(<InputWithTooltip />);

    wrapper.find(".hitArea").simulate("mouseover");

    expect(wrapper.state()).toEqual({ tooltipVisible: true });
  });

  it("should close tooltip on mouse leave", () => {
    const wrapper = mount(<InputWithTooltip />);
    const div = wrapper.find("div").first();

    div.simulate("mouseover");
    expect(wrapper.state()).toEqual({ tooltipVisible: true });

    div.simulate("mouseleave");
    expect(wrapper.state()).toEqual({ tooltipVisible: false });
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
