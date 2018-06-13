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
}) => {
  if (!footer && !items.length) return null;
  return (
    <DropdownMenuWrapper onMouseDown={onMenuMouseDown}>
      <ScrollBox
        maxHeight={maxMenuHeight}
        onReachEnd={onScrollReachEnd}
        ref={innerRef}
      >
        {items.length
          ? items.map((item, index) =>
              renderItem(item, onItemClick, index === highlightedIndex)
            )
          : null}
        {footer}
      </ScrollBox>
    </DropdownMenuWrapper>
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
