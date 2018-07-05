import React from "react";
import Adapter from "enzyme-adapter-react-16";
import debounce from "lodash.debounce";
import Enzyme, { mount } from "enzyme";

import SearchField from "./SearchField";
import Menu from "./components/Menu";

jest.mock("lodash.debounce");

Enzyme.configure({ adapter: new Adapter() });

describe("SearchField", () => {
  let setStateSpy, instance;
  beforeEach(() => {
    setStateSpy = jest
      .fn()
      .mockImplementation((stateChanges, callback) => callback && callback());
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

    test("should reset state", () => {
      instance.onSearchChange(event);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("inputValue", event.target.value);
      expect(stateChange).toHaveProperty("highlightedIndex", -1);
      expect(stateChange).toHaveProperty("selectedItem", null);
    });

    test("should pass value to onSearchChange", () => {
      instance.onSearchChange(event);

      expect(instance.debouncedOnSearchChange).toHaveBeenCalledWith(
        event.target.value
      );
    });

    describe("with no value", () => {
      let onChangeSpy;
      beforeEach(() => {
        event = { target: { value: "" } };
        onChangeSpy = jest.fn();
        instance.props = {
          ...instance.props,
          onChange: onChangeSpy
        };
      });
      afterEach(() => {
        event = null;
        onChangeSpy.mockReset();
        instance.props = null;
      });

      test("should flush debouncedOnSearchChange", () => {
        instance.onSearchChange(event);

        expect(instance.debouncedOnSearchChange.flush).toHaveBeenCalledTimes(1);
      });

      test("should call onChange with no item", () => {
        instance.onSearchChange(event);

        expect(onChangeSpy).toHaveBeenCalledWith();
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
        debounceDelay
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
        anotherProp: 1
      });

      expect(instance.debouncedOnSearchChange.cancel).not.toHaveBeenCalled();
      expect(debounce).toHaveBeenCalledTimes(1); // Called at instantiation
    });

    test("should cancel previous debounces", () => {
      instance.componentDidUpdate({
        ...instance.props,
        debounceDelay: 1
      });

      expect(previousDebounce.cancel).toHaveBeenCalledTimes(1);
    });

    test("should create new debounce for onSearchChange updates", () => {
      const newProps = {
        ...instance.props,
        onSearchChange: () => true
      };
      const prevProps = instance.props;
      instance.props = newProps;
      instance.componentDidUpdate(prevProps);

      expect(debounce).toHaveBeenCalledTimes(2);
      expect(debounce).toHaveBeenCalledWith(
        newProps.onSearchChange,
        debounceDelay
      );
    });
  });

  describe("getDerivedStateFromProps", () => {
    test("should return new state if value changes", () => {
      const item = { value: "ab", label: "AB" };
      const props = { value: "ab", items: [item] };
      const state = { lastValue: "a", lastItems: [item] };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toEqual({
        selectedItem: item,
        inputValue: item.label,
        lastValue: props.value,
        lastItems: props.items
      });
    });

    test("should return new state if items changes", () => {
      const item = { value: "ab", label: "AB" };
      const props = { value: "ab", items: [item] };
      const state = { lastValue: "ab", lastItems: [] };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toEqual({
        selectedItem: item,
        inputValue: item.label,
        lastValue: props.value,
        lastItems: props.items
      });
    });

    test("should return null if there is no change", () => {
      const props = { value: "a" };
      const state = { lastValue: "a" };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toBeNull();
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
        centerChildByIndex: centerChildByIndexSpy
      };
      prevState = { highlightedIndex: 1 };
    });
    afterEach(() => {
      items = null;
      instance.props.items = null;
      instance.scroller = null;
      centerChildByIndexSpy.mockReset();
    });

    const getStateChange = modifier => {
      instance.changeHighlight(modifier);

      // run function given to setState
      const updater = setStateSpy.mock.calls[0][0];
      return updater(prevState);
    };

    test("should update highlightedIndex state with positive values", () => {
      const stateChange = getStateChange(1);

      expect(stateChange).toHaveProperty(
        "highlightedIndex",
        prevState.highlightedIndex + 1
      );
    });

    test("should update highlightedIndex state with negative values", () => {
      const stateChange = getStateChange(-1);

      expect(stateChange).toHaveProperty(
        "highlightedIndex",
        prevState.highlightedIndex - 1
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
    let preventDefaultSpy, event, onChangeSpy, changeHighlightSpy;
    beforeEach(() => {
      preventDefaultSpy = jest.fn();
      event = {
        key: "a",
        preventDefault: preventDefaultSpy
      };
      onChangeSpy = jest.fn();
      instance.onChange = onChangeSpy;
      changeHighlightSpy = jest.fn();
      instance.changeHighlight = changeHighlightSpy;
    });
    afterEach(() => {
      preventDefaultSpy.mockReset();
      event = null;
      onChangeSpy.mockReset();
      changeHighlightSpy.mockReset();
    });

    test("should do nothing for unrelated keys", () => {
      instance.onKeyDown(event);

      expect(instance.debouncedOnSearchChange.flush).not.toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(setStateSpy).not.toHaveBeenCalled();
      expect(preventDefaultSpy).not.toHaveBeenCalled();
      expect(changeHighlightSpy).not.toHaveBeenCalled();
    });

    test("should flush debounce on Enter key", () => {
      event.key = "Enter";
      instance.onKeyDown(event);

      expect(instance.debouncedOnSearchChange.flush).toHaveBeenCalledTimes(1);
    });

    test("should run onChange on Enter key with highlighted item", () => {
      const index = 10;
      event.key = "Enter";
      instance.state.highlightedIndex = index;
      instance.onKeyDown(event);

      expect(onChangeSpy).toHaveBeenCalledWith(index);
    });

    test("should reset highlight on Esc key", () => {
      event.key = "Escape";
      instance.onKeyDown(event);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });

    test("should preventDefault on ArrowUp key", () => {
      event.key = "ArrowUp";
      instance.onKeyDown(event);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    test("should highlight previous item on ArrowUp key", () => {
      event.key = "ArrowUp";
      instance.onKeyDown(event);

      expect(changeHighlightSpy).toHaveBeenCalledWith(-1);
    });

    test("should preventDefault on ArrowDown key", () => {
      event.key = "ArrowDown";
      instance.onKeyDown(event);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    test("should highlight next item on ArrowDown key", () => {
      event.key = "ArrowDown";
      instance.onKeyDown(event);

      expect(changeHighlightSpy).toHaveBeenCalledWith(1);
    });
  });

  describe("onChange", () => {
    let items, onChangeSpy, blurSpy;
    beforeEach(() => {
      items = [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" }
      ];
      onChangeSpy = jest.fn();
      instance.props = {
        ...instance.props,
        onChange: onChangeSpy,
        items
      };
      blurSpy = jest.fn();
      instance.input = { blur: blurSpy };
    });
    afterEach(() => {
      items = null;
      onChangeSpy.mockReset();
      instance.props = null;
      blurSpy.mockReset;
      instance.input = null;
    });

    test("should update selectedItem state", () => {
      const index = 1;
      instance.onChange(index);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("selectedItem", items[index]);
    });

    test("should call onChange prop with selected item value", () => {
      const index = 1;
      instance.onChange(index);

      expect(onChangeSpy).toHaveBeenCalledWith(items[index].value);
    });

    test("should NOT update inputValue state if couldn't find selected item", () => {
      instance.onChange(9999);

      expect(setStateSpy).not.toHaveBeenCalled();
    });

    test("should NOT call onChange prop if couldn't find selected item", () => {
      instance.onChange(9999);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    test("should blur input", () => {
      instance.onChange(1);

      expect(blurSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("onFocus", () => {
    test("should set focused state to true", () => {
      instance.onFocus();
      const stateChange = setStateSpy.mock.calls[0][0];
      expect(stateChange).toHaveProperty("focused", true);
    });

    test("should reset highlightIndex", () => {
      instance.onFocus();
      const stateChange = setStateSpy.mock.calls[0][0];
      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });
  });

  describe("onBlur", () => {
    let selectedItem, onSearchChangeSpy, onChangeSpy;
    beforeEach(() => {
      selectedItem = {};
      onSearchChangeSpy = jest.fn();
      onChangeSpy = jest.fn();
      instance.props = {
        ...instance.props,
        onSearchChange: onSearchChangeSpy,
        onChange: onChangeSpy
      };
    });
    afterEach(() => {
      selectedItem = null;
      onSearchChangeSpy.mockReset();
      onChangeSpy.mockReset();
      instance.props = null;
    });
    const getStateChange = (prevState = {}) => {
      instance.onBlur();

      // run function given to setState
      const updater = setStateSpy.mock.calls[0][0];
      return updater(prevState);
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
    });

    describe("without selectedItem", () => {
      test("should trigger onSearchChange with empty string", () => {
        getStateChange();

        expect(onSearchChangeSpy).toHaveBeenCalledWith("");
      });

      test("should trigger onChange with no item", () => {
        getStateChange();

        expect(onChangeSpy).toHaveBeenCalledWith();
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
    let preventDefaultSpy, event;
    beforeEach(() => {
      preventDefaultSpy = jest.fn();
      event = { preventDefault: preventDefaultSpy };
    });
    afterEach(() => {
      preventDefaultSpy.mockReset();
      event = null;
    });

    test("should call preventDefault", () => {
      instance.preventBlur(event);
      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("onItemClick", () => {
    let currentTarget, event, scroller, onChangeSpy;
    beforeEach(() => {
      currentTarget = {};
      event = { currentTarget };
      scroller = {
        wrapper: {
          childNodes: [1, 2, currentTarget, 4]
        }
      };
      instance.scroller = scroller;
      onChangeSpy = jest.fn();
      instance.onChange = onChangeSpy;
    });
    afterEach(() => {
      currentTarget = null;
      event = null;
      scroller = null;
      instance.scroller = null;
      onChangeSpy.mockReset();
      instance.onChange = null;
    });

    test("should pass event currentTarget`s index to onChange", () => {
      instance.onItemClick(event);

      expect(onChangeSpy).toHaveBeenCalledWith(2);
    });
  });

  describe("getInputValue", () => {
    let item;
    beforeEach(() => {
      item = {
        value: "bananaValue",
        label: "Banana Label"
      };
    });
    afterEach(() => {
      item = null;
    });

    test(`should return selectedItem's label if there's one`, () => {
      instance.state = {
        ...instance.state,
        selectedItem: item
      };
      const result = instance.getInputValue();

      expect(result).toBe(item.label);
    });

    test(`should return inputValue if there's no item highlighted`, () => {
      const expectedValue = "strawberry";
      instance.state = {
        ...instance.state,
        inputValue: expectedValue
      };
      const result = instance.getInputValue();

      expect(result).toBe(expectedValue);
    });

    test(`should return highlighted item's label`, () => {
      instance.props = {
        ...instance.props,
        items: [{ value: "otherItem", label: "Not Highlighted" }, item]
      };
      instance.state = {
        ...instance.state,
        highlightedIndex: 1
      };
      const result = instance.getInputValue();

      expect(result).toBe(item.label);
    });

    test("should return empty string if theres no items", () => {
      instance.state = {
        ...instance.state,
        highlightedIndex: 1
      };
      const result = instance.getInputValue();

      expect(result).toBe("");
    });

    test("should return empty string if highlightedIndex is invalid", () => {
      instance.props = {
        ...instance.props,
        items: [{ value: "otherItem", label: "Not Highlighted" }, item]
      };
      instance.state = {
        ...instance.state,
        highlightedIndex: 10
      };
      const result = instance.getInputValue();

      expect(result).toBe("");
    });
  });

  describe("render", () => {
    let items, renderMenuSpy;
    beforeEach(() => {
      renderMenuSpy = jest.fn();
      instance._renderMenu = renderMenuSpy;
      items = [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" }
      ];
      instance.state = {
        ...instance.state,
        focused: true
      };
      instance.props = {
        ...instance.props,
        items
      };
    });
    afterEach(() => {
      renderMenuSpy.mockReset();
      items = null;
      instance.state = null;
      instance.props = null;
    });

    test("should use getInputValue result on Input", () => {
      const expectedValue = "banana";
      instance.getInputValue = jest.fn().mockReturnValue(expectedValue);
      const input = instance
        .render()
        .props.children.find(child => child.type.displayName === "Input");

      expect(instance.getInputValue).toHaveBeenCalled();
      expect(input.props).toHaveProperty("value", expectedValue);
    });

    test("should show Menu when has focus and items", () => {
      instance.render();

      expect(renderMenuSpy).toHaveBeenCalledTimes(1);
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

  describe("_renderMenu", () => {
    test("should return a Menu component", () => {
      const result = instance._renderMenu();

      expect(result).toHaveProperty("type", Menu);
    });

    test("should store scroller innerRef", () => {
      const node = {};
      const menu = instance._renderMenu();

      menu.props.innerRef(node);

      expect(instance.scroller).toEqual(node);
    });
  });

  describe("defaultProps", () => {
    test("onSearchChange should return false", () => {
      const result = SearchField.defaultProps.onSearchChange();

      expect(result).toBe(false);
    });

    test("onChange should return false", () => {
      const result = SearchField.defaultProps.onChange();

      expect(result).toBe(false);
    });

    test("onScrollReachEnd should return false", () => {
      const result = SearchField.defaultProps.onScrollReachEnd();

      expect(result).toBe(false);
    });

    test("autofocus should return undefined at mount", () => {
      const component = mount(<SearchField />);
      const input = component.find("Input").first();

      expect(input.props().focused).toBe(undefined);
    });

    test("autofocus should return true", () => {
      const component = mount(<SearchField />);

      component.setState({ selectedItem: "1" });

      component.setState({ selectedItem: null });

      const input = component.find("Input").first();

      expect(input.props().focused).toBe(true);
    });

    test("autofocus should return false", () => {
      const component = mount(<SearchField />);

      component.setState({ selectedItem: null });

      const input = component.find("Input").first();

      expect(input.props().focused).toBe(false);
    });
  });
});
