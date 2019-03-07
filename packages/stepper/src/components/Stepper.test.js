import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Stepper from "./Stepper";

describe("Stepper", function() {
  Enzyme.configure({ adapter: new Adapter() });

  test("should not dispatch click on a completed step", function() {
    const steps = ["Completed step"];
    const completedSteps = 1;

    const onClickMock = jest.fn();

    const wrapper = shallow(
      <Stepper
        steps={steps}
        completedSteps={completedSteps}
        onClick={onClickMock}
      />,
    );

    wrapper.find("Step").simulate("click");

    expect(onClickMock).not.toBeCalled();
  });

  test("should not dispatch click on a pending step", function() {
    const steps = ["Current step", "Pending step"];
    const completedSteps = 0;

    const onClickMock = jest.fn();

    const wrapper = shallow(
      <Stepper
        steps={steps}
        completedSteps={completedSteps}
        onClick={onClickMock}
      />,
    );

    const pendingStep = wrapper.find("Step").last();
    pendingStep.simulate("click");

    expect(onClickMock).not.toBeCalled();
  });

  test("should dispatch click on a current step", function() {
    const index = 0;
    const steps = ["Current step"];
    const completedSteps = 0;

    const onClickMock = jest.fn();

    const wrapper = shallow(
      <Stepper
        steps={steps}
        completedSteps={completedSteps}
        onClick={onClickMock}
      />,
    );

    wrapper.find("Step").simulate("click");

    expect(onClickMock).toBeCalledWith({ index, value: steps[0] });
  });
});
