import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Tag from "./Tag";

Enzyme.configure({ adapter: new Adapter() });

describe("Tag", function() {
  test("should call onRemove when clicking on the icon", function() {
    const onRemoveMock = jest.fn();
    const value = { value: "some value" };
    const wrapper = shallow(
      <Tag text="some text" value={value} onRemove={onRemoveMock} />
    );
    wrapper.find(".close-icon").simulate("click");

    expect(onRemoveMock).toHaveBeenCalledWith(value);
  });
});
