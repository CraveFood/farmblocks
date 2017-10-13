import { injectGlobal } from "styled-components";
import { configure } from "@storybook/react";

const req = require.context("../", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

injectGlobal`
@font-face {
  font-family: 'whatsgood-fonticon';
  src: url('./whatsgood-iconfont.eot?vexkpz');
  src: url('./whatsgood-iconfont.eot?vexkpz#iefix') format('embedded-opentype'),
  url('./whatsgood-iconfont.ttf?vexkpz') format('truetype'),
  url('./whatsgood-iconfont.woff?vexkpz') format('woff'),
  url('./whatsgood-iconfont.svg?vexkpz#whatsgood-iconfont') format('svg');
  font-weight: normal;
  font-style: normal;
}
  .wg-meat:before {
    content: "\\e933";
  }

  .wg-loading:before {
    content: "\\e90b";
  }

  .wg-edit:before {
    content: "\\e924";
  }

  .wg-meat,
  .wg-loading,
  .wg-edit {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'whatsgood-fonticon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
