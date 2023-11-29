import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function tableData(subject, amount) {
  return {subject, amount};
}

const tableRows = [
  tableData(
  <p>$25</p>,
  <p>9 months ago</p>),
  tableData(
  <p>$140</p>,
  <p>6 months ago</p>),
  tableData(
  <p>$86</p>,
  <p>6 months ago</p>),
  tableData(
  <p>$25</p>,
  <p>6 months ago</p>),
];

const TableThree = () => {
  return (
    <div>TableThree</div>
  )
}

export default TableThree