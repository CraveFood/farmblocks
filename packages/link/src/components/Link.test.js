import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Link from "./Link";

Enzyme.configure({ adapter: new Adapter() });
describe("Link", function() {
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
  describe("onClick", function() {
    test("should call onClick when clicking on the link", function() {
      const onClickMock = jest.fn();
      const stopPropagationMock = jest.fn();
      const wrapper = shallow(<Link onClick={onClickMock}>Link!</Link>);

      const linkWrap = wrapper.find("a");

      linkWrap.simulate("click", { stopPropagation: stopPropagationMock });

      expect(onClickMock).toBeCalled();
      expect(stopPropagationMock).toBeCalled();
    });
  });
});
