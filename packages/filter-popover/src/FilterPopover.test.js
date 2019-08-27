import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  wait,
} from "@testing-library/react";

import FilterPopover from "./FilterPopover";

describe("Filter Popover", () => {
  let onFormSaveClickMock, onFormCancelClickMock;

  beforeEach(() => {
    onFormSaveClickMock = jest.fn();
    onFormCancelClickMock = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should call onFormSaveClick and leave popover open when clicking on Filter button", async () => {
    const { queryByText } = render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        formContent={<div>Form content</div>}
      />,
    );

    expect(queryByText("Form content")).not.toBeInTheDocument();

    // open popover
    fireEvent.click(queryByText("Trigger"));
    await wait(() => {});

    // click on Filter button
    fireEvent.click(queryByText("Filter"));
    await wait(() => {});

    expect(onFormSaveClickMock).toBeCalled();
    expect(queryByText("Form content")).toBeInTheDocument();
  });

  test("should call onFormSaveClick and dismiss popover open when clicking on Filter button", async () => {
    const { queryByText } = render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        formContent={<div>Form content</div>}
        dismissOnSave
      />,
    );

    expect(queryByText("Form content")).not.toBeInTheDocument();

    // open popover
    fireEvent.click(queryByText("Trigger"));
    await wait(() => {});

    // click on Filter button
    fireEvent.click(queryByText("Filter"));

    await waitForElementToBeRemoved(() => queryByText("Form content"));

    expect(onFormSaveClickMock).toBeCalled();
    expect(queryByText("Form content")).not.toBeInTheDocument();
  });

  test("should call onFormCancelClick and dismiss popover open when clicking on cancel button", async () => {
    const { queryByText } = render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        onFormCancelClick={onFormCancelClickMock}
        formContent={<div>Form content</div>}
        dismissOnSave
      />,
    );

    expect(queryByText("Form content")).not.toBeInTheDocument();

    // Open popover
    fireEvent.click(queryByText("Trigger"));
    await wait(() => {});

    // click on Filter button
    fireEvent.click(queryByText("Cancel"));

    await waitForElementToBeRemoved(() => queryByText("Form content"));

    expect(onFormCancelClickMock).toBeCalled();
    expect(queryByText("Form content")).not.toBeInTheDocument();
  });

  test("should pass dismiss to formContent", async () => {
    const { queryByText } = render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        onFormCancelClick={onFormCancelClickMock}
        formContent={dismiss => (
          <button onClick={() => dismiss()}>Click to dismiss</button>
        )}
        dismissOnSave
      />,
    );

    expect(queryByText("Form content")).not.toBeInTheDocument();

    // Open popover
    fireEvent.click(queryByText("Trigger"));
    await wait(() => {});

    // call dismiss
    fireEvent.click(queryByText("Click to dismiss"));

    await waitForElementToBeRemoved(() => queryByText("Click to dismiss"));

    expect(queryByText("Click to dismiss")).not.toBeInTheDocument();
  });
});
