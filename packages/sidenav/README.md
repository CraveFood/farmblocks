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

### SideNav

- **expanded** (_Boolean_) = `true`

  > Whether the sidebar is exapanded or collapsed.

- **variant** (`"push"` | `"fullScreen"` | `"overlay"`) = `"push"`

  > Style variant.

- **expandedWidth** (_String_) = `"56px"`

  > Width on expanded `false` state. (only applied on "push" || "overlay" variant)

- **collapsedWidth** (_String_) = `"270px"`

  > Width on expanded `true` state. (only applied on "push" variant)

- **onToggle** (_Function_)

  > Passing this prop will render a hamburguer button on the page top/left corner, that will trigger this function on click.

- **onClose** (_Function_) = `"270px"`

  > Passing this prop will render a close button on the sidebar top/right corner when expanded. (only applied on "fullScreen" || "overlay" variant)

- **children** (_Function_)

  > Render props child, contains the following props [highlightColor, variant, expanded, zIndex]

- **highlightColor** (_String_)

  > Color used to highlight active/hover nav item and close button.

- **background** (_String_) = `farmblocks.theme.colors.SUGAR`

  > Sidebar background color.

- **offsetTop** (_String_) = `"0"`

  > Top spacing gap.

- **zIndex** (_Number_ | _String_) = `100`

  > The sidebar z-index

### NavItem

- **activated** (_Boolean_)

  > Whether the item is with active style or not.

- **variant** (`"push"` | `"fullScreen"` | `"overlay"`) = `"push"`

  > Set rounded style on "fullScreen" variant, the other ones don't affect this component.

- **children** (_String_)

  > Text content.

- **highlightColor** (_String_) = `farmblocks.theme.colors.RED_ORANGE`

  > Color used to highlight active/hover items.

- **background** (_String_)

  > NavItem background color.

- **icon** (_String_)

  > Icon class name (don't use `icon` prop along with `image` prop)

- **iconSize** (_String_)

  > Font size for the icon

- **image** (_String_)

  > Image src url (don't use `image` prop along with `icon` prop)

- **imageProps** (_String_)

  > Props for image component, accept any farmblocks-image prop

- **textProps** (_String_)

  > Props for children(text) component, accept any farmblocks-text prop

## Usage

## License

MIT
