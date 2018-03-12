import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RemovableTags from "./RemovableTags";

Enzyme.configure({ adapter: new Adapter() });

describe("Removable tags", function() {
  test("should call onRemove when clicking on the icon", function() {
    const onRemoveMock = jest.fn();
    const wrapper = shallow(<RemovableTags onRemove={onRemoveMock} />);
    wrapper.find(".icon").simulate("click");

    expect(onRemoveMock).toHaveBeenCalledTimes(1);
  });
});
