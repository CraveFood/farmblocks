import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import ReactAutocomplete from "react-autocomplete";

import Select from "./Select";

describe("Select input", () => {
  configure({ adapter: new Adapter() });
  let wrapper, autoCompleteWrapper, onChangeMock;

  const items = [
    { value: "1", label: "Banana" },
    { value: "2", label: "Apple" },
    { value: 0, label: "Coconut" },
  ];

  beforeEach(() => {
    onChangeMock = jest.fn();
    wrapper = mount(<Select items={items} onChange={onChangeMock} />);
    autoCompleteWrapper = wrapper.find(ReactAutocomplete);
  });

  afterEach(() => {
    onChangeMock.mockClear();
  });

  test("test shouldItemRender function", () => {
    // This function is used on react auto complete component so we
    // can choose what items would be rendered on the menu list.

    const { shouldItemRender } = autoCompleteWrapper.instance().props;

    // Should render all itens if user is not searching
    expect(shouldItemRender(items[0])).toBe(true);

    // Should only render items that matchs the search
    wrapper.setState({ isSearching: true, selectedLabel: "bana" });
    expect(shouldItemRender(items[0])).toBe(true);
    expect(shouldItemRender(items[1])).toBe(false);

    // Should not render items when the selectedLabel is undefined
    wrapper.setState({ isSearching: true, selectedLabel: undefined });
    expect(shouldItemRender(items[0])).toBe(false);
    expect(shouldItemRender(items[1])).toBe(false);
  });

  describe("test renderMenu function", () => {
    let autoCompWrapper;
    let renderMenu;
    beforeEach(() => {
      autoCompWrapper = wrapper.find(ReactAutocomplete);
      renderMenu = autoCompWrapper.instance().props.renderMenu;
    });
    test("should render items", () => {
      const menuWrapper = shallow(
        renderMenu(items.map(x => <li key={x.value}>{x.label}</li>)),
      );

      const ulWrapper = menuWrapper.find("ul");

      expect(ulWrapper.length).toBe(1);
      expect(ulWrapper.find("li").length).toBe(items.length);
    });

    test("should render empty card when no items list is empty", () => {
      const menuWrapper = shallow(renderMenu([]));

      expect(menuWrapper.find("EmptyCard").length).toBe(1);
    });
  });

  describe("renderItem function", () => {
    test("render item label on item description", () => {
      const autoCompWrapper = wrapper.find(ReactAutocomplete);
      const { renderItem } = autoCompWrapper.instance().props;

      const highlighted = false;
      const itemWrapper = mount(renderItem(items[0], highlighted));

      expect(itemWrapper.props().highlighted).toBe(highlighted);
      expect(itemWrapper.props().selected).toBe(false);
      expect(itemWrapper.text()).toBe(items[0].label);
    });

    test("custom item render", () => {
      const customRenderItem = item => `${item.value} - ${item.label}`;

      wrapper = mount(<Select items={items} renderItem={customRenderItem} />);

      const autoCompWrapper = wrapper.find(ReactAutocomplete);
      const { renderItem } = autoCompWrapper.instance().props;

      const highlighted = true;
      const itemWrapper = mount(renderItem(items[0], highlighted));

      expect(itemWrapper.props().highlighted).toBe(highlighted);
      expect(itemWrapper.props().selected).toBe(false);
      expect(itemWrapper.text()).toBe(customRenderItem(items[0]));
    });

    test("with selected item style", () => {
      wrapper = mount(<Select items={items} value={items[0].value} />);

      const autoCompWrapper = wrapper.find(ReactAutocomplete);
      const { renderItem } = autoCompWrapper.instance().props;

      const highlighted = false;
      const itemWrapper = mount(renderItem(items[0], highlighted));

      expect(itemWrapper.props().highlighted).toBe(highlighted);
      expect(itemWrapper.props().selected).toBe(true);
      expect(itemWrapper.text()).toBe(items[0].label);
    });
  });

  test("getItemValue function should return the item label", () => {
    const { getItemValue } = autoCompleteWrapper.instance().props;

    expect(getItemValue(items[0])).toBe(items[0].label);
  });

  describe("onMenuVisibilityChange", () => {
    test("should update state and select text on input", () => {
      wrapper = mount(
        <Select items={items} onChange={onChangeMock} value={0} />,
      );
      const { input, onMenuVisibilityChange } = wrapper.instance();
      input.select = jest.fn();

      const isOpen = true;
      onMenuVisibilityChange(isOpen);

      expect(input.select).toHaveBeenCalledTimes(1);
      expect(wrapper.state().isMenuOpen).toBe(isOpen);
    });

    test("should update state and not select text on input", () => {
      wrapper = mount(
        <Select
          items={items}
          onChange={onChangeMock}
          value={0}
          disableSearch
        />,
      );
      const { input, onMenuVisibilityChange } = wrapper.instance();
      input.select = jest.fn();

      const isOpen = true;
      onMenuVisibilityChange(isOpen);

      expect(input.select).not.toHaveBeenCalled();
      expect(wrapper.state().isMenuOpen).toBe(isOpen);
    });
  });

  describe("onFilter", () => {
    test("should call onChange with empty value and update state", () => {
      const { onChange } = autoCompleteWrapper.instance().props;

      const event = {
        target: {
          value: "Straw",
        },
      };
      onChange(event);
      const state = wrapper.state();

      // On the first call we cleanup the value, so the onChange props
      // is called with an empty string and we set isSearching to true
      expect(onChangeMock).toBeCalledWith("");
      expect(state.selectedLabel).toBe(event.target.value);
      expect(state.isSearching).toBe(true);

      const newEvent = {
        target: {
          value: "Strawberry",
        },
      };
      onChange(newEvent);
      const newState = wrapper.state();

      // On a new event, if we already were searching, we do not call on change
      // again with an empty value. We just update the selectedLabel
      // On the end of the series of events, onChanges is only called once
      expect(newState.selectedLabel).toBe(newEvent.target.value);
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("onSelect", () => {
    test("should call onChange with selected value and update state", () => {
      const { onSelect } = autoCompleteWrapper.instance().props;

      const item = items[0];
      const selectedLabel = item.label;

      onSelect(selectedLabel, item);
      const state = wrapper.state();

      expect(state.selectedLabel).toBe(selectedLabel);
      expect(state.isSearching).toBe(false);
      expect(onChangeMock).toBeCalledWith(item.value);
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
  });

  test("default onChange should return false", () => {
    wrapper = shallow(<Select items={items} />);

    expect(wrapper.instance().props.onChange()).toBe(false);
  });

  describe("new props", () => {
    test("should not update state if new value was not passed", () => {
      const state = wrapper.state();

      wrapper.setProps({});

      const newState = wrapper.state();

      expect(newState).toBe(state);
    });

    test("should update state with new value", () => {
      const state = wrapper.state();

      const item = items[0];
      wrapper.setProps({ value: item.value });
      const newState = wrapper.state();

      const expectedState = {
        ...state,
        selectedLabel: item.label,
        selectedValue: item.value,
      };

      expect(expectedState).toEqual(newState);
    });

    test("should update state if new value is equal to zero", () => {
      const state = wrapper.state();

      const item = items[2];

      wrapper.setProps({ value: item.value });

      const expectedState = {
        ...state,
        selectedLabel: item.label,
        selectedValue: item.value,
      };

      const newState = wrapper.state();

      expect(expectedState).toEqual(newState);
    });
  });
});
