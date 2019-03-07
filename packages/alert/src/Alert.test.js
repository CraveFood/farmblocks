import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Alert from "./Alert";

describe("Alert", function() {
  Enzyme.configure({ adapter: new Adapter() });
  test("default onDismiss function returns null", function() {
    const component = renderer.create(<Alert text="A test alert" />);
    const tree = component.toTree();
    expect(tree.props.onDismiss()).toBeNull();
  });

  test("click on the close button remove the alert", function() {
    const alert = shallow(<Alert text="wainting to be closed" />);
    expect(alert.find("div").length).toBe(1);

    alert.find("Button").simulate("click");

    expect(alert.find("div").length).toBe(0);
  });
});
