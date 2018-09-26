import * as React from "react";
import PropTypes from "prop-types";
import Button from "@crave/farmblocks-button";
import Popover from "@crave/farmblocks-popover";
import { colors } from "@crave/farmblocks-theme";
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
          paddingX="8px"
          activated={props.hasValue}
          textColor={props.triggerTextColor}
          fontSize={props.triggerFontSize}
          fontWeight={props.triggerFontWeight}
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
          onCancel={e => {
            dismiss();
            props.onFormCancelClick && props.onFormCancelClick(e);
          }}
          onSave={e => {
            props.dismissOnSave && dismiss();
            props.onFormSaveClick(e, dismiss);
          }}
          saveLabel={props.formSaveLabel}
          cancelLabel={props.formCancelLabel}
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
  formSaveLabel: "Filter",
  triggerFontSize: "14px",
  triggerTextColor: colors.CARBON,
  triggerFontWeight: "normal"
};

FilterPopover.propTypes = {
  triggerLabel: PropTypes.string.isRequired,
  triggerFontSize: PropTypes.string,
  triggerTextColor: PropTypes.string,
  triggerFontWeight: PropTypes.string,
  formTitle: PropTypes.string,
  formContent: PropTypes.node,
  formLoading: PropTypes.bool,
  formSaveLabel: PropTypes.string,
  formCancelLabel: PropTypes.string,
  onFormSaveClick: PropTypes.func,
  onFormCancelClick: PropTypes.func,
  align: PropTypes.string,
  dismissOnSave: PropTypes.bool,
  hasValue: PropTypes.bool
};

export default FilterPopover;
