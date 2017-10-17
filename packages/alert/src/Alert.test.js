import React from "react";
import renderer from "react-test-renderer";

import Alert from "./Alert";

describe("Alert", function() {
  test("default onDismiss function returns null", function() {
    const component = renderer.create(<Alert text="A test alert" />);
    let tree = component.toTree();
    expect(tree.props.onDismiss()).toBeNull();
  });
});
