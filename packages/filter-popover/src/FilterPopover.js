import * as React from "react";
import PropTypes from "prop-types";
import Button from "@crave/farmblocks-button";
import Popover from "@crave/farmblocks-popover";
import FormWrapper from "@crave/farmblocks-form-wrapper";
import { SmChevronDown, SmCheckFilled } from "@crave/farmblocks-icon";

const FilterPopover = props => {
  return (
    <Popover
      className={props.className}
      tooltipProps={{
        padding: "0px",
        ...props.tooltipProps,
      }}
      onOutsideClick={props.onOutsideClick}
      trigger={isVisible => (
        <Button
          className="trigger"
          rightIcon={<SmChevronDown />}
          css={`
            box-shadow: none;
            span {
              display: flex;
              align-items: center;
            }
          `}
          small
          active={isVisible || props.hasValue}
        >
          {props.triggerLabel}

          {props.hasValue && (
            <div className="icon" style={{ marginLeft: 8 }}>
              <SmCheckFilled />
            </div>
          )}
        </Button>
      )}
      content={dismiss => (
        <FormWrapper
          className="formWrapper"
          onCancel={e => {
            dismiss();
            props.onFormCancelClick?.(e);
          }}
          onSave={e => {
            if (props.dismissOnSave) {
              dismiss();
            }
            props.onFormSaveClick(e, dismiss);
          }}
          saveLabel={props.formSaveLabel}
          cancelLabel={props.formCancelLabel}
          title={props.formTitle}
          loading={props.formLoading}
          saveButtonProps={{ small: true }}
        >
          {typeof props.formContent === "function"
            ? props.formContent(dismiss)
            : props.formContent}
        </FormWrapper>
      )}
    />
  );
};

FilterPopover.defaultProps = {
  formSaveLabel: "Filter",
};

FilterPopover.propTypes = {
  triggerLabel: PropTypes.string.isRequired,
  formTitle: PropTypes.string,
  formContent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  formLoading: PropTypes.bool,
  formSaveLabel: PropTypes.string,
  formCancelLabel: PropTypes.string,
  onFormSaveClick: PropTypes.func,
  onFormCancelClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  tooltipProps: PropTypes.object,
  dismissOnSave: PropTypes.bool,
  hasValue: PropTypes.bool,
  onOutsideClick: PropTypes.func,
  className: PropTypes.string,
};

export default FilterPopover;
