import * as React from "react";
import PropTypes from "prop-types";
import { SmCheck, SmPlaceholder, SmChevronRight } from "@crave/farmblocks-icon";

import Container from "../styledComponents/Step";
import statusTypes from "../constants/statusTypes";

const Step = ({ status, ...props }) => {
  const isCompleted = status === statusTypes.COMPLETED;

  return (
    <Container
      className={props.className}
      status={status}
      onClick={props.onClick}
    >
      {isCompleted ? (
        <SmCheck size={20} className="icon" />
      ) : (
        <SmPlaceholder size={20} className="icon" />
      )}

      <div className="description">{props.children}</div>

      {!isCompleted && <SmChevronRight size={20} className="icon" />}
    </Container>
  );
};

Step.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Step.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Step;
