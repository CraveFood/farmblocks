import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        formContent={<div>Form content</div>}
      />,
    );

    expect(screen.queryByText("Form content")).not.toBeInTheDocument();

    // open popover
    userEvent.click(screen.getByText("Trigger"));

    // click on Filter button
    const filterNode = await screen.findByText("Filter");
    userEvent.click(filterNode);

    expect(onFormSaveClickMock).toBeCalled();
    expect(screen.getByText("Form content")).toBeInTheDocument();
  });

  test("should call onFormSaveClick and dismiss popover open when clicking on Filter button", async () => {
    render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        formContent={<div>Form content</div>}
        dismissOnSave
      />,
    );

    expect(screen.queryByText("Form content")).not.toBeInTheDocument();

    // open popover
    userEvent.click(screen.getByText("Trigger"));

    // click on Filter button
    const filterNode = await screen.findByText("Filter");
    userEvent.click(filterNode);

    await waitForElementToBeRemoved(() => screen.queryByText("Form content"));

    expect(onFormSaveClickMock).toBeCalled();
    expect(screen.queryByText("Form content")).not.toBeInTheDocument();
  });

  test("should call onFormCancelClick and dismiss popover open when clicking on cancel button", async () => {
    render(
      <FilterPopover
        triggerLabel="Trigger"
        formTitle="Form Title"
        onFormSaveClick={onFormSaveClickMock}
        onFormCancelClick={onFormCancelClickMock}
        formContent={<div>Form content</div>}
        dismissOnSave
      />,
    );

    expect(screen.queryByText("Form content")).not.toBeInTheDocument();

    // Open popover
    fireEvent.click(screen.queryByText("Trigger"));

    // click on Cancel button
    const cancelNode = await screen.findByText("Cancel");
    userEvent.click(cancelNode);

    await waitForElementToBeRemoved(() => screen.queryByText("Form content"));

    expect(onFormCancelClickMock).toBeCalled();
    expect(screen.queryByText("Form content")).not.toBeInTheDocument();
  });

  test("should pass dismiss to formContent", async () => {
    render(
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

    expect(screen.queryByText("Form content")).not.toBeInTheDocument();

    // Open popover
    fireEvent.click(screen.queryByText("Trigger"));

    // call dismiss
    const cancelNode = await screen.findByText("Click to dismiss");
    userEvent.click(cancelNode);

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Click to dismiss"),
    );

    expect(screen.queryByText("Click to dismiss")).not.toBeInTheDocument();
  });
});
