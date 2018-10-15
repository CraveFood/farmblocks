import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";
import { Item } from "@crave/farmblocks-input-select";

import ScrollBox from "./ScrollBox";

export const menuPropTypes = {
  maxMenuHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onScrollReachEnd: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      image: PropTypes.string
    })
  ),
  onItemClick: PropTypes.func,
  highlightedIndex: PropTypes.number,
  footer: PropTypes.node
};

const renderItem = (item, onClick, highlighted) => (
  <DropdownItemWrapper
    key={item.value}
    highlighted={highlighted}
    onMouseDown={onClick}
  >
    <Item label={item.label} image={item.image} />
  </DropdownItemWrapper>
);

const MenuWrapper = styled(DropdownMenuWrapper)`
  top: 72px;
  position: absolute;
  width: 100%;
`;

const Menu = ({
  maxMenuHeight,
  onScrollReachEnd,
  innerRef,
  items,
  onItemClick,
  highlightedIndex,
  footer
}) => {
  if (!footer && !items.length) {
    return null;
  }
  return (
    <MenuWrapper>
      <ScrollBox
        maxHeight={maxMenuHeight}
        onReachEnd={onScrollReachEnd}
        ref={innerRef}
      >
        {items.map((item, index) =>
          renderItem(item, onItemClick, index === highlightedIndex)
        )}
        <DropdownItemWrapper footer>{footer}</DropdownItemWrapper>
      </ScrollBox>
    </MenuWrapper>
  );
};
Menu.defaultProps = {
  items: []
};
Menu.propTypes = {
  ...menuPropTypes,
  innerRef: PropTypes.func
};

export default Menu;
