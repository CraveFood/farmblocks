/* eslint-disable no-param-reassign, consistent-return */

import { useEffect, useRef } from "react";

import { getScrollWidth } from "./utils";

export const useESCKey = ({ condition, element, listener }) =>
  useEffect(() => {
    if (condition) {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") listener?.(event);
      };

      element.addEventListener("keydown", handleKeyDown);
      return () => {
        element.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [condition]);

export const useScrollLock = ({ condition, element }) =>
  useEffect(() => {
    if (condition) {
      const originalStyle = element.style.cssText;

      element.style.cssText = `
        ${originalStyle}
        overflow: hidden;
        padding-right: ${getScrollWidth()}px;
      `;

      return () => {
        element.style.cssText = originalStyle;
      };
    }
  }, [condition]);

export const useChangeCallback = ({ currentValue, initialValue, onChange }) => {
  const lastValue = useRef(initialValue);

  useEffect(() => {
    if (currentValue !== lastValue.current) onChange?.();
    lastValue.current = currentValue;
  }, [currentValue]);
};
