import * as React from "react";
import PropTypes from "prop-types";
import Button from "@crave/farmblocks-button";
import Popover from "@crave/farmblocks-popover";
import FormWrapper from "@crave/farmblocks-form-wrapper";

const FilterPopover = props => {
  return (
    <Popover
      padding="0px"
      align={props.align}
      trigger={
        <Button
          rightIcon="wg-small-arrow-bottom"
          boxShadow="none"
          padding="0 8px"
          activated={props.hasValue}
        >
          {props.triggerLabel}

          {props.hasValue && (
            <div className="icon" style={{ marginLeft: 8 }}>
              <i className="wg-check-box" />
            </div>
          )}
        </Button>
      }
      content={dismiss => (
        <FormWrapper
          onCancel={dismiss}
          onSave={e => {
            props.dismissOnSave && dismiss();
            props.onFormSaveClick(e, dismiss);
          }}
          saveLabel={props.formSaveLabel}
          title={props.formTitle}
          loading={props.formLoading}
        >
          {props.formContent}
        </FormWrapper>
      )}
    />
  );
};

FilterPopover.defaultProps = {
  formSaveLabel: "Filter"
};

FilterPopover.propTypes = {
  triggerLabel: PropTypes.string.isRequired,
  formTitle: PropTypes.string,
  formContent: PropTypes.node,
  formLoading: PropTypes.bool,
  formSaveLabel: PropTypes.string,
  onFormSaveClick: PropTypes.func,
  align: PropTypes.string,
  dismissOnSave: PropTypes.bool,
  hasValue: PropTypes.bool
};

export default FilterPopover;
