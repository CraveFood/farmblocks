import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import Alert from "./Alert";

describe("Alert", function() {
  test("default onDismiss function returns null", function() {
    const component = renderer.create(<Alert text="A test alert" />);
    const tree = component.toTree();
    expect(tree.props.onDismiss()).toBeNull();
  });

  test("click on the close button remove the alert", function() {
    const { getByTestId, queryByTestId } = render(
      <Alert text="wainting to be closed" />,
    );
    expect(getByTestId("alert-content")).toBeInTheDocument();

    fireEvent.click(getByTestId("alert-dismiss"));

    expect(queryByTestId("alert-content")).not.toBeInTheDocument();
  });
});
