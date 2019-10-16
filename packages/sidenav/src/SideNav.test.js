import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { colors } from "@crave/farmblocks-theme";

import SideNav from "./SideNav";
import { GREY_48 } from "./NavButton.styled";
import {
  SideNavPush,
  SideNavOverlay,
  SideNavFullScreen,
} from "./SideNav.story";

describe("SideNav", () => {
  describe("Push (default)", () => {
    it("should display navbar with collapsed width", () => {
      const { getByTestId } = render(<SideNavPush />);
      const navbar = getByTestId("navbar-collapsed");
      const content = getByTestId("content-navbar");

      expect(navbar).toBeVisible();
      expect(navbar).toHaveStyle(
        `width:${SideNav.defaultProps.collapsedWidth};`,
      );
      expect(content).toHaveStyle(
        `margin-left:${SideNav.defaultProps.collapsedWidth};`,
      );
    });

    it("should display hamburguer button and hide close button", () => {
      const { getByTestId } = render(<SideNavPush />);
      const toggleButton = getByTestId("toggle-navbar");

      expect(toggleButton).toBeVisible();
      expect(toggleButton).toHaveStyle(
        `color: ${SideNav.defaultProps.highlightColor};`,
      );
      expect(getByTestId("close-navbar")).not.toBeVisible();
    });

    it("should increase sidebar width and ease hamburguer button color", () => {
      const { getByTestId } = render(<SideNavPush />);
      const toggleButton = getByTestId("toggle-navbar");

      fireEvent.click(toggleButton);

      const navbar = getByTestId("navbar-expanded");
      const content = getByTestId("content-navbar");

      expect(toggleButton).toHaveStyle(`color: ${GREY_48};`);
      expect(navbar).toHaveStyle(
        `width:${SideNav.defaultProps.expandedWidth};`,
      );
      expect(content).toHaveStyle(
        `margin-left:${SideNav.defaultProps.expandedWidth};`,
      );
    });
  });

  describe("Overlay", () => {
    it("should render sidebar without width (0px)", () => {
      const { getByTestId } = render(<SideNavOverlay />);
      const navbar = getByTestId("navbar-collapsed");

      expect(navbar).toBeVisible();
      expect(navbar).toHaveStyle(`width: 0px;`);
    });

    it("should display hamburguer button and hide close button", () => {
      const { getByTestId } = render(<SideNavOverlay />);
      const toggleButton = getByTestId("toggle-navbar");

      expect(toggleButton).toBeVisible();
      expect(toggleButton).toHaveStyle(
        `color: ${SideNav.defaultProps.highlightColor};`,
      );
      expect(getByTestId("close-navbar")).not.toBeVisible();
    });

    it("should open sidebar, show close button", () => {
      const { getByTestId } = render(<SideNavOverlay />);
      const toggleButton = getByTestId("toggle-navbar");

      fireEvent.click(toggleButton);

      const navbar = getByTestId("navbar-expanded");
      const content = getByTestId("content-navbar");

      expect(navbar).toHaveStyle(
        `width: ${SideNav.defaultProps.expandedWidth};`,
      );
      expect(content).toHaveStyle(`background-color:${colors.GREY_16};`);
      expect(getByTestId("close-navbar")).toBeVisible();
    });
  });

  describe("FullScreen", () => {
    it("should render sidebar without width (0px)", () => {
      const { getByTestId } = render(<SideNavFullScreen />);
      const navbar = getByTestId("navbar-collapsed");

      expect(navbar).toBeVisible();
      expect(navbar).toHaveStyle(`width: 0px;`);
    });

    it("should display hamburguer button and hide close button", () => {
      const { getByTestId } = render(<SideNavFullScreen />);
      const toggleButton = getByTestId("toggle-navbar");

      expect(toggleButton).toBeVisible();
      expect(toggleButton).toHaveStyle(
        `color: ${SideNav.defaultProps.highlightColor};`,
      );
      expect(getByTestId("close-navbar")).not.toBeVisible();
    });

    it("should open fullscreen menu, show close button", () => {
      const { getByTestId } = render(<SideNavFullScreen />);
      const toggleButton = getByTestId("toggle-navbar");

      fireEvent.click(toggleButton);

      const navbar = getByTestId("navbar-expanded");

      expect(navbar).toHaveStyle(
        `  width: 100%;
         justify-content: center;
         backdrop-filter: blur(5px);
         opacity: 0.9;
      `,
      );
      expect(getByTestId("close-navbar")).toBeVisible();
    });
  });
});
