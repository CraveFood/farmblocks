import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import disabledTooltip from ".";

describe("disabledTooltip HOC", function() {
  configure({ adapter: new Adapter() });
  test("default onMouseOver function returns null", function() {
    const EnhancedInput = disabledTooltip("input");
    const component = renderer.create(<EnhancedInput />);
    const tree = component.toTree();
    expect(tree.props.onMouseOver()).toBeNull();
  });

  test("default onMouseLeave function returns null", function() {
    const EnhancedInput = disabledTooltip("input");
    const component = renderer.create(<EnhancedInput />);
    const tree = component.toTree();
    expect(tree.props.onMouseLeave()).toBeNull();
  });

  test("onMouseOver property is called on mouse over", function() {
    const onMouseOverMock = jest.fn();
    const EnhancedInput = disabledTooltip("input");
    const component = mount(
      <EnhancedInput disabled onMouseOver={onMouseOverMock} />
    );
    const hitArea = component.find(".hit");
    hitArea.simulate("mouseover", {});
    expect(onMouseOverMock).toBeCalled();
  });

  test("onMouseLeave property is called on mouse leave", function() {
    const onMouseLeaveMock = jest.fn();
    const EnhancedInput = disabledTooltip("input");
    const component = mount(
      <EnhancedInput disabled onMouseLeave={onMouseLeaveMock} />
    );
    const hitArea = component.find(".hit");
    hitArea.simulate("mouseleave", {});
    expect(onMouseLeaveMock).toBeCalled();
  });

  test("mouse events are passed to the wrapped component when not disabled", function() {
    const onClickMock = jest.fn();
    const onMouseOverMock = jest.fn();
    const onMouseLeaveMock = jest.fn();
    const EnhancedInput = disabledTooltip("button");
    const component = mount(
      <EnhancedInput
        onClick={onClickMock}
        onMouseOver={onMouseOverMock}
        onMouseLeave={onMouseLeaveMock}
      />
    );
    const wrappedComponent = component.find("button");
    wrappedComponent.simulate("click", {});
    wrappedComponent.simulate("mouseover", {});
    wrappedComponent.simulate("mouseleave", {});
    expect(onMouseLeaveMock).toBeCalled();
    expect(onMouseOverMock).toBeCalled();
    expect(onClickMock).toBeCalled();
  });

  test("mouseover and mouseleave events should change showTooltip state on disabled fields", function() {
    const EnhancedInput = disabledTooltip("input");
    let component = mount(<EnhancedInput disabled />);
    const hitArea = component.find(".hit");
    const defaultState = component.state();

    hitArea.simulate("mouseover", {});
    const mouseOverState = component.state();

    hitArea.simulate("mouseleave", {});
    const mouseLeaveState = component.state();

    expect(defaultState.showTooltip).toBe(false);
    expect(mouseOverState.showTooltip).toBe(true);
    expect(mouseLeaveState.showTooltip).toBe(false);
  });
});
