import React from "react";
import renderer from "react-test-renderer";

import Carousel from ".";

describe("Carousel", () => {
  jest.useFakeTimers();

  afterEach(() => {
    clearTimeout.mockClear();
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

  test("timer should be cleared on unmount", () => {
    const imageSet = [
      { image: "http://example.com/1.png", name: "1" },
      { image: "http://example.com/2.png", name: "2" },
      { image: "http://example.com/3.png", name: "3" }
    ];
    const component = renderer.create(<Carousel imageSet={imageSet} />);
    const spy = jest.spyOn(window, "clearInterval");
    expect(component.getInstance().transitionId).toBeDefined();
    component.unmount();
    expect(spy).toHaveBeenCalled();
  });
});
