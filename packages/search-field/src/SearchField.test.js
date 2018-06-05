import debounce from "lodash.debounce";

import SearchField from "./SearchField";

jest.mock("lodash.debounce");

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

  describe("onChange", () => {
    let onChangeSpy, persistSpy, event;
    beforeEach(() => {
      onChangeSpy = jest.fn();
      persistSpy = jest.fn();
      event = { persist: persistSpy, target: { value: "a" } };
    });
    afterEach(() => {
      onChangeSpy.mockReset();
      persistSpy.mockReset();
      event = null;
    });

    test("should be debounced", () => {
      const { onChange, debounceDelay } = SearchField.defaultProps;

      expect(debounce).toHaveBeenCalledWith(onChange, debounceDelay);
    });

    test("should persist syntethic events", () => {
      instance.onChange(event);

      expect(persistSpy).toHaveBeenCalledTimes(1);
    });

    test("should update inputValue state", () => {
      instance.onChange(event);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("inputValue", event.target.value);
    });

    test("should reset highlightedIndex", () => {
      instance.onChange(event);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("highlightedIndex", -1);
    });
  });

  describe("componentDidUpdate", () => {
    let onChangeSpy, debounceDelay, previousDebounce;
    beforeEach(() => {
      onChangeSpy = jest.fn();
      debounceDelay = 100;
      instance.props = {
        onChange: onChangeSpy,
        debounceDelay
      };
      previousDebounce = { cancel: jest.fn() };
      instance.debouncedOnChange = previousDebounce;
    });
    afterEach(() => {
      onChangeSpy.mockReset();
      debounceDelay = null;
      instance.props = null;
      instance.debouncedOnChange = null;
      previousDebounce = null;
    });

    test("should do nothing for unrelated props", () => {
      instance.componentDidUpdate({
        ...instance.props,
        anotherProp: 1
      });

      expect(instance.debouncedOnChange.cancel).not.toHaveBeenCalled();
      expect(debounce).toHaveBeenCalledTimes(1); // Called at instantiation
    });

    test("should cancel previous debounces", () => {
      instance.componentDidUpdate({
        ...instance.props,
        debounceDelay: 1
      });

      expect(previousDebounce.cancel).toHaveBeenCalledTimes(1);
    });

    test("should create new debounce for onChange updates", () => {
      const newProps = {
        ...instance.props,
        onChange: () => true
      };
      const prevProps = instance.props;
      instance.props = newProps;
      instance.componentDidUpdate(prevProps);

      expect(debounce).toHaveBeenCalledTimes(2);
      expect(debounce).toHaveBeenCalledWith(newProps.onChange, debounceDelay);
    });
  });

  describe("getDerivedStateFromProps", () => {
    test("should return new state if value changes", () => {
      const props = { value: "ab" };
      const state = { inputValue: "a" };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toEqual({ inputValue: props.value });
    });

    test("should return new state if displayValue changes", () => {
      const props = { displayValue: "ab" };
      const state = { inputValue: "a" };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toEqual({ inputValue: props.displayValue });
    });

    test("should give priority to displayValue", () => {
      const props = {
        value: "a",
        displayValue: "b"
      };
      const state = { inputValue: "c" };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toEqual({ inputValue: props.displayValue });
    });

    test("should return null if there is no change", () => {
      const props = { value: "a" };
      const state = { inputValue: "a" };
      const result = SearchField.getDerivedStateFromProps(props, state);

      expect(result).toBeNull();
    });
  });

  describe("componentWillUnmount", () => {
    test("should cancel a pending debounce", () => {
      instance.componentWillUnmount();

      expect(instance.debouncedOnChange.cancel).toHaveBeenCalledTimes(1);
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
    let preventDefaultSpy, event, onSelectSpy, changeHighlightSpy;
    beforeEach(() => {
      preventDefaultSpy = jest.fn();
      event = {
        key: "a",
        preventDefault: preventDefaultSpy
      };
      onSelectSpy = jest.fn();
      instance.onSelect = onSelectSpy;
      changeHighlightSpy = jest.fn();
      instance.changeHighlight = changeHighlightSpy;
    });
    afterEach(() => {
      preventDefaultSpy.mockReset();
      event = null;
      onSelectSpy.mockReset();
      changeHighlightSpy.mockReset();
    });

    test("should do nothing for unrelated keys", () => {
      instance.onKeyDown(event);

      expect(instance.debouncedOnChange.flush).not.toHaveBeenCalled();
      expect(onSelectSpy).not.toHaveBeenCalled();
      expect(setStateSpy).not.toHaveBeenCalled();
      expect(preventDefaultSpy).not.toHaveBeenCalled();
      expect(changeHighlightSpy).not.toHaveBeenCalled();
    });

    test("should flush debounce on Enter key", () => {
      event.key = "Enter";
      instance.onKeyDown(event);

      expect(instance.debouncedOnChange.flush).toHaveBeenCalledTimes(1);
    });

    test("should run onSelect on Enter key with highlighted item", () => {
      const index = 10;
      event.key = "Enter";
      instance.state.highlightedIndex = index;
      instance.onKeyDown(event);

      expect(onSelectSpy).toHaveBeenCalledWith(index);
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

  describe("onSelect", () => {
    let items, onSelectSpy, blurSpy;
    beforeEach(() => {
      items = [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" }
      ];
      onSelectSpy = jest.fn();
      instance.props = {
        ...instance.props,
        onSelect: onSelectSpy,
        items
      };
      blurSpy = jest.fn();
      instance.input = { blur: blurSpy };
    });
    afterEach(() => {
      items = null;
      onSelectSpy.mockReset();
      instance.props = null;
      blurSpy.mockReset;
      instance.input = null;
    });

    test("should update inputValue state to selected item label", () => {
      const index = 1;
      instance.onSelect(index);
      const stateChange = setStateSpy.mock.calls[0][0];

      expect(stateChange).toHaveProperty("inputValue", items[index].label);
    });

    test("should call onSelect prop with selected item value", () => {
      const index = 1;
      instance.onSelect(index);

      expect(onSelectSpy).toHaveBeenCalledWith(items[index].value);
    });

    test("should blur input", () => {
      instance.onSelect(1);

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
    test("should set focused state to false", () => {
      instance.onBlur();
      const stateChange = setStateSpy.mock.calls[0][0];
      expect(stateChange).toHaveProperty("focused", false);
    });

    test("should reset highlightIndex", () => {
      instance.onBlur();
      const stateChange = setStateSpy.mock.calls[0][0];
      expect(stateChange).toHaveProperty("highlightedIndex", -1);
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
    let currentTarget, event, scroller, onSelectSpy;
    beforeEach(() => {
      currentTarget = {};
      event = { currentTarget };
      scroller = {
        wrapper: {
          childNodes: [1, 2, currentTarget, 4]
        }
      };
      instance.scroller = scroller;
      onSelectSpy = jest.fn();
      instance.onSelect = onSelectSpy;
    });
    afterEach(() => {
      currentTarget = null;
      event = null;
      scroller = null;
      instance.scroller = null;
      onSelectSpy.mockReset();
      instance.onSelect = null;
    });

    test("should pass event currentTarget`s index to onSelect", () => {
      instance.onItemClick(event);

      expect(onSelectSpy).toHaveBeenCalledWith(2);
    });
  });
});
