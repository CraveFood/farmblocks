import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import statusTypes from "../constants/statusTypes";

import Step from "./Step";

describe("Step", function() {
  Enzyme.configure({ adapter: new Adapter() });
  test("should not dispatch click on a completed step", function() {
    const index = 0;
    const value = "Completed step";
    const status = statusTypes.COMPLETED;

    const onClickMock = jest.fn();
    const eventMock = {
      stopPropagation: jest.fn()
    };

    const wrapper = shallow(
      <Step index={index} value={value} status={status} onClick={onClickMock} />
    );

    wrapper.instance().onClick(eventMock);

    expect(eventMock.stopPropagation).toBeCalled();
    expect(onClickMock).not.toBeCalled();
  });

  test("should not dispatch click on a pending step", function() {
    const index = 0;
    const value = "Pending step";
    const status = statusTypes.PENDING;

    const onClickMock = jest.fn();
    const eventMock = {
      stopPropagation: jest.fn()
    };

    const wrapper = shallow(
      <Step index={index} value={value} status={status} onClick={onClickMock} />
    );

    wrapper.instance().onClick(eventMock);

    expect(eventMock.stopPropagation).toBeCalled();
    expect(onClickMock).not.toBeCalled();
  });

  test("should dispatch click on a current step", function() {
    const index = 0;
    const value = "Current step";
    const status = statusTypes.CURRENT;

    const onClickMock = jest.fn();
    const eventMock = {
      stopPropagation: jest.fn()
    };

    const wrapper = shallow(
      <Step index={index} value={value} status={status} onClick={onClickMock} />
    );

    wrapper.instance().onClick(eventMock);

    expect(eventMock.stopPropagation).toBeCalled();
    expect(onClickMock).toBeCalledWith({ index, value });
  });
});
