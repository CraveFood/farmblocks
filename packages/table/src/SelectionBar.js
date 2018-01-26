import * as React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes } from "@crave/farmblocks-text";
import Button, { buttonTypes } from "@crave/farmblocks-button";
import StyledBar from "./styledComponents/SelectionBar";

const SelectionBar = props => {
  const {
    selectedRows,
    clearSelection,
    title,
    primaryAction,
    secondaryAction
  } = props;
  const hasActions = !!secondaryAction || !!primaryAction;
  const hasSecondaryButton = !!secondaryAction;
  const clearButtonClick = clearFn => evt => clearFn();
  const buttonClick = selectedRows => actionFunction => evt =>
    actionFunction(selectedRows);
  const barProps = { hasActions, hasSecondaryButton };
  return (
    <StyledBar {...barProps}>
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
      <div className="actions">
        {secondaryAction && (
          <Button
            leftIcon={props.secondaryButtonLeftIcon}
            type={buttonTypes.SECONDARY}
            onClick={buttonClick(selectedRows)(secondaryAction)}
          >
            {props.secondaryButtonLabel}
          </Button>
        )}
        {primaryAction && (
          <div className="primaryButton">
            <Button
              leftIcon={props.primaryButtonLeftIcon}
              type={buttonTypes.PRIMARY}
              onClick={buttonClick(selectedRows)(primaryAction)}
            >
              {props.primaryButtonLabel}
            </Button>
          </div>
        )}
      </div>
    </StyledBar>
  );
};

SelectionBar.defaultProps = {
  selectedRows: [],
  title: itemCount =>
    itemCount === 1 ? "1 Item selected" : `${itemCount} Items selected`,
  clearButtonLabel: "Clear"
};

SelectionBar.propTypes = {
  selectedRows: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.func,
  clearSelection: PropTypes.func,
  clearButtonLabel: PropTypes.string,
  primaryAction: PropTypes.func,
  primaryButtonLeftIcon: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryButtonLeftIcon: PropTypes.string,
  secondaryButtonLabel: PropTypes.string
};

export default SelectionBar;
