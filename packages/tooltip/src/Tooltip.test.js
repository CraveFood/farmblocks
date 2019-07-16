/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  test("Tooltip visibility on mouseOver and mouseLeave", async () => {
    const onMouseOver = jest.fn();
    const onMouseLeave = jest.fn();
    const triggerText = "HoverMe";
    const tooltipContent = "More Info";
    const { container, queryByText } = render(
      <Tooltip
        trigger={<div>{triggerText}</div>}
        content={tooltipContent}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />,
    );

    // Initial state, tooltip is not visible
    expect(queryByText(tooltipContent)).not.toBeInTheDocument();

    // On mouve over, Tooltip is visible and onMouseOver is called
    const hitArea = container.querySelector('[class="hit-area"]');
    fireEvent.mouseOver(hitArea);
    expect(queryByText(tooltipContent)).toBeInTheDocument();
    expect(onMouseOver).toBeCalledTimes(1);
    expect(onMouseLeave).toBeCalledTimes(0);

    // On mouse leave, tooltip is not visible and onMouseLeave is called
    fireEvent.mouseLeave(hitArea);
    await waitForElementToBeRemoved(() => queryByText(tooltipContent));
    expect(queryByText(tooltipContent)).not.toBeInTheDocument();
    expect(onMouseOver).toBeCalledTimes(1);
    expect(onMouseLeave).toBeCalledTimes(1);
  });
});
