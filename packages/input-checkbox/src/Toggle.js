import React from "react";
import PropTypes from "prop-types";
import { SmCheck, MdLoading } from "@crave/farmblocks-icon";

import { Loading } from "./styledComponents/Checkbox";

const Toggle = ({ isSwitch, loading }) => {
  if (isSwitch) {
    return (
      <div className="visibleCheckbox">
        <div className="toggle">
          {loading && (
            <Loading>
              <MdLoading />
            </Loading>
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <Loading>
        <MdLoading />
      </Loading>
    );
  }

  return (
    <div className="visibleCheckbox">
      <SmCheck className="checkmark" size="100%" />
    </div>
  );
};

Toggle.propTypes = {
  isSwitch: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Toggle;
