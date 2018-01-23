import * as React from "react";
import PropTypes from "prop-types";

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          {React.Children.map(props.children, column => (
            <th {...column.props.options}>{column.props.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr key={index} className="row">
              {React.Children.map(props.children, column => (
                <td className="cell" {...column.props.options}>
                  {column.props.cell(item)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node
};

export default Table;
