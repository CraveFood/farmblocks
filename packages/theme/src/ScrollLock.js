import React from "react";
import { createGlobalStyle, css } from "styled-components";

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

const GlobalStyle = createGlobalStyle`
  body {
    ${({ scrollWidth }) =>
      scrollWidth !== undefined
        ? css`
            overflow: hidden;
            padding-right: ${scrollWidth}px;
          `
        : ""}
  }
`;

const ScrollLock = () => {
  const [scrollWidth] = React.useState(getScrollWidth());

  return <GlobalStyle lock scrollWidth={scrollWidth} />;
};

export default ScrollLock;
