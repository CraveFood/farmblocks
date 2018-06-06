import React from "react";
import PropTypes from "prop-types";

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
  onMenuMouseDown: PropTypes.func,
  highlightedIndex: PropTypes.number,
  footer: PropTypes.node
};

const renderItem = (item, onClick, highlighted) => (
  <DropdownItemWrapper
    key={item.value}
    highlighted={highlighted}
    onClick={onClick}
  >
    <Item label={item.label} image={item.image} />
  </DropdownItemWrapper>
);

const Menu = ({
  onMenuMouseDown,
  maxMenuHeight,
  onScrollReachEnd,
  innerRef,
  items,
  onItemClick,
  highlightedIndex,
  footer
}) => (
  <DropdownMenuWrapper onMouseDown={onMenuMouseDown}>
    <ScrollBox
      maxHeight={maxMenuHeight}
      onReachEnd={onScrollReachEnd}
      ref={innerRef}
    >
      {items &&
        items.map((item, index) => {
          return renderItem(item, onItemClick, index === highlightedIndex);
        })}
      {footer}
    </ScrollBox>
  </DropdownMenuWrapper>
);
Menu.propTypes = {
  ...menuPropTypes,
  innerRef: PropTypes.func
};

export default Menu;
