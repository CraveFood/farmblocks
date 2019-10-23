import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Text from "@crave/farmblocks-text";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import StoryRouter from "storybook-react-router";
import { useMediaQuery } from "react-responsive";

import SideNav from "./SideNav";
import variants, { FULLSCREEN, PUSH, OVERLAY } from "./constants/variants";
import NavItem from "./components/NavItem";
import PageWrapper from "./helpers/PageWrapper";

const tabs = ["purveyor", "order", "search", "meat"];

const useToggle = initialState => {
  const [expanded, setExpanded] = useState(initialState);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);
  const expand = () => setExpanded(true);

  return [expanded, { toggle, collapse, expand }];
};

const NavItemWithToggle = props => {
  const [active, { toggle }] = useToggle(false);
  return <NavItem active={active} onClick={toggle} {...props} />;
};

export const NavItems = () => (
  <div>
    <NavItemWithToggle>Simple Item</NavItemWithToggle>
    <NavItemWithToggle image="https://picsum.photos/640/?image=234">
      Item with Image
    </NavItemWithToggle>
    <NavItemWithToggle icon="wg-meat">Item with Icon</NavItemWithToggle>
    <NavItemWithToggle variant={variants.FULLSCREEN} icon="wg-search">
      Item with fullScreen variant and Icon
    </NavItemWithToggle>
  </div>
);

export const SideNavSimple = () => (
  <SideNav render={() => <div>Sidebar Content</div>} />
);

export const CompleteSideNavSimple = () => (
  <>
    <SideNav
      render={props => (
        <>
          <NavItem active {...props}>
            Item 1 (active)
          </NavItem>
          <NavItem {...props}>Item 2</NavItem>
          <NavItem {...props}>Item 3</NavItem>
        </>
      )}
    />
    <PageWrapper expanded>
      <h1>Page Content</h1>
    </PageWrapper>
  </>
);

const SideNavPushComp = () => {
  const [expanded, { toggle, collapse }] = useToggle(false);
  const tabs = ["purveyor", "order", "search", "meat"];
  const [selected, setSelected] = useState(tabs[0]);

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
        <LoremBlock variant={PUSH} />
      </PageWrapper>
    </>
  );
};

export const SideNavPush = () => <SideNavPushComp />;

const SideNavOverlayComp = () => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  const handleClick = expanded ? collapse : undefined;

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        variant={OVERLAY}
        render={props => (
          <>
            <NavHeader />
            {tabs.map(tab => (
              <NavItem
                key={tab}
                active={tab === tabs[0]}
                icon={`wg-${tab}`}
                onClick={handleClick}
                {...props}
              >
                {tab}
              </NavItem>
            ))}
          </>
        )}
      />

      <PageWrapper expanded={expanded} variant={OVERLAY} onClick={handleClick}>
        <LoremBlock variant={OVERLAY} />
      </PageWrapper>
    </>
  );
};
export const SideNavOverlay = () => <SideNavOverlayComp />;

const SideNavFullScreenComp = () => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  const handleClick = expanded ? collapse : undefined;

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        variant={FULLSCREEN}
        render={props => (
          <>
            <NavHeader />
            {tabs.map(tab => (
              <NavItem
                key={tab}
                active={tab === tabs[0]}
                icon={`wg-${tab}`}
                onClick={handleClick}
                {...props}
              >
                {tab}
              </NavItem>
            ))}
          </>
        )}
      />

      <PageWrapper expanded={expanded} variant={FULLSCREEN}>
        <LoremBlock variant={FULLSCREEN} />
      </PageWrapper>
    </>
  );
};
export const SideNavFullScreen = () => <SideNavFullScreenComp />;

export const SideNavPushWithRouter = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        render={props => (
          <>
            <NavHeader />
            <NavLinkItems tabs={tabs} location={location} {...props} />
          </>
        )}
      />

      <PageWrapper expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </>
  );
});
SideNavPushWithRouter.story = {
  decorators: [StoryRouter()],
};

export const SideNavOverlayWithRouder = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  const highlightColor = colors.AVOCADO;
  const handleClick = expanded ? collapse : undefined;

  return (
    <>
      <SideNav
        expanded={expanded}
        variant={OVERLAY}
        onToggle={toggle}
        onClose={collapse}
        highlightColor={highlightColor}
        render={props => (
          <>
            <NavHeader />
            <NavLinkItems
              tabs={tabs}
              location={location}
              onClick={collapse}
              {...props}
            />
          </>
        )}
      />

      <PageWrapper variant={OVERLAY} expanded={expanded} onClick={handleClick}>
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </>
  );
});
SideNavOverlayWithRouder.story = {
  decorators: [StoryRouter()],
};

export const SideNavFullScreenWithRouter = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  return (
    <>
      <SideNav
        expanded={expanded}
        variant={FULLSCREEN}
        onToggle={toggle}
        onClose={collapse}
        render={props => (
          <NavLinkItems
            tabs={tabs}
            location={location}
            onClick={collapse}
            {...props}
          />
        )}
      />

      <PageWrapper variant={FULLSCREEN} expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </>
  );
});
SideNavFullScreenWithRouter.story = {
  decorators: [StoryRouter()],
};

export const NavWithJsMediaQuery = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);
  const isMobile = useMediaQuery({ maxWidth: 760 });

  const variant = isMobile ? FULLSCREEN : PUSH;
  const sidebarColor = isMobile ? "white" : undefined;
  const handleClick = isMobile ? collapse : undefined;

  return (
    <div>
      <TopNav isPush={!isMobile} />
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        variant={variant}
        backgroundColor={sidebarColor}
        onClose={collapse}
        offsetTop="56px"
        render={props => (
          <NavLinkItems
            tabs={tabs}
            location={location}
            onClick={handleClick}
            {...props}
          />
        )}
      />
      <PageWrapper expanded={expanded} variant={variant} offsetTop="56px">
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </div>
  );
});
NavWithJsMediaQuery.story = {
  decorators: [StoryRouter()],
};

/* eslint-disable */
const NavLinkItems = ({ tabs, location, onClick, ...props }) => (
  <>
    {tabs.map(tab => (
      <NavLink to={`/${tab}`} key={tab} style={{ textDecoration: "none" }}>
        <NavItem
          active={location.pathname === `/${tab}`}
          onClick={onClick}
          icon={`wg-${tab}`}
          {...props}
        >
          {tab}
        </NavItem>
      </NavLink>
    ))}

    <NavLink to="/account" style={{ textDecoration: "none" }}>
      <NavItem
        image="https://picsum.photos/640/?image=889"
        backgroundColor="white"
        active={location.pathname === "/account"}
        onClick={onClick}
        {...props}
      >
        Account
      </NavItem>
    </NavLink>
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
          <Text upper fontWeight="title" size={32}>
            {tab}
          </Text>
          <Lorem />
        </Route>
      ))}
      <Route>
        <Text upper fontWeight="title" size={32}>
          select a route
        </Text>
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
  <div
    style={{
      margin: "16px 0",
    }}
  >
    <Text>
      Lorem iTextsum dolor sit amet, consectetur adipisicing elit. Qui dicta
      minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum
      alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
      doloribus!
    </Text>
  </div>
);

const LoremBlock = ({ variant }) => (
  <div
    style={{
      margin: "0 24px",
      padding: "24px",
      height: "100vh",
      boxSizing: "border-box",
    }}
  >
    <Text upper fontWeight="title" size={32}>
      {variant}
    </Text>
    <Lorem />
  </div>
);
