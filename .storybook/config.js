import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  configure,
  addDecorator,
  getStorybook,
  setAddon,
} from "@storybook/react";
import createPercyAddon from "@percy-io/percy-storybook";

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

const GlobalStyle = createGlobalStyle`

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

  .wg-check-box:before {
    content: "\\e978";
  }

  .wg-list:before {
    content: "\\e92f";
  }

  .wg-list-view:before {
    content: "\\e963";
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
  .wg-location,
  .wg-list,
  .wg-list-view,
  .wg-check-box {
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

const theme = {
  fontWeights: {
    title: 600,
    light: 300,
  },
};

function withGlobalStyle(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </React.Fragment>
  );
}

addDecorator(withGlobalStyle);

configure(require.context("../packages/", true, /\.story\.js$/), module);

serializeStories(getStorybook);
