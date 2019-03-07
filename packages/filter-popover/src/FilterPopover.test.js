import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilterPopover from "./FilterPopover";

Enzyme.configure({ adapter: new Adapter() });

describe("Filter Popover", () => {
  let onFormSaveClickMock, onFormCancelClickMock, dismissMock, wrapper;

  beforeEach(() => {
    onFormSaveClickMock = jest.fn();
    onFormCancelClickMock = jest.fn();
    dismissMock = jest.fn();
  });

  afterEach(() => {
    onFormSaveClickMock.mockRestore();
    onFormCancelClickMock.mockRestore();
    dismissMock.mockRestore();
  });

  test("should call onFormSaveClick and leave popover open when clicking on Filter button", async () => {
    wrapper = mount(
      <FilterPopover
        triggerLabel="Filter"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        formContent={<div />}
      />,
    );

    // Open popover
    await wrapper.find("button").simulate("click");
    wrapper.update();

    const filterButton = wrapper.find('Button[type="SECONDARY"]');
    await filterButton.find("button").simulate("click");

    expect(onFormSaveClickMock).toBeCalled();
    expect(wrapper.find("FormWrapper").length).toBe(1);
  });

  test("should call onFormSaveClick and dismiss popover open when clicking on Filter button", async () => {
    wrapper = mount(
      <FilterPopover
        triggerLabel="Filter"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        formContent={<div />}
        dismissOnSave
      />,
    );

    // Open popover
    await wrapper.find("button").simulate("click");
    wrapper.update();

    const filterButton = wrapper.find('Button[type="SECONDARY"]');
    await filterButton.find("button").simulate("click");

    expect(onFormSaveClickMock).toBeCalled();
    expect(wrapper.find("FormWrapper").length).toBe(0);
  });

  test("should call onFormCancelClick and dismiss popover open when clicking on cancel button", async () => {
    wrapper = mount(
      <FilterPopover
        triggerLabel="Filter"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        onFormCancelClick={onFormCancelClickMock}
        formContent={<div />}
        dismissOnSave
      />,
    );

    // Open popover
    await wrapper.find("button").simulate("click");
    wrapper.update();

    const cancelLink = wrapper.find('Link[className="cancel"]');

    await cancelLink.find("span").simulate("click");

    expect(onFormCancelClickMock).toBeCalled();
    expect(wrapper.find("FormWrapper").length).toBe(0);
  });
});
