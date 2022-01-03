import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import debounce from "lodash.debounce";
import Enzyme, { mount } from "enzyme";
import { render, fireEvent } from "@testing-library/react";

import SearchField from "./SearchField";
import Menu from "./components/Menu";

jest.mock("lodash.debounce");

Enzyme.configure({ adapter: new Adapter() });

describe("SearchField", () => {
  let setStateSpy, instance;
  beforeEach(() => {
    setStateSpy = jest.fn();
    instance = new SearchField(SearchField.defaultProps);
    instance.setState = setStateSpy;
  });
  afterEach(() => {
    debounce.mockClear();
    setStateSpy.mockReset();
    instance = null;
  });

  describe("onSearchChange", () => {
    let event;
    beforeEach(() => {
      event = { target: { value: "a" } };
    });
    afterEach(() => {
      event = null;
    });

    test("should be debounced", () => {
      const { onSearchChange, debounceDelay } = SearchField.defaultProps;

      expect(debounce).toHaveBeenCalledWith(onSearchChange, debounceDelay);
    });

    test("should set inputValue state", () => {
      instance.handleSearchChangeEvent(event);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("inputValue", event.target.value);
    });

    test("should pass value to onSearchChange", () => {
      instance.handleSearchChangeEvent(event);

      expect(instance.debouncedOnSearchChange).toHaveBeenCalledWith(
        event.target.value,
      );
    });

    describe("with no value", () => {
      let onChangeSpy;
      beforeEach(() => {
        event = { target: { value: "" } };
        onChangeSpy = jest.fn();
        instance.props = {
          ...instance.props,
          onChange: onChangeSpy,
        };
      });
      afterEach(() => {
        event = null;
        onChangeSpy.mockReset();
        instance.props = null;
      });

      test("should flush debouncedOnSearchChange", () => {
        instance.handleSearchChangeEvent(event);

        expect(instance.debouncedOnSearchChange.flush).toHaveBeenCalledTimes(1);
      });

      test("should call onChange with no item", () => {
        instance.handleSearchChangeEvent(event);

        expect(onChangeSpy).toHaveBeenCalledWith(undefined, undefined);
      });
    });
  });

  describe("componentDidUpdate", () => {
    let onSearchChangeSpy, debounceDelay, previousDebounce;
    beforeEach(() => {
      onSearchChangeSpy = jest.fn();
      debounceDelay = 100;
      instance.props = {
        onSearchChange: onSearchChangeSpy,
        debounceDelay,
      };
      previousDebounce = { cancel: jest.fn() };
      instance.debouncedOnSearchChange = previousDebounce;
    });
    afterEach(() => {
      onSearchChangeSpy.mockReset();
      debounceDelay = null;
      instance.props = null;
      instance.debouncedOnSearchChange = null;
      previousDebounce = null;
    });

    test("should do nothing for unrelated props", () => {
      instance.componentDidUpdate({
        ...instance.props,
        anotherProp: 1,
      });

      expect(instance.debouncedOnSearchChange.cancel).not.toHaveBeenCalled();
      expect(debounce).toHaveBeenCalledTimes(1); // Called at instantiation
    });

    test("should cancel previous debounces", () => {
      instance.componentDidUpdate({
        ...instance.props,
        debounceDelay: 1,
      });

      expect(previousDebounce.cancel).toHaveBeenCalledTimes(1);
    });

    test("should create new debounce for onSearchChange updates", () => {
      const newProps = {
        ...instance.props,
        onSearchChange: () => true,
      };
      const prevProps = instance.props;
      instance.props = newProps;
      instance.componentDidUpdate(prevProps);

      expect(debounce).toHaveBeenCalledTimes(2);
      expect(debounce).toHaveBeenCalledWith(
        newProps.onSearchChange,
        debounceDelay,
      );
    });

    test("should return new state if value changes", () => {
      const item = { value: "ab", label: "AB" };
      const props = { value: "ab" };
      const component = mount(<SearchField items={[item]} value="ba" />);
      const oldState = component.state();
      component.setProps(props);

      expect(component.state()).toEqual({
        ...oldState,
        selectedItem: item,
        inputValue: item.label,
      });
    });

    test("should remove previous selected if value changes to null", () => {
      const item = { value: "ab", label: "AB" };
      const props = { value: null };
      const component = mount(<SearchField items={[item]} value="ab" />);
      const oldState = component.state();

      component.setProps(props);
      const newState = component.state();

      expect(newState).toEqual({ ...oldState, selectedItem: null });
    });

    test("should remove previous selected if value changes to something not on the list", () => {
      const item = { value: "ab", label: "AB" };
      const props = { value: "ba" };
      const component = mount(<SearchField items={[item]} value="ab" />);
      const oldState = component.state();

      component.setProps(props);
      const newState = component.state();

      expect(newState).toEqual({ ...oldState, selectedItem: null });
    });

    test("should return new state if items changes", () => {
      const item = { value: "ab", label: "AB" };
      const props = { items: [item] };
      const component = mount(<SearchField items={[]} value="" />);
      const oldState = component.state();
      component.setProps(props);

      expect(component.state()).toEqual({ ...oldState, items: [item] });
    });

    test("should return new inputValue if items changes but value does not", () => {
      const item = { value: "ab", label: "AB" };
      const newItem = { value: "ab", label: "New AB" };
      const props = { items: [newItem] };
      const component = mount(
        <SearchField items={[item]} value={item.value} />,
      );
      const oldState = component.state();

      component.setProps(props);

      expect(component.state()).toEqual({
        ...oldState,
        items: [newItem],
        inputValue: newItem.label,
        selectedItem: newItem,
      });
    });

    test("should not change state if the props are the same", () => {
      const props = { value: "a" };
      const component = mount(<SearchField value={props.value} />);
      const oldState = component.state();
      component.setProps(props);

      expect(component.state()).toEqual(oldState);
    });
  });

  describe("componentWillUnmount", () => {
    test("should cancel a pending debounce", () => {
      instance.componentWillUnmount();

      expect(instance.debouncedOnSearchChange.cancel).toHaveBeenCalledTimes(1);
    });
  });

  describe("changeHighlight", () => {
    let items, centerChildByIndexSpy, prevState;
    beforeEach(() => {
      items = [1, 2, 3];
      instance.props.items = items;
      centerChildByIndexSpy = jest.fn();
      instance.scroller = {
        centerChildByIndex: centerChildByIndexSpy,
      };
      prevState = { highlightedIndex: 1 };
    });
    afterEach(() => {
      items = null;
      instance.props.items = null;
      instance.scroller = null;
      centerChildByIndexSpy.mockReset();
    });

    const getStateChange = (modifier) => {
      instance.changeHighlight(modifier);

      // run function given to setState
      const updater = setStateSpy.mock.calls[0][0];
      return updater(prevState);
    };

    test("should update highlightedIndex state with positive values", () => {
      const stateChange = getStateChange(1);

      expect(stateChange).toHaveProperty(
        "highlightedIndex",
        prevState.highlightedIndex + 1,
      );
    });

    test("should update highlightedIndex state with negative values", () => {
      const stateChange = getStateChange(-1);

      expect(stateChange).toHaveProperty(
        "highlightedIndex",
        prevState.highlightedIndex - 1,
      );
    });

    test("should limit index according to item quantity", () => {
      const stateChange = getStateChange(100000);

      expect(stateChange).toHaveProperty("highlightedIndex", items.length - 1);
    });

    test("should NOT have index below -1", () => {
      const stateChange = getStateChange(-100000);

      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });

    test("should pass new index to ScrollBox centerChildByIndex", () => {
      const { highlightedIndex } = getStateChange(1);

      expect(centerChildByIndexSpy).toHaveBeenCalledWith(highlightedIndex);
    });

    test("should return -1 if theres no item", () => {
      instance.props.items = null;
      const stateChange = getStateChange(1);

      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });
  });

  describe("onKeyDown", () => {
    let preventDefaultSpy, event, onBlurSpy, onChangeSpy, changeHighlightSpy;
    beforeEach(() => {
      preventDefaultSpy = jest.fn();
      onBlurSpy = jest.fn();
      event = {
        key: "a",
        target: {
          blur: onBlurSpy,
        },
        preventDefault: preventDefaultSpy,
      };
      onChangeSpy = jest.fn();
      instance.selectResult = onChangeSpy;
      changeHighlightSpy = jest.fn();
      instance.changeHighlight = changeHighlightSpy;
    });
    afterEach(() => {
      preventDefaultSpy.mockReset();
      event = null;
      onBlurSpy.mockReset();
      onChangeSpy.mockReset();
      changeHighlightSpy.mockReset();
    });

    test("should do nothing for unrelated keys", () => {
      instance.handleKeyDown(event);

      expect(instance.debouncedOnSearchChange.flush).not.toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(setStateSpy).not.toHaveBeenCalled();
      expect(preventDefaultSpy).not.toHaveBeenCalled();
      expect(changeHighlightSpy).not.toHaveBeenCalled();
    });

    test("should flush debounce on Enter key", () => {
      event.key = "Enter";
      instance.handleKeyDown(event);

      expect(instance.debouncedOnSearchChange.flush).toHaveBeenCalledTimes(1);
    });

    test("should run onChange on Enter key with highlighted item", async () => {
      const index = 0;
      const value = 42;
      const items = [{ value, label: "Foo" }];
      const onChangeMock = jest.fn();

      const component = mount(
        <SearchField items={items} onChange={onChangeMock} />,
      );
      event.key = "Enter";
      component.setState({ highlightedIndex: index });
      await component.instance().handleKeyDown(event);

      expect(onChangeMock).toHaveBeenCalledWith(value, items[0]);
    });

    test("should remove focus from the input on Enter key with highlighted item", async () => {
      const index = 0;
      const value = 42;
      const items = [{ value, label: "Foo" }];

      const component = mount(<SearchField items={items} />);
      event.key = "Enter";
      component.setState({ highlightedIndex: index });
      await component.instance().handleKeyDown(event);

      expect(onBlurSpy).toHaveBeenCalled();
    });
    test("should reset highlight on Esc key", () => {
      event.key = "Escape";
      instance.handleKeyDown(event);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });

    test("should preventDefault on ArrowUp key", () => {
      event.key = "ArrowUp";
      instance.handleKeyDown(event);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    test("should highlight previous item on ArrowUp key", () => {
      event.key = "ArrowUp";
      instance.handleKeyDown(event);

      expect(changeHighlightSpy).toHaveBeenCalledWith(-1);
    });

    test("should preventDefault on ArrowDown key", () => {
      event.key = "ArrowDown";
      instance.handleKeyDown(event);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    test("should highlight next item on ArrowDown key", () => {
      event.key = "ArrowDown";
      instance.handleKeyDown(event);

      expect(changeHighlightSpy).toHaveBeenCalledWith(1);
    });
  });

  describe("selectResult", () => {
    let items, onChangeSpy;
    beforeEach(() => {
      items = [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" },
      ];
      onChangeSpy = jest.fn();
      instance.props = {
        ...instance.props,
        onChange: onChangeSpy,
        items,
      };
    });
    afterEach(() => {
      items = null;
      onChangeSpy.mockReset();
      instance.props = null;
    });

    test("should update selectedItem state", async () => {
      const index = 1;
      await instance.selectResult(index);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("selectedItem", items[index]);
    });

    test("should call onChange prop with selected item value", async () => {
      const index = 1;
      const component = mount(
        <SearchField onChange={onChangeSpy} items={items} />,
      );
      await component.instance().selectResult(index);

      expect(onChangeSpy).toHaveBeenCalledWith(
        items[index].value,
        items[index],
      );
    });

    test("should NOT update inputValue state if couldn't find selected item", () => {
      instance.selectResult(9999);

      expect(setStateSpy).not.toHaveBeenCalled();
    });

    test("should NOT call onChange prop if couldn't find selected item", () => {
      instance.selectResult(9999);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe("onFocus", () => {
    test("should set focused state to true", () => {
      instance.handleFocus();
      const stateChange = setStateSpy.mock.calls[0][0];
      expect(stateChange).toHaveProperty("focused", true);
    });

    test("should reset highlightIndex", () => {
      instance.handleFocus();
      const stateChange = setStateSpy.mock.calls[0][0];
      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });
  });

  describe("onBlur", () => {
    let selectedItem, onSearchChangeSpy, onChangeSpy;
    beforeEach(() => {
      selectedItem = { label: "foo", value: 42 };
      onSearchChangeSpy = jest.fn();
      onChangeSpy = jest.fn();
      instance.props = {
        ...instance.props,
        onSearchChange: onSearchChangeSpy,
        onChange: onChangeSpy,
      };
    });
    afterEach(() => {
      selectedItem = null;
      onSearchChangeSpy.mockReset();
      onChangeSpy.mockReset();
      instance.props = null;
    });
    const getStateChange = (prevState = {}) => {
      instance.state = prevState;
      instance.handleBlur();
      return setStateSpy.mock.calls[0][0];
    };

    describe("with selectedItem", () => {
      test("should set focused state to false", () => {
        const stateChange = getStateChange({ selectedItem });

        expect(stateChange).toHaveProperty("focused", false);
      });

      test("should reset highlightIndex", () => {
        const stateChange = getStateChange({ selectedItem });

        expect(stateChange).toHaveProperty("highlightedIndex", -1);
      });

      test("should reset inputValue to previous selected item label", () => {
        const stateChange = getStateChange({ selectedItem });

        expect(stateChange).toHaveProperty("inputValue", selectedItem.label);
      });
    });

    describe("without selectedItem", () => {
      test("should trigger onSearchChange with empty string", async () => {
        await getStateChange();

        expect(onSearchChangeSpy).toHaveBeenCalledWith(
          "",
          instance.selectResult,
        );
      });

      test("should NOT trigger onChange", async () => {
        await getStateChange();

        expect(onChangeSpy).not.toHaveBeenCalled();
      });

      test("should set focused state to false", () => {
        const stateChange = getStateChange();

        expect(stateChange).toHaveProperty("focused", false);
      });

      test("should reset highlightIndex", () => {
        const stateChange = getStateChange();

        expect(stateChange).toHaveProperty("highlightedIndex", -1);
      });

      test("should reset inputValue", () => {
        const stateChange = getStateChange();

        expect(stateChange).toHaveProperty("inputValue", "");
      });
    });
  });

  describe("preventBlur", () => {
    let preventDefaultSpy;
    beforeEach(() => {
      preventDefaultSpy = jest.fn();
    });
    afterEach(() => {
      preventDefaultSpy.mockReset();
    });
  });

  describe("onItemClick", () => {
    let currentTarget, event, scroller, onChangeSpy;
    beforeEach(() => {
      currentTarget = {};
      event = { currentTarget };
      scroller = {
        wrapper: {
          childNodes: [1, 2, currentTarget, 4],
        },
      };
      instance.scroller = scroller;
      onChangeSpy = jest.fn();
      instance.selectResult = onChangeSpy;
    });
    afterEach(() => {
      currentTarget = null;
      event = null;
      scroller = null;
      instance.scroller = null;
      onChangeSpy.mockReset();
      instance.selectResult = null;
    });

    test("should pass event currentTarget`s index to onChange", () => {
      instance.handleItemClick(event);

      expect(onChangeSpy).toHaveBeenCalledWith(2);
    });
  });

  describe("render", () => {
    let items, renderMenuSpy;
    beforeEach(() => {
      renderMenuSpy = jest.fn();
      instance.renderMenu = renderMenuSpy;
      items = [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" },
      ];
      instance.state = {
        ...instance.state,
        focused: true,
      };
      instance.props = {
        ...instance.props,
        items,
      };
    });
    afterEach(() => {
      renderMenuSpy.mockReset();
      items = null;
      instance.state = null;
      instance.props = null;
    });

    test("should show Menu when has focus and items", () => {
      const component = mount(<SearchField items={items} />);
      component.setState({ focused: true });
      const menuElements = component.find("Menu");
      expect(menuElements.length).toBe(1);
    });

    test("should NOT show Menu if input is not focused", () => {
      instance.state.focused = false;
      instance.render();

      expect(renderMenuSpy).not.toHaveBeenCalled();
    });

    test("should NOT show Menu if has no items nor footer", () => {
      instance.props.items = null;
      instance.render();

      expect(renderMenuSpy).not.toHaveBeenCalled();
    });

    test("should show Menu when has focus and footer", () => {
      instance.props.items = null;
      instance.props.footer = () => "footer";
      instance.render();

      expect(renderMenuSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("renderMenu", () => {
    test("should return a Menu component", () => {
      const result = instance.renderMenu();

      expect(result).toHaveProperty("type", Menu);
    });

    test("should store scroller innerRef", () => {
      const node = {};
      const menu = instance.renderMenu();

      menu.props.innerRef(node);

      expect(instance.scroller).toEqual(node);
    });
  });

  describe("onBeforeChange", () => {
    const item = { value: 1, label: "item" };
    let onChangeSpy;

    beforeEach(() => {
      onChangeSpy = jest.fn();
    });
    afterEach(() => {
      onChangeSpy.mockReset();
    });

    it("should hold onChange until proceed is called", () => {
      let proceedFn;
      const onBeforeChangeSpy = jest.fn(({ proceed }) => (proceedFn = proceed));

      const { getByTestId, getByText } = render(
        <SearchField
          onChange={onChangeSpy}
          onBeforeChange={onBeforeChangeSpy}
          items={[item]}
        />,
      );
      fireEvent.focus(getByTestId("search-input"));
      fireEvent.mouseDown(getByText(item.label));

      expect(onBeforeChangeSpy).toBeCalledTimes(1);
      expect(onChangeSpy).not.toBeCalled();

      proceedFn();
      expect(onChangeSpy).toBeCalledTimes(1);
    });

    it("should proceed immediately to onChange if onBeforeChange is not defined", () => {
      const { getByTestId, getByText } = render(
        <SearchField onChange={onChangeSpy} items={[item]} />,
      );
      fireEvent.focus(getByTestId("search-input"));
      fireEvent.mouseDown(getByText(item.label));

      expect(onChangeSpy).toBeCalledTimes(1);
    });
  });
});
