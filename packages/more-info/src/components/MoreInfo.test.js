import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import MoreInfo from "./MoreInfo";

describe("More info", () => {
  test("Tooltip visibility on mouseOver and mouseLeave", async () => {
    const tooltipText = "Tooltip content";
    const moreInfoText = "More Info";
    const { container, queryByText } = render(
      <MoreInfo text={moreInfoText}>{tooltipText}</MoreInfo>,
    );

    // Initial state, tooltip is no visible and text doesn't have the class "hovered"
    expect(queryByText(tooltipText)).not.toBeInTheDocument();
    expect(queryByText(moreInfoText)).not.toHaveClass("hovered");

    // On mouve over, Tooltip is visible and text has the class "hovered"
    const hitArea = container.querySelector('[class="hitArea"]');
    fireEvent.mouseOver(hitArea);
    expect(queryByText(tooltipText)).toBeInTheDocument();
    expect(queryByText(moreInfoText)).toHaveClass("hovered");

    // On mouse leave, go back to initial state,
    fireEvent.mouseLeave(hitArea);
    await waitForElementToBeRemoved(() => queryByText(tooltipText));
    expect(queryByText(tooltipText)).not.toBeInTheDocument();
    expect(queryByText(moreInfoText)).not.toHaveClass("hovered");
  });
});
