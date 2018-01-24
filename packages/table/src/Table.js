import * as React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes } from "@crave/farmblocks-text";
import StyledTable from "./styledComponents/Table";
import { HeaderCell, BodyCell } from "./styledComponents/Cell";
import { rowHeights } from "./constants";

const Table = props => {
  const { rowHeight } = props;
  const tableProps = { rowHeight };
  return (
    <StyledTable {...tableProps}>
      <thead>
        <tr>
          {React.Children.map(props.children, column => (
            <HeaderCell className="cell" {...column.props.options}>
              <Text
                title
                size={fontSizes.SMALL}
                align={column.props.options && column.props.options.align}
              >
                {column.props.title}
              </Text>
            </HeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr key={index} className="row">
              {React.Children.map(props.children, column => (
                <BodyCell className="cell" {...column.props.options}>
                  {column.props.cell(item)}
                </BodyCell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowHeight: PropTypes.oneOf([rowHeights.SMALL, rowHeights.MEDIUM]),
  children: PropTypes.node
};

Table.defaultProps = {
  rowHeight: rowHeights.MEDIUM
};

export default Table;
