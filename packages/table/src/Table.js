import * as React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";
import Link from "@crave/farmblocks-link";
import StyledTable from "./styledComponents/Table";
import { HeaderCell, BodyCell } from "./styledComponents/Cell";
import { rowHeights } from "./constants";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this._renderColumnTitle = this._renderColumnTitle.bind(this);
    this.titleClick = this.titleClick.bind(this);
  }

  render() {
    const { data, children, rowHeight } = this.props;
    const tableProps = { rowHeight };
    return (
      <StyledTable {...tableProps}>
        <thead>
          <tr>
            {React.Children.map(children, (column, index) =>
              this._renderColumnTitle(index, column.props)
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index} className="row">
                {React.Children.map(children, column =>
                  this._renderColumnCell(row, column.props)
                )}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }

  _renderColumnTitle(index, props) {
    const cellContent = props.clickable ? (
      <div className="link">
        <Link
          type={fontTypes.NORMAL}
          size={fontSizes.SMALL}
          onClick={this.titleClick(index)}
        >
          {props.title}
        </Link>
      </div>
    ) : (
      <Text
        title
        size={fontSizes.SMALL}
        align={props.options && props.options.align}
      >
        {props.title}
      </Text>
    );
    const downArrow = props.clickable && (
      <i className="wg-small-arrow-bottom icon" />
    );
    return (
      <HeaderCell className="cell" {...props.options}>
        {cellContent}{downArrow}
      </HeaderCell>
    );
  }

  _renderColumnCell(row, props) {
    return (
      <BodyCell className="cell" {...props.options}>
        {props.cell(row)}
      </BodyCell>
    );
  }

  titleClick(index) {
    const { data, onTitleClick } = this.props;
    if (!onTitleClick) {
      return event => {
        event.preventDefault();
        return null;
      };
    }
    return event => {
      event.preventDefault();
      return onTitleClick(index, data);
    };
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    rowHeight: PropTypes.oneOf([rowHeights.SMALL, rowHeights.MEDIUM]),
    onTitleClick: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    rowHeight: rowHeights.MEDIUM
  };
}

export default Table;
