import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(image, subject, amount) {
    return { image, subject, amount};
}

const rows = [
    createData(<img src="https://ik.imagekit.io/b6b9xwu9l/Group%2057.png?updatedAt=1701215289642"/>,
    <div>
      <h4>Home Improvement</h4>
      <p>#52247643</p>
    </div>, 
    <p> ₦899.992</p>),
    createData(<img src="https://ik.imagekit.io/b6b9xwu9l/Group%2056.png?updatedAt=1701215289676"/>,
    <div>
      <h4>Debt Consolidation</h4>
      <p>#55767068</p>
    </div>, 
    <p> ₦500.000</p>),
     createData(<img src="https://ik.imagekit.io/b6b9xwu9l/Group%2057.png?updatedAt=1701215289642"/>,
    <div>
      <h4>Home Improvement</h4>
      <p>#86488097</p>
    </div>, 
    <p>₦130.992</p>),
  ];

const TableOne = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.image}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.image}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableOne