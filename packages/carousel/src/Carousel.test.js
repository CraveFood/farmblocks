import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Carousel from ".";

describe("Carousel", () => {
  Enzyme.configure({ adapter: new Adapter() });
  jest.useFakeTimers();

  let clearIntervalSpy;
  let setIntervalSpy;

  beforeEach(() => {
    clearIntervalSpy = jest.spyOn(window, "clearInterval");
    setIntervalSpy = jest.spyOn(window, "setInterval");
  });

  afterEach(() => {
    clearTimeout.mockClear();
    clearIntervalSpy.mockClear();
    setIntervalSpy.mockClear();
  });

  test("active photo should change after displayTime", () => {
    const imageSet = [
      { image: "http://example.com/1.png", name: "1" },
      { image: "http://example.com/2.png", name: "2" },
      { image: "http://example.com/3.png", name: "3" }
    ];
    const component = renderer.create(<Carousel imageSet={imageSet} />);
    const state = component.getInstance().state;
    expect(state.activeItem).toBe(0);

    jest.runOnlyPendingTimers();

    const finalState = component.getInstance().state;
    expect(finalState.activeItem).toBe(1);
  });

  test("onEnd event handler should be called after the last photo", () => {
    const imageSet = [
      { image: "http://example.com/1.png", name: "1" },
      { image: "http://example.com/2.png", name: "2" },
      { image: "http://example.com/3.png", name: "3" }
    ];
    const onEndMock = jest.fn();
    renderer.create(<Carousel imageSet={imageSet} onEnd={onEndMock} />);
    jest.runAllTimers();

    expect(onEndMock).toBeCalled();
  });

  test("setInterval should be called on mount and not called if there's a transitionId", () => {
    const imageSet = [{ image: "http://example.com/1.png", name: "1" }];
    const component = renderer.create(<Carousel imageSet={imageSet} />);

    const cb = component.getInstance().nextItem;

    expect(setIntervalSpy).toHaveBeenCalledWith(cb, 4000);
    expect(setIntervalSpy).toHaveBeenCalledTimes(1);

    // set interval should not be called again
    component.getInstance().setInterval();
    expect(setIntervalSpy).toHaveBeenCalledTimes(1);
  });

  test("clearInterval should be called on unmount", () => {
    const imageSet = [
      { image: "http://example.com/1.png", name: "1" },
      { image: "http://example.com/2.png", name: "2" },
      { image: "http://example.com/3.png", name: "3" }
    ];
    const component = renderer.create(<Carousel imageSet={imageSet} />);

    const transitionId = component.getInstance().transitionId;

    expect(transitionId).toBeDefined();
    component.unmount();
    expect(clearIntervalSpy).toHaveBeenCalledWith(transitionId);
  });

  test("clearInterval should not be called if there is no transitionId on unmount", () => {
    const imageSet = [{ image: "http://example.com/1.png", name: "1" }];
    const component = renderer.create(<Carousel imageSet={imageSet} />);

    delete component.getInstance().transitionId;

    component.unmount();
    expect(clearIntervalSpy).not.toHaveBeenCalled();
  });

  describe("Receiving new props", () => {
    const imageSet = [{ image: "http://example.com/1.png", name: "1" }];
    let component, setStateSpy, setIntervalSpy;

    beforeEach(() => {
      component = mount(<Carousel imageSet={imageSet} />);
      setStateSpy = jest.spyOn(component.instance(), "setState");
      setIntervalSpy = jest.spyOn(component.instance(), "setInterval");
    });

    afterEach(() => {
      setStateSpy.mockClear();
      setIntervalSpy.mockClear();
    });

    test("activeItem should be set to 0 when imageSet changes", () => {
      component.setProps({ imageSet: [] });

      expect(setStateSpy).toHaveBeenCalledWith({ activeItem: 0 });
      expect(setIntervalSpy).toHaveBeenCalledTimes(1);
    });

    test("state should not change when imageSet doesn't change", () => {
      component.setProps({ imageSet });

      expect(setStateSpy).not.toHaveBeenCalled();
      expect(setIntervalSpy).not.toHaveBeenCalled();
    });
  });
});
