import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody.jsx";

const Table = props => {
  const { columns, sortColumn, onSort, data, movies } = props;
  return (
    <table className="table table-dark">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
