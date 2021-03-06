import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SideNav from "./SideNav";
import { GREY_48 } from "./components/NavButton/NavButton.styled";
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
      const pageWrapper = getByTestId("pageWrapper-navbar");

      expect(navbar).toBeVisible();
      expect(navbar).toHaveStyle(
        `width:${SideNav.defaultProps.collapsedWidth};`,
      );
      expect(pageWrapper).toHaveStyle(
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
      const pageWrapper = getByTestId("pageWrapper-navbar");

      expect(toggleButton).toHaveStyle(`color: ${GREY_48};`);
      expect(navbar).toHaveStyle(
        `width:${SideNav.defaultProps.expandedWidth};`,
      );
      expect(pageWrapper).toHaveStyle(
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
      const overlay = getByTestId("overlay-pageWrapper");

      expect(navbar).toHaveStyle(
        `width: ${SideNav.defaultProps.expandedWidth};`,
      );
      expect(overlay).toBeVisible();
      expect(getByTestId("close-navbar")).toBeVisible();
    });
  });

  describe("FullScreen", () => {
    it("should render sidebar without width (0px)", () => {
      const { getByTestId } = render(<SideNavFullScreen />);
      const navbar = getByTestId("navbar-collapsed");

      expect(navbar).toBeVisible();
      expect(navbar).toHaveStyle(`width: 1px;`);
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

      expect(navbar).toHaveStyle(`
         width: 100%;
         justify-content: center;
      `);
      expect(getByTestId("close-navbar")).toBeVisible();
    });
  });
});
