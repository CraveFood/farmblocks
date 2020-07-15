import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { styledInput } from "@crave/farmblocks-hoc-input";
import { SmEdit } from "@crave/farmblocks-icon";
import Link from "@crave/farmblocks-link";

const LABEL_OFFSET = "32px";

// the cover of a protected field is a div (instead of an input) enhanced with formInput hoc and some extra style overridings
const Cover = styled(styledInput)`
  display: block;

  .input {
    position: absolute;
    top: ${({ label }) => (label ? LABEL_OFFSET : 0)};

    width: 100%;
    height: 40px;
    padding: 8px 16px;

    border-color: ${({ invalid }) => invalid && colors.STRAWBERRY};
    border-radius: 4px;

    background: ${colors.SUGAR};
    color: ${colors.CARBON};
    cursor: auto;
  }

  .clear {
    position: absolute;
    right: 8px;
  }
`;
Cover.displayName = "InputCover";

const ProtectedCover = ({
  value,
  disabled,
  handleEditClick,
  label,
  validationMessages,
  invalid,
}) => {
  return (
    <Cover
      label={label}
      validationMessages={validationMessages}
      invalid={invalid || validationMessages?.length}
      className="protected-input-cover"
      data-testid="protected-input-cover"
    >
      <div className="input">
        {value}
        {!disabled && (
          <Link
            className="clear"
            onClick={handleEditClick}
            onKeyDown={handleEditClick}
            data-testid="edit-link"
          >
            <SmEdit />
          </Link>
        )}
      </div>
    </Cover>
  );
};

ProtectedCover.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  handleEditClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  validationMessages: PropTypes.arrayOf(PropTypes.string),
  invalid: PropTypes.bool,
};

export default ProtectedCover;
