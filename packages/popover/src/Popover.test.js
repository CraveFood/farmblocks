import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Popover from "./Popover";

Enzyme.configure({ adapter: new Adapter() });

describe("Popover", () => {
  test("should change visible state after click on trigger", async () => {
    const wrapper = shallow(
      <Popover
        trigger={<span>trigger</span>}
        content={() => <span>content</span>}
      />,
    );

    // initial state
    expect(wrapper.state()).toEqual({ isVisible: false });

    // click on trigger should change the state
    await wrapper.find("#trigger").simulate("click");

    expect(wrapper.state()).toEqual({ isVisible: true });
  });

  test("should hide popover on dismiss content", async () => {
    const wrapper = shallow(
      <Popover
        trigger={<span>trigger</span>}
        content={dismiss => (
          <button id="dismiss" onClick={dismiss}>
            content
          </button>
        )}
      />,
    );

    // open dropdown
    await wrapper.find("#trigger").simulate("click");
    expect(wrapper.state()).toEqual({ isVisible: true });

    // click on dismiss button should close dropdown
    await wrapper.find("#dismiss").simulate("click");
    expect(wrapper.state()).toEqual({ isVisible: false });
  });

  describe("handleOuterClick", () => {
    let wrapper,
      popoverInstance,
      map,
      onOutsideClickSpy,
      addEventListenerMock,
      removeEventListenerMock;

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
              {...this.props}
            />
          </div>
        );
      }
    }

    beforeEach(async () => {
      map = {};

      addEventListenerMock = jest
        .spyOn(document, "addEventListener")
        .mockImplementation((event, cb) => {
          map[event] = cb;
        });
      removeEventListenerMock = jest
        .spyOn(document, "removeEventListener")
        .mockImplementation(() => undefined);

      onOutsideClickSpy = jest.fn();

      wrapper = mount(<PopoverComponent />);

      // open popover
      popoverInstance = wrapper.find(Popover).instance();
      await wrapper.find("#trigger").simulate("click");
    });

    afterEach(() => {
      wrapper.unmount();

      addEventListenerMock.mockRestore();
      removeEventListenerMock.mockRestore();
      onOutsideClickSpy.mockReset();
    });

    test("should dismiss popover on outer click", () => {
      // makes sure that popover is open
      expect(popoverInstance.state).toEqual({ isVisible: true });

      // simulates click outside
      map.click({
        target: wrapper.instance().outer,
      });
      expect(popoverInstance.state).toEqual({ isVisible: false });
    });

    test("should dismiss popover on outer click and call callback function", async () => {
      wrapper = mount(<PopoverComponent onOutsideClick={onOutsideClickSpy} />);

      // open popover
      popoverInstance = wrapper.find(Popover).instance();
      await wrapper.find("#trigger").simulate("click");

      // makes sure that popover is open
      expect(popoverInstance.state).toEqual({ isVisible: true });

      // simulates click outside
      const event = {
        target: wrapper.instance().outer,
      };
      map.click(event);
      expect(popoverInstance.state).toEqual({ isVisible: false });
      expect(onOutsideClickSpy).toBeCalledWith(event);
    });

    test("should NOT call callback function when the popover is closed", () => {
      wrapper = mount(<PopoverComponent onOutsideClick={onOutsideClickSpy} />);

      // return to closed state
      popoverInstance.setState({ isVisible: false });

      // simulates click outside
      const event = {
        target: wrapper.instance().outer,
      };
      map.click(event);
      expect(onOutsideClickSpy).not.toBeCalled();
    });

    test("should do nothing on inner click", () => {
      // makes sure that popover is open
      expect(popoverInstance.state).toEqual({ isVisible: true });

      // simulates click inside
      map.click({
        target: wrapper.instance().inner,
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
        />,
      );

      const { handleOuterClick } = wrapper.instance();

      expect(addEventListenerMock).toBeCalledWith("click", handleOuterClick, {
        capture: true,
      });
    });

    it("should remove eventListener on component will unmount", () => {
      const wrapper = shallow(
        <Popover
          trigger={<div>trigger</div>}
          content={() => <div>content</div>}
        />,
      );

      const { handleOuterClick } = wrapper.instance();

      wrapper.unmount();

      expect(removeEventListenerMock).toBeCalledWith(
        "click",
        handleOuterClick,
        { capture: true },
      );
    });
  });

  describe("onOpen", () => {
    let onOpenSpy;

    beforeEach(() => {
      onOpenSpy = jest.fn();
    });
    afterEach(() => {
      onOpenSpy.mockReset();
    });

    it("should run on trigger click from closed state", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <div>content</div>}
          onOpen={onOpenSpy}
        />,
      );

      await wrapper.find("#trigger").simulate("click");
      expect(onOpenSpy).toHaveBeenCalledTimes(1);
    });

    it("should NOT run on trigger click from open state", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <div>content</div>}
          onOpen={onOpenSpy}
        />,
      );

      wrapper.setState({ isVisible: true });
      await wrapper.find("#trigger").simulate("click");
      expect(onOpenSpy).not.toHaveBeenCalled();
    });

    it("should be optional", () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <div>content</div>}
        />,
      );

      expect(async () => {
        await wrapper.find("#trigger").simulate("click");
      }).not.toThrowError();
    });
  });

  describe("onClose", () => {
    let onCloseSpy;

    beforeEach(() => {
      onCloseSpy = jest.fn();
    });
    afterEach(() => {
      onCloseSpy.mockReset();
    });

    it("should run on trigger click from open state", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <div>content</div>}
          onClose={onCloseSpy}
        />,
      );

      wrapper.setState({ isVisible: true });
      await wrapper.find("#trigger").simulate("click");
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it("should NOT run on trigger click from closed state", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <div>content</div>}
          onClose={onCloseSpy}
        />,
      );

      await wrapper.find("#trigger").simulate("click");
      expect(onCloseSpy).not.toHaveBeenCalled();
    });

    it("should be optional", () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <div>content</div>}
        />,
      );

      wrapper.setState({ isVisible: true });
      expect(async () => {
        await wrapper.find("#trigger").simulate("click");
      }).not.toThrowError();
    });
  });

  describe("trigger", () => {
    const trigger = <span>trigger</span>;
    const content = () => <div>content</div>;
    let renderTriggerSpy;

    beforeEach(() => {
      renderTriggerSpy = jest.fn().mockReturnValue(trigger);
    });

    afterEach(() => {
      renderTriggerSpy.mockReset();
    });

    it("should render the given node", () => {
      const wrapper = shallow(<Popover trigger={trigger} content={content} />);
      expect(wrapper.containsMatchingElement(trigger)).toEqual(true);
    });

    it("should pass isVisible to the given function", () => {
      const wrapper = shallow(
        <Popover trigger={renderTriggerSpy} content={content} />,
      );

      renderTriggerSpy.mockClear();
      wrapper.setState({ isVisible: true });
      expect(renderTriggerSpy).toHaveBeenCalledWith(true);

      renderTriggerSpy.mockClear();
      wrapper.setState({ isVisible: false });
      expect(renderTriggerSpy).toHaveBeenCalledWith(false);
    });

    it("should render the returned value", () => {
      const expectedResult = () => <div>Expected Result</div>;
      const wrapper = shallow(
        <Popover trigger={() => expectedResult} content={content} />,
      );
      expect(wrapper.containsMatchingElement(expectedResult)).toEqual(true);
    });

    it("should NOT propagate the click event to the parent", () => {
      const parentClickSpy = jest.fn();

      const wrapper = mount(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={parentClickSpy} data-testid="parent">
          <Popover
            trigger={<span id="trigger">trigger</span>}
            content={content}
          />
          <div id="sibling" />
        </div>,
      );

      wrapper.find("span#trigger").simulate("click");
      expect(parentClickSpy).not.toHaveBeenCalled();
      wrapper.find("#sibling").simulate("click");
      expect(parentClickSpy).toHaveBeenCalled();
    });
  });

  describe("onBeforeOpen", () => {
    let onOpenSpy;
    beforeEach(() => {
      onOpenSpy = jest.fn();
    });
    afterEach(() => {
      onOpenSpy.mockReset();
    });

    it("should open popover if Promise resolves", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <span>content</span>}
          onOpen={onOpenSpy}
          onBeforeOpen={() => Promise.resolve()}
        />,
      );

      await wrapper.find("#trigger").simulate("click");
      expect(onOpenSpy).toBeCalledTimes(1);
    });

    it("should NOT open popover if Promise rejects", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <span>content</span>}
          onOpen={onOpenSpy}
          onBeforeOpen={() => Promise.reject()}
        />,
      );

      await wrapper.find("#trigger").simulate("click");
      expect(onOpenSpy).not.toBeCalled();
    });

    it("should wait for Promise to resolve before opening popover", async () => {
      let resolvePromise;

      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <span>content</span>}
          onOpen={onOpenSpy}
          onBeforeOpen={() =>
            new Promise(resolve => (resolvePromise = resolve))
          }
        />,
      );

      await wrapper.find("#trigger").simulate("click");
      expect(onOpenSpy).toBeCalledTimes(0);

      await resolvePromise();
      expect(onOpenSpy).toBeCalledTimes(1);
    });

    it("should open popover immediately if given function don't return a Promise", async () => {
      const wrapper = shallow(
        <Popover
          trigger={<span>trigger</span>}
          content={() => <span>content</span>}
          onOpen={onOpenSpy}
          onBeforeOpen={() => "whatever"}
        />,
      );

      await wrapper.find("#trigger").simulate("click");
      expect(onOpenSpy).toBeCalledTimes(1);
    });
  });
});
