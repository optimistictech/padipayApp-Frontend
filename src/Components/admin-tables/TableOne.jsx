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
    <img src="https://ik.imagekit.io/b6b9xwu9l/Group%2057.png?updatedAt=1701215289642"/>,
    <div>
      <h6 className='font-bold text-blue-900'>Home Improvement</h6>
      <p className='text-green-600'>#52247643</p>
    </div>,
    <p className='text-blue-900'>₦899.992</p>),
  createData(
    <img src="https://ik.imagekit.io/b6b9xwu9l/Group%2056.png?updatedAt=1701215289676"/>,
    <div>
      <h6 className='font-bold text-blue-900'>Debt Consolidation</h6>
      <p className='text-green-600'>#55767068</p>
    </div>,
    <p className='text-blue-900'>₦500.000</p>),
  createData(
    <img src="https://ik.imagekit.io/b6b9xwu9l/Group%2057.png?updatedAt=1701215289642"/>,
    <div>
      <h6 className='font-bold text-blue-900'>Home Improvement</h6>
      <p className='text-green-600'>#86488097</p>
    </div>,
    <p className='text-blue-900'>₦130.992</p>),
  
];


const TableOne = () => {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
      
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableOne;