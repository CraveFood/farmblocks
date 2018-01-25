import PropTypes from "prop-types";

const Column = props => props.cell(props.rowData);

Column.propTypes = {
  title: PropTypes.string,
  cell: PropTypes.func.isRequired,
  clickable: PropTypes.bool
};

export default Column;
