import * as React from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";
import Link from "@crave/farmblocks-link";
import { Checkbox } from "@crave/farmblocks-input-checkbox";
import Button from "@crave/farmblocks-button";

import StyledTable from "./styledComponents/Table";
import { HeaderCell, BodyCell } from "./styledComponents/Cell";
import { rowHeights } from "./constants";

class Table extends React.Component {
  state = {
    selectedRows: [],
    expandedRows: []
  };

  render() {
    const {
      data,
      children,
      width,
      rowHeight,
      rowGroupKey,
      collapsed,
      selectableRows,
      selectionHeader,
      borderless
    } = this.props;
    const emptySelection = this.state.selectedRows.length === 0;
    const selectionHeaderVisible = selectionHeader && !emptySelection;
    const tableProps = {
      width,
      rowHeight,
      selectionHeaderVisible,
      borderless
    };
    const selectedData = this.props.data.filter(
      (row, index) => this.state.selectedRows.indexOf(index) !== -1
    );
    const clearFunction = () =>
      this.selectAllToggle(false, this.state.selectedRows.length);
    return (
      <StyledTable {...tableProps}>
        <caption>
          <ReactCSSTransitionGroup
            transitionName="grow"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {selectionHeaderVisible &&
              selectionHeader(selectedData, clearFunction)}
          </ReactCSSTransitionGroup>
        </caption>
        <thead>
          <tr>
            {selectableRows && this._renderSelectAllButton()}
            {React.Children.map(
              children,
              (column, index) =>
                column &&
                column.props &&
                this._renderColumnTitle(index, column.props)
            )}
            {collapsed && this._renderColumnTitle()}
          </tr>
        </thead>
        {data.map((row, index) => {
          const isRowGroup =
            row[rowGroupKey] && Array.isArray(row[rowGroupKey]);
          if (isRowGroup) {
            return this._renderRowGroup(row, index);
          }
          return (
            <tbody key={index} className="body">
              {this._renderRow(row, index)}
            </tbody>
          );
        })}
      </StyledTable>
    );
  }

  _renderRow = (row, index, subIndex, group = false) => {
    const { selectableRows, collapsed, children } = this.props;
    return (
      <tr key={`${index}-${subIndex}`} className="row">
        {selectableRows && this._renderSelectRowButton(index)}
        {React.Children.map(
          children,
          column =>
            column &&
            column.props &&
            this._renderColumnCell(row, index, column.props)
        )}
        {collapsed && (
          <BodyCell
            className="cell"
            selected={row.selected}
            grouped={row.grouped}
          >
            {group && this._renderExpandToggle(index)}
          </BodyCell>
        )}
      </tr>
    );
  };

  _renderRowGroup = (row, index) => {
    const { rowGroupKey } = this.props;
    const { [rowGroupKey]: childRows, ...parentRow } = row;
    const expanded =
      !this.props.collapsed || this.state.expandedRows.indexOf(index) !== -1;
    return (
      <tbody className="body" key={index}>
        {this._renderRow(parentRow, index, null, true)}
        {expanded &&
          childRows.map((row, subindex) =>
            this._renderRow({ ...row, grouped: true }, index, subindex)
          )}
      </tbody>
    );
  };

  _renderExpandToggle = index => {
    return (
      <Button
        icon="wg-small-arrow-bottom"
        onClick={() => this.expandToggleClicked(index)}
      />
    );
  };

  expandToggleClicked = index => {
    const oldExpandedRows = this.state.expandedRows;
    const expandedIndexOf = oldExpandedRows.indexOf(index);
    const expandedRows =
      expandedIndexOf !== -1
        ? [
            ...oldExpandedRows.slice(0, expandedIndexOf),
            ...oldExpandedRows.slice(expandedIndexOf + 1)
          ]
        : [...oldExpandedRows, index];
    return this.setState({ expandedRows });
  };

  _renderSelectAllButton = () => {
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
  };

  _renderSelectRowButton = rowIndex => {
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
  };

  _renderColumnTitle = (columnIndex, columnProps = {}) => {
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
  };

  _renderColumnCell = (row, rowIndex, columnProps) => {
    const { width, align } = columnProps;
    const rowSelected = this.state.selectedRows.indexOf(rowIndex) !== -1;
    const { grouped } = row;
    const cellProps = {
      width,
      align,
      grouped,
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

      const type = columnProps.fontType
        ? columnProps.fontType
        : fontTypes.NORMAL;

      return bodyCell(
        <Text title={!columnProps.light} {...textProps} type={type}>
          {text}
        </Text>
      );
    }
    return bodyCell(null);
  };

  selectAllToggle = (checked, dataLength) => {
    if (checked) {
      return this.setState({
        selectedRows: new Array(dataLength).fill().map((item, index) => index)
      });
    }
    return this.setState({ selectedRows: [] });
  };

  selectRowToggle = (index, checked) => {
    const nextSelectedRows = checked
      ? [...this.state.selectedRows, index]
      : this.state.selectedRows.filter(value => value !== index);

    return this.setState({
      selectedRows: nextSelectedRows
    });
  };

  titleClick = index => {
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
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    width: PropTypes.string,
    rowHeight: PropTypes.oneOf([rowHeights.SMALL, rowHeights.MEDIUM]),
    rowGroupKey: PropTypes.string,
    onTitleClick: PropTypes.func,
    collapsed: PropTypes.bool,
    selectableRows: PropTypes.bool,
    selectionHeader: PropTypes.func,
    borderless: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    borderless: false,
    rowHeight: rowHeights.MEDIUM
  };
}

export default Table;
