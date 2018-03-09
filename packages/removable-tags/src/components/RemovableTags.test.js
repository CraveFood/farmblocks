import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RemovableTags from "./RemovableTags";

Enzyme.configure({ adapter: new Adapter() });

describe("Removable tags", function() {
  test("should call onClose when clicking on the icon", function() {
    const onClickMock = jest.fn();
    const wrapper = shallow(<RemovableTags onClose={onClickMock} />);
    wrapper.find(".icon").simulate("click");

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
