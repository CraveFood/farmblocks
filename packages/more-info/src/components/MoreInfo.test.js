import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MoreInfo from "./MoreInfo";

Enzyme.configure({ adapter: new Adapter() });

describe("More info", () => {
  test("mouse over icon div should set tooltipVisible to true", () => {
    const wrapper = shallow(<MoreInfo>Test</MoreInfo>);

    const iconDiv = wrapper.find("div.icon");

    expect(wrapper.state("tooltipVisible")).toBe(false);

    iconDiv.simulate("mouseover", {});

    expect(wrapper.state("tooltipVisible")).toBe(true);
  });

  test("hideTooltip() should set tooltipVisible to false", () => {
    const wrapper = shallow(<MoreInfo>Test</MoreInfo>);

    wrapper.setState({ tooltipVisible: true });

    expect(wrapper.state("tooltipVisible")).toBe(true);

    const hitArea = wrapper.find("div.hit-area");

    hitArea.simulate("mouseout", {});

    expect(wrapper.state("tooltipVisible")).toBe(false);
  });
});
