/* eslint-disable no-param-reassign, consistent-return */
import { useEffect } from "react";

const getScrollWidth = () => {
  // https://davidwalsh.name/detect-scrollbar-width
  const scrollDiv = document.createElement("div");
  scrollDiv.setAttribute(
    "style",
    `
      width: 100px;
      height: 100px;
      overflow: scroll;
      position: absolute;
      top: -9999px;
    `,
  );
  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

export default ({ condition, element }) =>
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
