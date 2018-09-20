import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Popover from "./Popover";

Enzyme.configure({ adapter: new Adapter() });

describe("Popover", () => {
  test("should change visible state after click on trigger", () => {
    const wrapper = shallow(
      <Popover
        trigger={<span>trigger</span>}
        content={() => <span>content</span>}
      />
    );

    // initial state
    expect(wrapper.state()).toEqual({ isVisible: false });

    // click on trigger should change the state
    wrapper.find("#trigger").simulate("click");

    expect(wrapper.state()).toEqual({ isVisible: true });
  });

  test("should hide popover on dismiss content", () => {
    const wrapper = shallow(
      <Popover
        trigger={<span>trigger</span>}
        content={dismiss => (
          <button id="dismiss" onClick={dismiss}>
            content
          </button>
        )}
      />
    );

    // open dropdown
    wrapper.find("#trigger").simulate("click");
    expect(wrapper.state()).toEqual({ isVisible: true });

    // click on dismiss button should close dropdown
    wrapper.find("#dismiss").simulate("click");
    expect(wrapper.state()).toEqual({ isVisible: false });
  });

  describe("handleOuterClick", () => {
    const originalEventListener = document.addEventListener;

    let wrapper, popoverInstance, map;

    class PopoverComponent extends React.Component {
      render() {
        return (
          <div>
            <span ref={node => (this.outer = node)} />
            <Popover
              trigger={<span>trigger</span>}
              content={() => (
                <span ref={node => (this.inner = node)}>content</span>
              )}
            />
          </div>
        );
      }
    }

    beforeEach(() => {
      map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      wrapper = mount(<PopoverComponent />);

      // open popover
      popoverInstance = wrapper.find(Popover).instance();
      wrapper.find("#trigger").simulate("click");
    });

    afterEach(() => {
      document.addEventListener = originalEventListener;
    });

    test("should dismiss popover on outer click", () => {
      // makes sure that popover is open
      expect(popoverInstance.state).toEqual({ isVisible: true });

      // simulates click outside
      map.click({
        target: wrapper.instance().outer
      });
      expect(popoverInstance.state).toEqual({ isVisible: false });
    });

    test("should do nothing on inner click", () => {
      // makes sure that popover is open
      expect(popoverInstance.state).toEqual({ isVisible: true });

      // simulates click inside
      map.click({
        target: wrapper.instance().inner
      });
      expect(popoverInstance.state).toEqual({ isVisible: true });
    });
  });

  describe("add/remove event listener", () => {
    let addEventListenerMock, removeEventListenerMock;
    beforeEach(() => {
      addEventListenerMock = jest.spyOn(document, "addEventListener");
      removeEventListenerMock = jest.spyOn(document, "removeEventListener");
    });
    afterEach(() => {
      addEventListenerMock.mockRestore();
      removeEventListenerMock.mockRestore();
    });

    it("should add eventListener on component did mount", () => {
      const wrapper = shallow(
        <Popover
          trigger={<div>trigger</div>}
          content={() => <div>content</div>}
        />
      );

      const { handleOuterClick } = wrapper.instance();

      expect(addEventListenerMock).toBeCalledWith("click", handleOuterClick, {
        capture: true
      });
    });

    it("should remove eventListener on component will unmount", () => {
      const wrapper = shallow(
        <Popover
          trigger={<div>trigger</div>}
          content={() => <div>content</div>}
        />
      );

      const { handleOuterClick } = wrapper.instance();

      wrapper.unmount();

      expect(removeEventListenerMock).toBeCalledWith(
        "click",
        handleOuterClick,
        { capture: true }
      );
    });
  });
});
