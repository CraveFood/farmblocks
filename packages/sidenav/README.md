![Farmblocks logo](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks SideNav <!-- omit in toc -->

A React Sidebar Navigation component

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [SideNav](#sidenav)
  - [NavItem](#navitem)
- [Helpers](#helpers)
  - [PageWrapper](#pagewrapper)
- [License](#license)

## Installation

```sh
npm install @crave/farmblocks-sidenav
```

or with yarn

```sh
yarn add @crave/farmblocks-sidenav
```

## Usage

Simplest example

```jsx
import React from "react";
import { render } from "react-dom";
import SideNav from "@crave/farmblocks-sidenav";

const App = () => <SideNav render={() => <div>Sidebar Content</div>} />;

render(<App />, document.getElementById("root"));
```

Simplest example with NavItem and PageWrapper

```jsx
import React from "react";
import { render } from "react-dom";
import SideNav, { NavItem, PageWrapper } from "@crave/farmblocks-sidenav";

const App = () => (
  <>
    <SideNav
      render={() => (
        <>
          <NavItem active>Item 1 (active)</NavItem>
          <NavItem>Item 2</NavItem>
          <NavItem>Item 3</NavItem>
        </>
      )}
    />
    <PageWrapper expanded>
      <h1>Page Content</h1>
    </PageWrapper>
  </>
);

render(<App />, document.getElementById("root"));
```

Good Example

```jsx
import React from "react";
import { render } from "react-dom";
import SideNav, { NavItem, PageWrapper } from "@crave/farmblocks-sidenav";

const App = () => {
  const [expanded, { toggle, collapse }] = useToggle(false);
  const [selected, setSelected] = useState(tabs[0]);
  const tabs = ["purveyor", "order", "search", "meat"];

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={collapse}
        render={props => (
          <>
            <NavHeader />
            {tabs.map(tab => (
              <NavItem
                key={tab}
                onClick={() => setSelected(tab)}
                active={tab === selected}
                icon={`wg-${tab}`}
                {...props}
              >
                {tab}
              </NavItem>
            ))}
          </>
        )}
      />

      <PageWrapper expanded={expanded}>
        <LoremIpsumBlock />
      </PageWrapper>
    </>
  );
};

render(<App />, document.getElementById("root"));
```

To see these and more examples running, visit our [storybook](https://cravefood.github.io/farmblocks/?path=/story/sidenav--side-nav-overlay)

## API

### SideNav

- **expanded** (_Boolean_) = `true`

  > Whether the sidebar is expanded or collapsed.

- **variant** (`"push"` | `"fullScreen"` | `"overlay"`) = `"push"`

  > Style variant.

- **expandedWidth** (_String_) = `"270px"`

  > Width on expanded `false` state. (only applied on "push" || "overlay" variant)

- **collapsedWidth** (_String_) = `"56px"`

  > Width on expanded `true` state. (only applied on "push" variant)

- **onToggle** (_Function_)

  > Passing this prop will render a hamburguer button on the page top/left corner, that will trigger this function on click.

- **onClose** (_Function_)

  > Passing this prop will render a close button on the sidebar top/right corner when expanded. (only applied on "fullScreen" || "overlay" variant)

- **render** (_Function_)

  > Render the sidebar content, passing as args the following props: highlightColor, variant.

- **highlightColor** (_String_) = `farmblocks.theme.colors.RED_ORANGE`

  > Color used to highlight active/hover nav item and close button.

- **backgroundColor** (_String_) = `farmblocks.theme.colors.SUGAR`

  > Sidebar background color.

- **offsetTop** (_String_) = `"0"`

  > Top spacing gap.

- **zIndex** (_Number_ | _String_) = `100`

  > The sidebar z-index

### NavItem

- **active** (_Boolean_)

  > Whether the item is with active style or not.

- **variant** (`"push"` | `"fullScreen"` | `"overlay"`) = `"push"`

  > On "fullScreen" variant set rounded style, the other ones don't affect this component.

- **children** (_String_)

  > Text content.

- **highlightColor** (_String_) = `farmblocks.theme.colors.RED_ORANGE`

  > Color used to highlight active/hover items.

- **backgroundColor** (_String_)

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

## Helpers

### PageWrapper

Wrapper to help your page follow sidenav variants.

```jsx
import React from "react";
import { render } from "react-dom";
import SideNav, {
  NavItem,
  PageWrapper,
  variants,
} from "@crave/farmblocks-sidenav";

const App = () => (
  <>
    <SideNav variant={variants.OVERLAY} expanded />
    <PageWrapper variant={variants.OVERLAY} expanded>
      <h1>Page Content</h1>
    </PageWrapper>
  </>
);

render(<App />, document.getElementById("root"));
```

**API**

- **expanded** (_Boolean_) = `false`

  > Whether the sidebar is expanded or collapsed.

- **variant** (`"push"` | `"fullScreen"` | `"overlay"`) = `"push"`

  > Sidebar variant style.

- **expandedWidth** (_String_) = `"270px"`

  > Width on expanded `false` state. (only applied on "push" || "overlay" variant)

- **collapsedWidth** (_String_) = `"56px"`

  > Width on expanded `true` state. (only applied on "push" variant)

- **offsetTop** (_String_) = `"0"`

  > Top spacing gap.

## License

MIT
