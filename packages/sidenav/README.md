![Farmblocks logo](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks SideNav <!-- omit in toc -->

A React Sidebar Navigation component

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Helpers](#helpers)
  - [PageWrapper](#pagewrapper)
- [License](#license)

## Installation

```sh
npm install @crave/farmblocks-modal
```

or with yarn

```sh
yarn add @crave/farmblocks-modal
```

## Usage

Simplest example

```jsx
import React from "react";
import { render } from "react-dom";
import SideNav from "@crave/farmblocks-sidenav";

const App = () => (
  <SideNav>
    <div>Sidebar Content</div>
  </SideNav>
);

render(<App />, document.getElementById("root"));
```

Simplest example with NavItem and PageWrapper

```jsx
import React from "react";
import { render } from "react-dom";
import SideNav, { NavItem, PageWrapper } from "@crave/farmblocks-sidenav";

const App = () => (
  <>
    <SideNav>
      <NavItem activated>Item 1 (activated)</NavItem>
      <NavItem>Item 2</NavItem>
      <NavItem>Item 3</NavItem>
    </SideNav>
    <PageWrapper expanded>
      <h1>Page Content</h1>
    </PageWrapper>
  </>
);

render(<App />, document.getElementById("root"));
```

## API

## License

MIT
