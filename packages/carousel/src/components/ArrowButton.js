import React from "react";
import { SmChevronRight, SmChevronLeft } from "@crave/farmblocks-icon";
import PropTypes from "prop-types";
import Button from "../styledComponents/ArrowButton";

const ArrowButton = ({ direction, onClick }, props) => (
  <Button
    icon={
      direction === "left" ? (
        <SmChevronLeft size={24} />
      ) : (
        <SmChevronRight size={24} />
      )
    }
    onClick={onClick}
    {...props}
  />
);

ArrowButton.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
};

export default ArrowButton;
