import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Tag from "./Tag";

Enzyme.configure({ adapter: new Adapter() });

describe("Removable tags", function() {
  test("should call onRemove when clicking on the icon", function() {
    const onRemoveMock = jest.fn();
    const wrapper = shallow(<Tag text="some text" onRemove={onRemoveMock} />);
    wrapper.find(".icon").simulate("click");

    expect(onRemoveMock).toHaveBeenCalledTimes(1);
  });
});
