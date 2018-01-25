import PropTypes from "prop-types";

const Column = props => null;

Column.propTypes = {
  title: PropTypes.string,
  text: PropTypes.func,
  customCell: PropTypes.func,
  featured: PropTypes.bool,
  clickable: PropTypes.bool
};

export default Column;
