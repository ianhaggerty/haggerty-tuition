import React from "react";

const getColumn = column => {
  return `col-${column.toLowerCase()}-start / col-${column.toLowerCase()}-end`;
};

const getRow = row => {
  return `${row}-start / ${row}-end`;
};

const withGrid = WrappedComponent => (column, row) =>
  class ComponentWithGrid extends React.Component {
    render() {
      return (
        <WrappedComponent
          style={{
            gridColumn: getColumn(column),
            gridRow: getRow(row)
          }}
          {...this.props}
        />
      );
    }
  };

export default withGrid;
