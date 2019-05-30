/* eslint-disable no-param-reassign, consistent-return */

import { useEffect } from "react";

export const useESCKey = ({ condition, element, listener }) =>
  useEffect(() => {
    if (condition) {
      const handleKeyDown = event => {
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
      const originalOverflow = element.style?.overflow;

      element.style.overflow = "hidden";

      return () => {
        element.style.overflow = originalOverflow || "";
      };
    }
  }, [condition]);
