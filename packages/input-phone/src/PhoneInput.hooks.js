import { useRef, useEffect, useMemo, useState, useCallback } from "react";
import Fuse from "fuse.js";

const options = {
  shouldSort: true,
  keys: ["name", "nativeNames", "altSpellings", "flag", "callingCode"],
};

export const useCountrySearch = (data, query, priority) => {
  const fuse = useRef(new Fuse(data, options));

  const allCountries = useMemo(() => {
    const codes = priority?.split(",");

    const topCountries = data?.filter(country => codes?.includes(country.code));

    const indexedTopCountries = topCountries?.reduce(
      (acc, country) => ({ ...acc, [country.code]: country }),
      {},
    );

    const orderedTopCountries =
      codes?.map(code => indexedTopCountries[code]) || [];

    return [...orderedTopCountries, ...data];
  }, [data, priority]);

  useEffect(() => {
    fuse.current = new Fuse(data, options);
  }, [data]);

  if (!query) {
    return allCountries;
  }

  return fuse.current.search(query);
};

export const useHighlight = ({ items, listRef, selectFn, cancelFn }) => {
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const changeHighlight = useCallback(
    modifier => {
      setHighlightIndex(index => {
        if (!items.length) {
          return -1;
        }
        const newIndex = index + modifier;
        if (newIndex < -1) {
          return items.length - 1;
        }
        if (newIndex > items.length - 1) {
          return -1;
        }
        return newIndex;
      });
    },
    [items],
  );

  useEffect(() => {
    if (highlightIndex !== -1) {
      listRef?.current?.scrollToItem?.(highlightIndex);
    }
  }, [highlightIndex, listRef]);

  const handleKeyDown = useCallback(
    event => {
      const { key } = event;
      if (key === "Enter") {
        if (highlightIndex === -1) {
          return;
        }

        selectFn(items[highlightIndex].code);
        return;
      }

      if (key === "Escape") {
        setHighlightIndex(-1);
        cancelFn?.();
        return;
      }

      if (key === "ArrowUp") {
        event.preventDefault();
        changeHighlight(-1);
        return;
      }

      if (key === "ArrowDown") {
        event.preventDefault();
        changeHighlight(1);
      }
    },
    [changeHighlight, highlightIndex],
  );

  const resetIndex = useCallback(() => {
    setHighlightIndex(-1);
  }, [setHighlightIndex]);

  return {
    handleKeyDown,
    highlightIndex,
    resetIndex,
  };
};
