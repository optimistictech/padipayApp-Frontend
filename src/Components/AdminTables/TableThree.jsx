import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
      <p className='mr-40 text-blue-900 font-bold'>Available Cash</p>,
      <p className='text-blue-900 font-bold'>$5,368,312</p>),
    
    createData(
        <p className='mr-40 text-blue-900 font-bold'>Pending</p>,
        <p className='text-blue-900 font-bold'>$24025</p>),
      
      createData(
        <p className='mr-40 text-blue-900 font-bold'>Invested</p>,
        <p className='text-blue-900 font-bold'>$24025</p>),
       
        createData(
          <p className='mr-40 text-blue-900 font-bold'>Account Value</p>,
          <p className='text-blue-900 font-bold'>$5766207</p>),
];

const TableThree = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableThree