import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import StoryRouter from "storybook-react-router";

import SideNav from "./SideNav";
import NavItem from "./NavItem";
import NavButton from "./NavButton";

const NavWithItems = () => {
  const [expanded, setExpanded] = useState(false);
  const whiteWithBorder = {
    backgroundColor: "white",
    borderTop: `1px solid ${colors.GREY_16}`,
  };

  return (
    <div>
      <TopNav>
        <NavButton onClick={() => setExpanded(e => !e)} active={!expanded} />
      </TopNav>
      <SideNav offsetTop="60px" expanded={expanded}>
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
              css={whiteWithBorder}
            >
              Account
            </NavItem>
            <NavItem icon="wg-edit" css={whiteWithBorder}>
              Settings
            </NavItem>
          </div>
        </NavList>
      </SideNav>
      <Content expanded={expanded} offsetTop="60px">
        <h1>MAIN CONTENT</h1>
        <Lorem />
      </Content>
    </div>
  );
};
export const navWithItems = () => <NavWithItems />;

export const withRouterAndCustomHighlightColor = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(true);
  const tabs = ["purveyor", "order", "search", "meat"];
  const highlightColor = colors.AVOCADO;

  return (
    <>
      <SideNav expanded={expanded}>
        <NavHeader>
          <NavButton
            highlightColor={highlightColor}
            onClick={() => setExpanded(e => !e)}
            active
          />
          <h1 style={{ margin: "0 0 0 8px" }}>Routes</h1>
        </NavHeader>
        {tabs.map(tab => (
          <NavLink to={`/${tab}`} key={tab} style={{ textDecoration: "none" }}>
            <NavItem
              activated={location.pathname === `/${tab}`}
              icon={`wg-${tab}`}
              highlightColor={highlightColor}
            >
              {tab}
            </NavItem>
          </NavLink>
        ))}
      </SideNav>

      <Content expanded={expanded}>
        <Switch>
          {tabs.map(tab => (
            <Route path={`/${tab}`} key={tab}>
              <h1>{tab}</h1>
              <Lorem />
            </Route>
          ))}
          <Route>
            <h1>select a route</h1>
          </Route>
        </Switch>
      </Content>
    </>
  );
});
withRouterAndCustomHighlightColor.story = {
  decorators: [StoryRouter()],
};

export default { title: "SideNav" };

// story only components

const Content = styled.div`
  height: 100vh;
  width: 600px;
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop};`};

  padding: 18px;
  transition: margin 0.25s;
  transition-timing-function: ease-in-out;
  margin-left: ${({ expanded }) => (expanded ? 270 : 56)}px;
`;

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

  z-index: 2;
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
