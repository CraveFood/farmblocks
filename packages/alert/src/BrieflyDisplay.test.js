import React from "react";
import renderer from "react-test-renderer";

import BrieflyDisplay from "./BrieflyDisplay";

describe("BrieflyDisplay", () => {
  jest.useFakeTimers();
  afterEach(() => {
    clearTimeout.mockClear();
  });
  test("component should remove itself after timeout", () => {
    const component = renderer.create(
      <BrieflyDisplay time={10000}>
        <p>foo</p>
      </BrieflyDisplay>,
    );
    const state = component.getInstance().state;
    const json = component.toJSON();
    expect(state.isVisible).toBe(true);
    expect(json.type).toBe("p");

    jest.runAllTimers();

    const finalState = component.getInstance().state;
    const finalJson = component.toJSON();
    expect(finalState.isVisible).toBe(false);
    expect(finalJson).toBeNull();
  });

  test("hide timer should be canceled if the component unmounts", () => {
    const alert = renderer.create(
      <BrieflyDisplay time={3000}>
        <p>foo</p>
      </BrieflyDisplay>,
    );
    expect(clearTimeout.mock.calls.length).toBe(0);
    alert.unmount();
    expect(clearTimeout.mock.calls.length).toBe(1);
  });
});
