import * as React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes } from "@crave/farmblocks-text";
import Button from "@crave/farmblocks-button";
import StyledBar from "./styledComponents/SelectionBar";

const SelectionBar = props => {
  const { selectedRows, clearSelection, height, title, children } = props;
  const clearButtonClick = clearFn => () => clearFn();

  return (
    <StyledBar height={height}>
      <div className="title">
        <Text title size={fontSizes.LARGE}>
          {title(selectedRows.length)}
        </Text>
      </div>
      <div className="clear">
        {clearSelection && (
          <Button onClick={clearButtonClick(clearSelection)}>
            {props.clearButtonLabel}
          </Button>
        )}
      </div>
      {children && <div className="actions">{children}</div>}
    </StyledBar>
  );
};

SelectionBar.defaultProps = {
  selectedRows: [],
  title: itemCount =>
    itemCount === 1 ? "1 Item selected" : `${itemCount} Items selected`,
  clearButtonLabel: "Clear",
  height: "64px",
};

SelectionBar.propTypes = {
  selectedRows: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.func,
  clearSelection: PropTypes.func,
  clearButtonLabel: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

export default SelectionBar;
