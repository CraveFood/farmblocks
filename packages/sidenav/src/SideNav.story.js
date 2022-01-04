import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Text from "@crave/farmblocks-text";
import { useMediaQuery } from "react-responsive";
import {
  MdVendors,
  MdViewList,
  MdOrders,
  MdSearch,
  LgMeats,
} from "@crave/farmblocks-icon";

import SideNav from "./SideNav";
import { FULLSCREEN, PUSH, OVERLAY } from "./constants/variants";
import NavItem from "./components/NavItem";
import SideBar from "./components/SideBar";
import NavButton from "./components/NavButton";
import PageWrapper from "./helpers/PageWrapper";
import useToggle from "./utils/useToggle";

const tabs = ["purveyor", "order", "search", "meat"];
const icons = {
  purveyor: <MdVendors />,
  order: <MdOrders />,
  search: <MdSearch />,
  meat: <LgMeats />,
};

export default {
  title: "SideNav/SideNav",
  component: SideNav,
  decorators: [
    (storyFn) => (
      <div style={{ transform: "scale(1)", minHeight: "500px" }}>
        {storyFn()}
      </div>
    ),
  ],
};

export const SideNavSimple = () => (
  <SideNav render={() => <div>SideBar Content</div>} />
);

export const CompleteSideNavSimple = () => (
  <>
    <SideNav
      render={(props) => (
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

export const DrawerLikeUsingSidebarOnTheRight = () => {
  const Drawer = () => {
    const [expanded, { toggle, collapse }] = useToggle(true);

    return (
      <>
        <SideBar
          expanded={expanded}
          onClose={collapse}
          offsetTop="56px"
          expandedWidth="450px"
          variant={OVERLAY}
          position="right"
          css="box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.16);"
          render={() => <></>}
        />

        <PageWrapper
          expanded={expanded}
          variant={FULLSCREEN}
          css="backgroundcolor: hotpink; height:98vh;"
        >
          <TopNav />
          <NavButton
            onClick={toggle}
            css={`
              position: absolute;
              top: 8px;
              right: 8px;
              left: auto;
              z-index: 100;
            `}
          >
            <MdViewList />
          </NavButton>
        </PageWrapper>
      </>
    );
  };

  return <Drawer />;
};

export const SideNavPush = () => {
  const SideNavPushComp = () => {
    const [expanded, { toggle, collapse }] = useToggle(false);
    const [selected, setSelected] = useState(tabs[0]);

    return (
      <>
        <SideNav
          expanded={expanded}
          onToggle={toggle}
          onClose={collapse}
          render={(props) => (
            <>
              <NavHeader />
              {tabs.map((tab) => (
                <NavItem
                  key={tab}
                  onClick={() => setSelected(tab)}
                  active={tab === selected}
                  icon={icons[tab]}
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

  return <SideNavPushComp />;
};

export const SideNavOverlay = () => {
  const SideNavOverlayComp = () => {
    const [expanded, { toggle, collapse }] = useToggle(false);
    const [selected, setSelected] = useState(tabs[0]);
    const handleClick = (tab) => {
      if (expanded) {
        collapse();
      }
      setSelected(tab);
    };

    return (
      <>
        <SideNav
          expanded={expanded}
          onToggle={toggle}
          onClose={collapse}
          variant={OVERLAY}
          render={(props) => (
            <>
              <NavHeader />
              {tabs.map((tab) => (
                <NavItem
                  key={tab}
                  icon={icons[tab]}
                  active={tab === selected}
                  onClick={() => handleClick(tab)}
                  {...props}
                >
                  {tab}
                </NavItem>
              ))}
            </>
          )}
        />

        <PageWrapper
          expanded={expanded}
          variant={OVERLAY}
          overlayProps={{ onClick: handleClick }}
        >
          <LoremBlock variant={OVERLAY} />
        </PageWrapper>
      </>
    );
  };

  return <SideNavOverlayComp />;
};

export const SideNavFullScreen = () => {
  const SideNavFullScreenComp = () => {
    const [expanded, { toggle, collapse }] = useToggle(false);
    const [selected, setSelected] = useState(tabs[0]);
    const handleClick = (tab) => {
      if (expanded) {
        collapse();
      }
      setSelected(tab);
    };

    return (
      <>
        <SideNav
          expanded={expanded}
          onToggle={toggle}
          onClose={collapse}
          variant={FULLSCREEN}
          render={(props) => (
            <>
              <NavHeader />
              {tabs.map((tab) => (
                <NavItem
                  key={tab}
                  icon={icons[tab]}
                  active={tab === selected}
                  onClick={() => handleClick(tab)}
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

  return <SideNavFullScreenComp />;
};

export const NavWithJsMediaQuery = () => {
  const [selected, setSelected] = useState(tabs[0]);

  const [expanded, { toggle, collapse }] = useToggle(false);
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const handleClick = (tab) => {
    if (expanded) {
      collapse();
    }
    setSelected(tab);
  };

  const variant = isMobile ? FULLSCREEN : PUSH;
  const sidebarColor = isMobile ? "white" : undefined;

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
        render={(props) => (
          <>
            <NavHeader />
            {tabs.map((tab) => (
              <NavItem
                key={tab}
                icon={icons[tab]}
                active={tab === selected}
                onClick={() => handleClick(tab)}
                {...props}
              >
                {tab}
              </NavItem>
            ))}
          </>
        )}
      />
      <PageWrapper expanded={expanded} variant={variant} offsetTop="56px">
        <LoremBlock variant={variant} />
      </PageWrapper>
    </div>
  );
};

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
