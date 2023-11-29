import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createPendingData(image, subject, amount, time) {
    return { image, subject, amount, time};
}

const pendingRows = [
    createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730"/>,
    <div>
      <h4>Demo werwr</h4>
      <p>demo_borrow@demo.com</p>
    </div>, 
    <p>$25</p>,
    <p>9 months ago</p>),
    createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704"/>,
    <div>
      <h4>John Doe</h4>
      <p>investor@demo.com</p>
    </div>, 
    <p>$86</p>,
    <p>6 months ago</p>),
    createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730"/>,
    <div>
      <h4>Demo werwr</h4>
      <p>demo_borrow@demo.com</p>
    </div>, 
    <p>$140</p>,
    <p>6 months ago</p>),
    createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704"/>,
    <div>
      <h4>John Doe</h4>
      <p>investor@demo.com</p>
    </div>, 
    <p>$86</p>,
    <p>6 months ago</p>),
    createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730"/>,
    <div>
      <h4>Dane Doe</h4>
      <p>isakovvv@gmail.com</p>
    </div>, 
    <p>$25</p>,
    <p>6 months ago</p>),
  ];

const TableTwo = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} className='mr-20' aria-label="simple table">
        <TableBody>
          {pendingRows.map((row) => (
            <TableRow
              key={row.image}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.image}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableTwo