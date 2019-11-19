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
