import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import StoryRouter from "storybook-react-router";
import { useMediaQuery } from "react-responsive";

import { SideNavWithButtons } from "./SideNav";
import { FULLWIDTH, PUSH, OVERLAY } from "./constants/variants";
import NavItem from "./NavItem";
import Content from "./Content";

const tabs = ["purveyor", "order", "search", "meat"];

export const PushMenu = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);

  return (
    <>
      <SideNavWithButtons
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
      >
        <NavHeader />
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
  const highlightColor = colors.AVOCADO;

  return (
    <>
      <SideNavWithButtons
        expanded={expanded}
        variant={OVERLAY}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        highlightColor={highlightColor}
      >
        <NavHeader />
        <NavItems
          tabs={tabs}
          location={location}
          onClick={() => setExpanded(false)}
        />
      </SideNavWithButtons>

      <Content
        variant={OVERLAY}
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

  return (
    <>
      <SideNavWithButtons
        expanded={expanded}
        variant={FULLWIDTH}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
      >
        <NavHeader />
        <NavItems
          tabs={tabs}
          location={location}
          onClick={() => setExpanded(false)}
        />
      </SideNavWithButtons>

      <Content variant={FULLWIDTH} expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </Content>
    </>
  );
});

fullScreenMenu.story = {
  decorators: [StoryRouter()],
};

export const navWithJsMediaQuery = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 760 });

  const toggle = () => setExpanded(e => !e);
  const variant = isMobile ? FULLWIDTH : PUSH;
  const sidebarColor = isMobile ? "white" : undefined;
  const collapseAfterClick = isMobile ? () => setExpanded(false) : undefined;

  return (
    <div>
      <TopNav isPush={!isMobile} />
      <SideNavWithButtons
        expanded={expanded}
        onToggle={toggle}
        variant={variant}
        background={sidebarColor}
        onClose={() => setExpanded(false)}
        offsetTop="56px"
      >
        <NavItems
          tabs={tabs}
          location={location}
          onClick={collapseAfterClick}
        />
      </SideNavWithButtons>
      <Content expanded={expanded} variant={variant} offsetTop="56px">
        <NavRoutes tabs={tabs} />
      </Content>
    </div>
  );
});

navWithJsMediaQuery.story = {
  decorators: [StoryRouter()],
};

/* eslint-disable */

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

const NavRoutes = ({ tabs }) => (
  <div
    style={{
      margin: "0 24px",
      padding: "24px",
      height: "100vh",
      boxSizing: "border-box",
    }}
  >
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

// story helper components

const TopNav = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px;
  height: 56px;
  box-shadow: 0px 1px 1px 0px ${colors.GREY_32};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  z-index: ${({ isPush }) => (!isPush ? 90 : 101)};
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  min-height: 56px;
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
