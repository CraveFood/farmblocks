import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import StoryRouter from "storybook-react-router";

import SideNav, { SideNavWithButtons } from "./SideNav";
import NavItem from "./NavItem";
import Content from "./Content";

const NavWithItems = () => {
  const navBarHeight = "60px";
  return (
    <div>
      <TopNav />
      <SideNav expanded mobileVariant="push" offsetTop={navBarHeight}>
        <NavList>
          <div>
            <NavItem activated icon="wg-purveyor">
              Vendors
            </NavItem>
            <NavItem icon="wg-order">Orders</NavItem>
          </div>
          <div>
            <NavItem
              image="https://picsum.photos/640/?image=889"
              background="white"
              activated
            >
              Account
            </NavItem>
            <NavItem icon="wg-edit" background="white">
              Settings
            </NavItem>
          </div>
        </NavList>
      </SideNav>
      <Content expanded offsetTop={navBarHeight}>
        <div style={{ padding: "24px" }}>
          <h1>MAIN CONTENT</h1>
          <Lorem />
        </div>
      </Content>
    </div>
  );
};
export const navWithItems = () => <NavWithItems />;

export const PushMenu = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const tabs = ["purveyor", "order", "search", "meat"];
  const highlightColor = colors.AVOCADO;

  return (
    <>
      <SideNavWithButtons
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        highlightColor={highlightColor}
      >
        <NavHeader>
          <h1 style={{ margin: "8px 8px 8px 48px" }}>Routes</h1>
        </NavHeader>
        <NavItems tabs={tabs} location={location} />
      </SideNavWithButtons>

      <Content expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </Content>
    </>
  );
});
PushMenu.story = {
  decorators: [StoryRouter()],
};

export const overlayMenu = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const tabs = ["purveyor", "order", "search", "meat"];
  const highlightColor = colors.AVOCADO;

  return (
    <>
      <SideNavWithButtons
        expanded={expanded}
        variant="overlay"
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        highlightColor={highlightColor}
      >
        <NavHeader css={{ marginTop: "60px" }} />
        <NavItems
          tabs={tabs}
          location={location}
          onClick={() => setExpanded(false)}
        />
      </SideNavWithButtons>

      <Content
        variant="overlay"
        expanded={expanded}
        onClick={expanded ? () => setExpanded(false) : undefined}
      >
        <NavRoutes tabs={tabs} />
      </Content>
    </>
  );
});
overlayMenu.story = {
  decorators: [StoryRouter()],
};

// block scroll on full screen
export const fullScreenMenu = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const tabs = ["purveyor", "order", "search", "meat"];

  return (
    <>
      <SideNavWithButtons
        expanded={expanded}
        variant="fullWidth"
        mobileVariant="overlay"
        onToggle={toggle}
        onClose={() => setExpanded(false)}
      >
        <div style={{ marginTop: "60px" }} />
        <NavItems
          tabs={tabs}
          location={location}
          onClick={() => setExpanded(false)}
        />
      </SideNavWithButtons>

      <Content variant="fullWidth" mobileVariant="overlay" expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </Content>
    </>
  );
});

fullScreenMenu.story = {
  decorators: [StoryRouter()],
};

const NavRoutes = ({ tabs }) => (
  <div style={{ padding: "24px", height: "100vh", boxSizing: "border-box" }}>
    <Switch>
      {[...tabs, "account"].map(tab => (
        <Route path={`/${tab}`} key={tab}>
          <h1>{tab}</h1>
          <Lorem />
        </Route>
      ))}
      <Route>
        <h1>select a route</h1>
        <Lorem />
      </Route>
    </Switch>
  </div>
);

const NavItems = ({ tabs, location, onClick, ...props }) => (
  <>
    {tabs.map(tab => (
      <NavItem
        key={tab}
        activated={location.pathname === `/${tab}`}
        onClick={onClick}
        icon={`wg-${tab}`}
        as={NavLink}
        to={`/${tab}`}
        style={{ textDecoration: "none" }}
        {...props}
      >
        {tab}
      </NavItem>
    ))}

    <NavItem
      image="https://picsum.photos/640/?image=889"
      background="white"
      activated={location.pathname === "/account"}
      onClick={onClick}
      as={NavLink}
      to="/account"
      style={{ textDecoration: "none" }}
      {...props}
    >
      Account
    </NavItem>
  </>
);

export default { title: "SideNav" };

// story only components

const TopNav = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px;
  height: 60px;
  box-shadow: 0px 1px 1px 0px ${colors.GREY_32};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 101;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Lorem = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
    molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias
    officiis assumenda officia quibusdam deleniti eos cupiditate dolore
    doloribus!
  </p>
);
