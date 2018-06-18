import { injectGlobal } from "styled-components";
import { configure } from "@storybook/react";

const req = require.context(
  "../",
  true,
  /^((?![\\/]node_modules).)*\.story\.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

injectGlobal`

@font-face {
  font-family: 'lato';
  src: url('./lato-regular-webfont.woff2') format('woff2'),
  url('./lato-regular-webfont.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'lato';
  src: url('./lato-semibold-webfont.woff2') format('woff2'),
  url('./lato-semibold-webfont.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'lato';
  src: url('./lato-light-webfont.woff2') format('woff2'),
  url('./lato-light-webfont.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

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
  .wg-order:before {
    content: "\\e906";
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

  .wg-close:before {
    content: "\\e965";
  }

  .wg-alert:before {
    content: "\\e92c";
  }

  .wg-small-arrow-right:before {
    content: "\\e944";
  }

  .wg-check:before {
    content: "\\e91b";
  }

  .wg-checker:before {
    content: "\\e949";
  }

  .wg-place:before {
    content: "\\e972";
  }

  .wg-external-link:before {
    content: "\\e973";
  }

  .wg-small-arrow-bottom:before {
    content: "\\e942";
  }

  .wg-small-arrow-top:before {
    content: "\\e945";
  }

  .wg-search:before {
    content: "\\e941";
  }

  .wg-close-int:before {
    content: "\\e91d";
  }

  .wg-purveyor:before {
    content: "\\e908";
  }

  .wg-question:before {
    content: "\\e93d";
  }

  .wg-add:before {
    content: "\\e90f";
  }

  .wg-minus:before {
    content: "\\e974";
  }

  .wg-location:before {
    content: "\\e931";
  }

  .wg-order,
  .wg-meat,
  .wg-loading,
  .wg-close,
  .wg-alert,
  .wg-small-arrow-right,
  .wg-check,
  .wg-checker,
  .wg-edit,
  .wg-place,
  .wg-external-link,
  .wg-small-arrow-bottom,
  .wg-small-arrow-top,
  .wg-search,
  .wg-close-int,
  .wg-purveyor,
  .wg-question,
  .wg-minus,
  .wg-add,
  .wg-location {
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
