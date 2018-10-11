import PropTypes from "prop-types";
import values from "object.values";
import { fontTypes } from "@crave/farmblocks-text";

const Column = props => null;

Column.propTypes = {
  title: PropTypes.string,
  text: PropTypes.func,
  customTitle: PropTypes.func,
  customCell: PropTypes.func,
  clickable: PropTypes.bool,
  width: PropTypes.string,
  align: PropTypes.string,
  fontType: PropTypes.oneOf(values(fontTypes))
};

export default Column;
