import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AdminSideNav from '../../../../Components/admin/AdminSideNav';
import AdminNavbar from '../../../../Components/admin/AdminNavbar';
import AdminNavbar2 from '../../../../Components/admin/AdminNavbar2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'grey',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  loans,
  grade,
  amount,
  interest,
  terms,
  total,
  payment,
  status
) {
  return { loans, grade, amount, interest, terms, total, payment, status };
}

const rows = [
  createData('Student Loans', 'E', 166, 23, 24, 0, '6 months ago', 'pending'),
  createData('Business', 'E', 166, 23, 37, 0, '4 months ago', 'active'),
  createData('Large Purchase', 'G', 10, 16.0, 24, 0, '2 months ago', 'active'),
  createData('Business', 'E', 305, 17.5, 67, 0, '6 months ago', 'active'),
];

const NonInterestLoan = () => {
  return (
    <div>
      <div className='flex bg-[#F0F2F5]'>
        <AdminSideNav />
        <div className='w-[100%]'>
          <AdminNavbar />
          <AdminNavbar2 />

          {/* Headings */}
          <div className='bg-white mx-5 px-10 py-4 font-bold'>
            <p>4 Loans</p>
          </div>
          {/* Table */}
          <div className='m-5'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Loans</StyledTableCell>
                    <StyledTableCell align='right'>Grade</StyledTableCell>
                    <StyledTableCell align='right'>Amount</StyledTableCell>
                    <StyledTableCell align='right'>
                      Interest Rate
                    </StyledTableCell>
                    <StyledTableCell align='right'>Terms</StyledTableCell>
                    <StyledTableCell align='right'>
                      Total Returns
                    </StyledTableCell>
                    <StyledTableCell align='right'>Payment Due</StyledTableCell>
                    <StyledTableCell align='right'>Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component='th' scope='row'>
                        {row.loans}
                        <p>{(row.number = '#92204527')}</p>
                      </StyledTableCell>
                      <StyledTableCell align='right' background='red'>
                        {row.grade}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.amount}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.interest}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.terms}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.total}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.payment}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.status}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonInterestLoan;
