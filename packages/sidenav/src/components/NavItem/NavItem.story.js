import React from "react";
import { LgMeats, MdSearch } from "@crave/farmblocks-icon";

import { FULLSCREEN } from "../../constants/variants";
import useToggle from "../../utils/useToggle";
import NavItem from "./NavItem";

export default { title: "SideNav/NavItem", component: NavItem };

export const NavItems = () => {
  const NavItemWithToggle = props => {
    const [active, { toggle }] = useToggle(false);
    return <NavItem active={active} onClick={toggle} {...props} />;
  };

  return (
    <div>
      <NavItemWithToggle>Simple Item</NavItemWithToggle>
      <NavItemWithToggle image="https://picsum.photos/640/?image=234">
        Item with Image
      </NavItemWithToggle>
      <NavItemWithToggle icon={<LgMeats />}>Item with Icon</NavItemWithToggle>
      <NavItemWithToggle variant={FULLSCREEN} icon={<MdSearch />}>
        Item with fullScreen variant and Icon
      </NavItemWithToggle>
    </div>
  );
};
