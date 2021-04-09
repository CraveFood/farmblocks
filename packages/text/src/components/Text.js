import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { typography } from "styled-system";
import ssPropTypes from "@styled-system/prop-types";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import paragraphLineHeights from "../constants/paragraphLineHeights";

const paragraphStyle = (props) =>
  props.paragraph &&
  css`
    line-height: ${paragraphLineHeights[props.size]};
  `;

const Text = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${(props) => `${props.size}px`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${(props) => props.type};

  text-align: ${(props) => props.align};

  ${paragraphStyle};
  ${typography};

  ${({ upper }) => upper && "text-transform: uppercase"}

  ${({ truncate }) =>
    truncate &&
    ` white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      `};
`;

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number, // DEPRECATED - Use fontSize instead
  type: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]), // DEPRECATED - Use textAlign instead
  paragraph: PropTypes.bool,
  truncate: PropTypes.bool,
  upper: PropTypes.bool,
  ...ssPropTypes.typography,
};

Text.defaultProps = {
  size: fontSizes.LARGE,
  type: fontTypes.NORMAL,
  align: "left",
  paragraph: false,
};

export default Text;
