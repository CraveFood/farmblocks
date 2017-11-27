import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Link from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Tooltip", function() {
  test("should show and hide the tooltip when mouse enters and leave the disabled link", function() {
    const wrapper = shallow(
      <Link href="#" disabled>
        Link
      </Link>
    );

    const hitBoxWrap = wrapper.children().at(0);
    hitBoxWrap.simulate("mouseOver");

    expect(wrapper.state("showTooltip")).toBeTruthy();
    hitBoxWrap.simulate("mouseLeave");
    expect(wrapper.state("showTooltip")).toBeFalsy();
  });
  test("should not show tooltip when link is not disabled", function() {
    const wrapper = shallow(<Link href="#">Link</Link>);

    const instance = wrapper.instance();
    const setStateMock = jest.fn();
    instance.setState = setStateMock;

    instance.mouseOver();
    instance.mouseLeaves();

    expect(setStateMock.mock.calls).toHaveLength(0);
  });
});
