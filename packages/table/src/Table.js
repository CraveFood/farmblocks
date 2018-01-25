import * as React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";
import Link from "@crave/farmblocks-link";
import Checkbox from "@crave/farmblocks-input-checkbox";
import StyledTable from "./styledComponents/Table";
import { HeaderCell, BodyCell } from "./styledComponents/Cell";
import { rowHeights } from "./constants";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: []
    };
    this._renderColumnTitle = this._renderColumnTitle.bind(this);
    this._renderSelectAllButton = this._renderSelectAllButton.bind(this);
    this._renderSelectRowButton = this._renderSelectRowButton.bind(this);
    this.selectAllToggle = this.selectAllToggle.bind(this);
    this.selectRowToggle = this.selectRowToggle.bind(this);
    this.titleClick = this.titleClick.bind(this);
  }

  render() {
    const { data, children, rowHeight, selectableRows } = this.props;
    const emptySelection = this.state.selectedRows.length === 0;
    const tableProps = { rowHeight, emptySelection };
    return (
      <StyledTable {...tableProps}>
        <thead>
          <tr>
            {selectableRows && this._renderSelectAllButton()}
            {React.Children.map(children, (column, index) =>
              this._renderColumnTitle(index, column.props)
            )}
          </tr>
        </thead>
        <tbody className="body">
          {data.map((row, index) => {
            return (
              <tr key={index} className="row">
                {selectableRows && this._renderSelectRowButton(index)}
                {React.Children.map(children, column =>
                  this._renderColumnCell(row, index, column.props)
                )}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }

  _renderSelectAllButton() {
    const dataLength = this.props.data.length;
    return (
      <HeaderCell className="cell">
        <div className="checkbox">
          <Checkbox
            checked={this.state.selectedRows.length === dataLength}
            onChange={event => {
              this.selectAllToggle(event.target.checked, dataLength);
            }}
          />
        </div>
      </HeaderCell>
    );
  }

  _renderSelectRowButton(rowIndex) {
    const isChecked = this.state.selectedRows.indexOf(rowIndex) !== -1;
    return (
      <BodyCell className="cell checkbox" selected={isChecked}>
        <div className="checkbox">
          <Checkbox
            checked={isChecked}
            onChange={event => {
              this.selectRowToggle(rowIndex, event.target.checked);
            }}
          />
        </div>
      </BodyCell>
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
        {cellContent}
        {downArrow}
      </HeaderCell>
    );
  }

  _renderColumnCell(row, rowIndex, props) {
    const rowSelected = this.state.selectedRows.indexOf(rowIndex) !== -1;
    return (
      <BodyCell className="cell" {...props.options} selected={rowSelected}>
        {props.cell(row)}
      </BodyCell>
    );
  }

  selectAllToggle(checked, dataLength) {
    if (checked) {
      return this.setState({
        selectedRows: new Array(dataLength).fill().map((item, index) => index)
      });
    }
    return this.setState({ selectedRows: [] });
  }

  selectRowToggle(index, checked) {
    const nextSelectedRows = checked
      ? [...this.state.selectedRows, index]
      : this.state.selectedRows.filter(value => value !== index);

    return this.setState({
      selectedRows: nextSelectedRows
    });
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
    selectableRows: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    rowHeight: rowHeights.MEDIUM
  };
}

export default Table;
