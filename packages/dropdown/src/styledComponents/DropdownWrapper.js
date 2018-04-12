import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownWrapper = styled.div`
  font-family: lato, sans-serif;

  *:focus {
    outline: none;
  }

  display: ${props => (props.displayBlock ? "block" : "inline-block")};
  position: relative;
`;

DropdownWrapper.propTypes = {
  displayBlock: PropTypes.bool
};

export default DropdownWrapper;
