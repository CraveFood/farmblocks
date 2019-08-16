import React from "react";
import PropTypes from "prop-types";

import { Loading } from "./styledComponents/Checkbox";

const Toggle = ({ isSwitch, loading }) => {
  if (isSwitch) {
    return (
      <div className="visibleCheckbox">
        <div className="toggle">
          {loading && (
            <Loading>
              <i className="wg-loading" />
            </Loading>
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <Loading>
        <i className="wg-loading" />
      </Loading>
    );
  }

  return (
    <div className="visibleCheckbox">
      <div className="checkmark wg-check" />
    </div>
  );
};

Toggle.propTypes = {
  isSwitch: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Toggle;
