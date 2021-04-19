import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Tag from "./Tag";

Enzyme.configure({ adapter: new Adapter() });

describe("Tag", () => {
  let onRemoveMock;
  beforeEach(() => {
    onRemoveMock = jest.fn();
  });

  test("should call onRemove when clicking on the icon", () => {
    const value = { value: "some value" };
    const wrapper = shallow(
      <Tag text="some text" value={value} onRemove={onRemoveMock} />,
    );
    wrapper.find(".close-icon").simulate("click");

    expect(onRemoveMock).toHaveBeenCalledWith(value);
  });

  test("should call onRemove by pressing Enter or Space keys", () => {
    const value = { value: "some value" };
    const wrapper = shallow(
      <Tag text="some text" value={value} onRemove={onRemoveMock} />,
    );

    const onKeyDown = wrapper.find(".close-icon").prop("onKeyDown");

    onKeyDown({ key: "" });
    expect(onRemoveMock).toHaveBeenCalledTimes(0);

    onKeyDown({ key: "Enter" });
    expect(onRemoveMock).toHaveBeenCalledTimes(1);

    onKeyDown({ key: " " });
    expect(onRemoveMock).toHaveBeenCalledTimes(2);
  });
});
