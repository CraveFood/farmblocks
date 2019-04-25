import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  DropdownMenuWrapper,
  DropdownItemWrapper,
} from "@crave/farmblocks-dropdown";
import { Item } from "@crave/farmblocks-input-select";

import ScrollBox from "./ScrollBox";

export const defaultKeyNames = {
  valueKey: "value",
  labelKey: "label",
  imageKey: "image",
};

export const keyNamesPropTypes = {
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  imageKey: PropTypes.string,
};

export const menuPropTypes = {
  maxMenuHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onScrollReachEnd: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  onItemClick: PropTypes.func,
  highlightedIndex: PropTypes.number,
  footer: PropTypes.node,
  className: PropTypes.string,
};

const renderItem = (
  item,
  onClick,
  highlighted,
  valueKey,
  labelKey,
  imageKey,
) => (
  <DropdownItemWrapper
    className="itemWrapper"
    key={item[valueKey]}
    highlighted={highlighted}
    onMouseDown={onClick}
  >
    <Item className="item" label={item[labelKey]} image={item[imageKey]} />
  </DropdownItemWrapper>
);

const MenuWrapper = styled(DropdownMenuWrapper)`
  top: 72px;
  position: absolute;
  width: 100%;
`;

const Menu = ({
  className,
  maxMenuHeight,
  onScrollReachEnd,
  innerRef,
  items,
  onItemClick,
  highlightedIndex,
  footer,
  valueKey,
  labelKey,
  imageKey,
}) => {
  if (!footer && !items.length) {
    return null;
  }
  return (
    <MenuWrapper className={className}>
      <ScrollBox
        className="scroll"
        maxHeight={maxMenuHeight}
        onReachEnd={onScrollReachEnd}
        ref={innerRef}
      >
        {items.map((item, index) =>
          renderItem(
            item,
            onItemClick,
            index === highlightedIndex,
            valueKey,
            labelKey,
            imageKey,
          ),
        )}
        <DropdownItemWrapper className="itemWrapper footer" footer>
          {footer}
        </DropdownItemWrapper>
      </ScrollBox>
    </MenuWrapper>
  );
};
Menu.defaultProps = {
  items: [],
  ...defaultKeyNames,
};
Menu.propTypes = {
  ...menuPropTypes,
  ...keyNamesPropTypes,
  innerRef: PropTypes.func,
  className: PropTypes.string,
};

export default Menu;
