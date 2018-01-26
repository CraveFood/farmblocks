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
    const { data, children, width, rowHeight, selectableRows } = this.props;
    const emptySelection = this.state.selectedRows.length === 0;
    const tableProps = { width, rowHeight, emptySelection };
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

  _renderColumnTitle(columnIndex, columnProps) {
    const { width, align } = columnProps;
    const cellProps = { width, align, className: "cell" };
    const headerCell = content => (
      <HeaderCell {...cellProps}>{content}</HeaderCell>
    );

    if (columnProps.customTitle) {
      return headerCell(columnProps.customTitle(this.props.data, this.state));
    }

    if (columnProps.clickable) {
      return headerCell(
        <div className="link">
          <Link
            type={fontTypes.NORMAL}
            size={fontSizes.SMALL}
            onClick={this.titleClick(columnIndex)}
          >
            {columnProps.title}
          </Link>
          <i className="wg-small-arrow-bottom icon" />
        </div>
      );
    }

    if (columnProps.title) {
      return headerCell(
        <Text title size={fontSizes.SMALL} align={columnProps.align}>
          {columnProps.title}
        </Text>
      );
    }

    return headerCell(null);
  }

  _renderColumnCell(row, rowIndex, columnProps) {
    const { width, align } = columnProps;
    const rowSelected = this.state.selectedRows.indexOf(rowIndex) !== -1;
    const cellProps = {
      width,
      align,
      className: "cell",
      selected: rowSelected
    };
    const bodyCell = content => <BodyCell {...cellProps}>{content}</BodyCell>;
    if (columnProps.customCell) {
      return bodyCell(columnProps.customCell(row, rowIndex, rowSelected));
    }

    if (columnProps.text) {
      const text = columnProps.text(row);
      const textProps = {
        align: columnProps.align,
        size: fontSizes.MEDIUM
      };
      if (columnProps.fontType) {
        return bodyCell(
          <Text {...textProps} type={columnProps.fontType}>
            {text}
          </Text>
        );
      }
      return bodyCell(
        <Text title {...textProps} type={fontTypes.NORMAL}>
          {text}
        </Text>
      );
    }
    return bodyCell(null);
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
    width: PropTypes.string,
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
