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
    <img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730" />,
    <div>
      <p className='text-blue-900 font-bold'>Demo werwr</p>
      <p className='text-blue-900 font-bold'>demo_borrow@demo.com</p>
    </div>,
    <p className='text-blue-900'>$25</p>,
    <p className='text-blue-900'>9 months ago</p>),
    
    createData(
      <img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704" />,
      <div>
        <p className='text-blue-900 font-bold'>John Doe</p>
        <p className='text-blue-900 font-bold'>investor@demo.com</p>
      </div>,
      <p className='text-blue-900'>$86</p>,
      <p className='text-blue-900'>6 months ago</p>),
      
      createData(
        <img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730" />,
        <div>
          <p className='text-blue-900 font-bold '>Demo werwr</p>
          <p className='text-blue-900 font-bold '>demo_borrow@demo.com</p>
        </div>,
        <p className='text-blue-900'>$140</p>,
        <p className='text-blue-900'>7 months ago</p>),
       
        createData(
          <img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704" />,
          <div>
            <p className='font-bold  text-blue-900'>Godsfavour</p>
          <p className='font-bold text-blue-900'>ezeliorafavour81@gmail.com</p>
          </div>,
          <p className='text-blue-900'>$2000</p>,
          <p className='text-blue-900'>3 months ago</p>),
];


const TableTwo = () => {
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

export default TableTwo