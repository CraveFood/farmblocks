import debounce from "lodash.debounce";

import ScrollBox from "./ScrollBox";

jest.mock("lodash.debounce");

describe("Search Fields / ScrollBox", () => {
  let addEventListenerSpy, removeEventListenerSpy, instance;
  beforeEach(() => {
    debounce.mockClear();
    addEventListenerSpy = jest.fn();
    removeEventListenerSpy = jest.fn();
    instance = new ScrollBox();
  });
  afterEach(() => {
    addEventListenerSpy.mockReset();
    removeEventListenerSpy.mockReset();
    instance = null;
  });

  describe("event listeners", () => {
    let ref;
    beforeEach(() => {
      ref = {
        addEventListener: addEventListenerSpy,
        removeEventListener: removeEventListenerSpy
      };
      instance.wrapper = ref;
    });
    afterEach(() => {
      ref = null;
    });

    test("should listen to scroll events on mount", () => {
      instance.componentDidMount();

      expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        "scroll",
        instance.onScroll
      );
    });

    test("should stop listening to scroll events on unmount", () => {
      instance.componentWillUnmount();

      expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        "scroll",
        instance.onScroll
      );
    });
  });

  describe("centerChildByIndex", () => {
    let childNodes, ref;
    beforeEach(() => {
      childNodes = [
        { offsetTop: 10, clientHeight: 100 },
        { offsetTop: 110, clientHeight: 100 },
        { offsetTop: 210, clientHeight: 100 }
      ];
      ref = {
        scrollTop: 0,
        offsetTop: 10,
        clientHeight: 200,
        childNodes
      };
      instance.wrapper = ref;
    });
    afterEach(() => {
      childNodes = null;
      ref = null;
    });

    test("should do nothing for invalid index", () => {
      const scroll = Math.random();
      ref.scrollTop = scroll;
      instance.centerChildByIndex(-1);

      expect(ref.scrollTop).toBe(scroll);
    });

    test("should center child", () => {
      const childIndex = 1;
      const contentHeight = childNodes.reduce(
        (acc, node) => acc + node.clientHeight,
        0
      );

      const expectedResult = (contentHeight - ref.clientHeight) / 2;

      instance.centerChildByIndex(childIndex);
      const result = ref.scrollTop;

      expect(result).toBe(expectedResult);
    });

    test("should have same results no matter where the component is in document", () => {
      const originalPosition = ref.scrollTop;

      instance.centerChildByIndex(1);
      const firstPosition = ref.scrollTop;

      ref.scrollTop = originalPosition;

      ref.offsetTop += 500;
      childNodes[1].offsetTop += 500;
      instance.centerChildByIndex(1);
      const secondPosition = ref.scrollTop;

      expect(firstPosition).not.toBe(originalPosition);
      expect(firstPosition).toBe(secondPosition);
    });
  });

  describe("checkScrollPosition", () => {
    let ref, setStateSpy;
    beforeEach(() => {
      ref = {
        scrollHeight: 300,
        scrollTop: 0,
        clientHeight: 200
      };
      setStateSpy = jest.fn();
      instance.wrapper = ref;
      instance.setState = setStateSpy;
    });
    afterEach(() => {
      ref = null;
      instance.wrapper = null;
      setStateSpy.mockReset();
    });

    test("should set atEnd state to false when scroll is NOT at bottom", () => {
      instance.checkScrollPosition();
      expect(setStateSpy).toHaveBeenCalledWith({ atEnd: false });
    });

    describe("atEnd", () => {
      let onReachEndSpy;
      beforeEach(() => {
        onReachEndSpy = jest.fn();
        instance.props = { onReachEnd: onReachEndSpy };
      });
      afterEach(() => {
        onReachEndSpy.mockReset();
      });

      test("should set atEnd state to true when scroll IS at bottom", () => {
        ref.scrollTop = 100;
        instance.checkScrollPosition();
        const setStateFunc = setStateSpy.mock.calls[0][0];

        const newState = setStateFunc({ atEnd: false });
        expect(newState).toEqual({ atEnd: true });
      });

      test("should call onReachEnd if atEnd state was false", () => {
        ref.scrollTop = 100;
        instance.checkScrollPosition();
        const setStateFunc = setStateSpy.mock.calls[0][0];

        setStateFunc({ atEnd: false });
        expect(onReachEndSpy).toHaveBeenCalledTimes(1);
      });

      test("should NOT call onReachEnd if atEnd state was true", () => {
        ref.scrollTop = 100;
        instance.checkScrollPosition();
        const setStateFunc = setStateSpy.mock.calls[0][0];

        setStateFunc({ atEnd: true });
        expect(onReachEndSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe("onScroll", () => {
    test("should debounce scroll events", () => {
      expect(debounce).toHaveBeenCalledWith(instance.checkScrollPosition, 300);
    });
  });
});
