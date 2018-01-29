import React from "react";
import renderer from "react-test-renderer";

import Column from "./Column";

describe("Column", function() {
  test("Column component by itself shouldn't render anything", function() {
    const component = renderer.create(<Column />);
    expect(component.toJSON()).toBeNull();
  });
});
