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

const CHECKBOX = "checkbox";
const EXP_BUTTON = "expand-button";

const getRefName = (type, key) => `${type}-${key}`;
const getRowKey = (index, subIndex = "") => `${index},${subIndex}`;

class Table extends React.Component {
  state = {
    rowsMap: {},
    selectedRows: [],
    expandedRows: []
  };

  updateRowsMap() {
    const { rowGroupKey } = this.props;
    const hasSubRows = row =>
      rowGroupKey && row[rowGroupKey] && row[rowGroupKey].length;

    // iterate over all rows and sub-rows to create
    // a hash table of rows indexed by keys in the
    // format "<index>,<subIndex>"
    const rowsMap = this.props.data.reduce((entries, row, index) => {
      if (hasSubRows(row)) {
        const subRows = row[rowGroupKey].reduce(
          (subRowEntries, subRow, subIndex) => {
            return { ...subRowEntries, [getRowKey(index, subIndex)]: subRow };
          },
          {}
        );
        return { ...entries, ...subRows };
      }
      return { ...entries, [getRowKey(index, "")]: row };
    }, {});
    this.setState({ rowsMap });
  }

  componentDidMount() {
    this.updateRowsMap();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.data.length !== this.props.data.length) {
      this.updateRowsMap();
    }
  }

  onRowClick = (e, rowData, rowKey) => {
    if (this.props.selectableRows) {
      const refName = getRefName(CHECKBOX, rowKey);
      const clickedOnCheckbox = this[refName].contains(e.target);

      if (clickedOnCheckbox) {
        return;
      }
    }

    if (this.props.collapsed) {
      const expandButtonRef = this[getRefName(EXP_BUTTON, rowKey)];
      if (expandButtonRef && expandButtonRef.contains(e.target)) {
        return;
      }
    }

    this.props.onRowClick && this.props.onRowClick(e, rowData);
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

    const selectedData = Object.keys(this.state.rowsMap)
      .filter(key => this.state.selectedRows.includes(key))
      .map(key => this.state.rowsMap[key]);

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

  _renderRow = (
    row,
    index,
    subIndex = "",
    group = false,
    flattened = false
  ) => {
    const { selectableRows, collapsed, children, onRowClick } = this.props;
    const rowKey = getRowKey(index, subIndex);
    const selected = this.state.selectedRows.includes(rowKey);
    const grouped = typeof subIndex === "number" && !flattened;
    const rowProps = { selected, grouped };

    const groupedClass = grouped ? "grouped" : "";
    const clickableClass = onRowClick ? "clickable" : "";

    return (
      <tr
        key={rowKey}
        className={`row ${groupedClass} ${clickableClass}`}
        onClick={e => this.onRowClick(e, row, rowKey)}
      >
        {selectableRows && this._renderSelectRowButton(rowKey, rowProps, group)}
        {React.Children.map(
          children,
          (column, columnIndex) =>
            column &&
            column.props &&
            this._renderColumnCell(row, index, {
              ...column.props,
              ...rowProps,
              columnIndex
            })
        )}
        {collapsed && (
          <BodyCell className="cell" {...rowProps}>
            {group && this._renderExpandToggle(rowKey)}
          </BodyCell>
        )}
      </tr>
    );
  };

  _renderRowGroup = (row, index) => {
    const { rowGroupKey, flatGroupCondition } = this.props;
    const { [rowGroupKey]: childRows, ...parentRow } = row;
    const shouldUngroup = !!(flatGroupCondition && flatGroupCondition(row));
    const rowKey = getRowKey(index, "");

    const expanded =
      shouldUngroup ||
      !this.props.collapsed ||
      this.state.expandedRows.includes(rowKey);

    return (
      <tbody className={`body ${!expanded ? "collapsed" : ""}`} key={index}>
        {!shouldUngroup && this._renderRow(parentRow, index, "", true)}
        {childRows.map((row, subindex) =>
          this._renderRow(row, index, subindex, false, shouldUngroup)
        )}
      </tbody>
    );
  };

  _renderExpandToggle = rowKey => {
    const icon = this.state.expandedRows.includes(rowKey)
      ? "wg-small-arrow-top"
      : "wg-small-arrow-bottom";
    return (
      <Button
        icon={icon}
        onClick={() => this.expandToggleClicked(rowKey)}
        innerRef={ref => (this[getRefName(EXP_BUTTON, rowKey)] = ref)}
      />
    );
  };

  expandToggleClicked = rowKey => {
    const oldExpandedRows = this.state.expandedRows;
    const isRowExpanded = oldExpandedRows.includes(rowKey);

    const expandedRows = isRowExpanded
      ? oldExpandedRows.filter(item => item !== rowKey)
      : [...oldExpandedRows, rowKey];

    this.setState({ expandedRows });
  };

  _renderSelectAllButton = () => {
    const dataLength = Object.keys(this.state.rowsMap).length;
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

  _renderSelectRowButton = (rowKey, rowProps, disabled) => {
    return (
      <BodyCell className="cell checkbox" {...rowProps}>
        <div className="checkbox">
          <Checkbox
            key={rowKey}
            innerRef={ref => (this[getRefName(CHECKBOX, rowKey)] = ref)}
            checked={rowProps.selected}
            disabled={disabled}
            onChange={event => {
              this.selectRowToggle(rowKey, event.target.checked);
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

  _renderColumnCell = (row, rowIndex, props) => {
    const { width, align, selected, grouped, columnIndex } = props;
    const cellProps = {
      width,
      align,
      className: `cell ${grouped && columnIndex === 0 ? "corner-icon" : ""}`,
      selected,
      grouped
    };
    const bodyCell = content => <BodyCell {...cellProps}>{content}</BodyCell>;
    if (props.customCell) {
      return bodyCell(props.customCell(row, rowIndex, cellProps.selected));
    }

    if (props.text) {
      const text = props.text(row);
      const textProps = {
        align: props.align,
        size: fontSizes.MEDIUM
      };

      const type = props.fontType ? props.fontType : fontTypes.NORMAL;

      return bodyCell(
        <Text title={!props.light} {...textProps} type={type}>
          {text}
        </Text>
      );
    }
    return bodyCell(null);
  };

  selectAllToggle = (checked, dataLength) => {
    if (checked) {
      return this.setState({
        selectedRows: Object.keys(this.state.rowsMap)
      });
    }
    return this.setState({ selectedRows: [] });
  };

  selectRowToggle = (key, checked) => {
    const nextSelectedRows = checked
      ? [...this.state.selectedRows, key]
      : this.state.selectedRows.filter(value => value !== key);

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
    flatGroupCondition: PropTypes.func,
    onTitleClick: PropTypes.func,
    onRowClick: PropTypes.func,
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
