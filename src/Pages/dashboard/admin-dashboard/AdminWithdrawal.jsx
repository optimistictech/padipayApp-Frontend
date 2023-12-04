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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdminSideNav from '../../../Components/admin/AdminSideNav';
import AdminNavbar from '../../../Components/admin/AdminNavbar';

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

function createData(loans, invested, investments, balance, returns, joined) {
  return { loans, invested, investments, balance, returns, joined };
}

const rows = [
  createData(
    'Student Loans',
    130.992,
    'First Bank',
    '12/22/22',
    '12/22/22',
    'Active'
  ),
  createData(
    'Business',
    130.992,
    'Union Bank',
    '12/22/22',
    '12/22/22',
    'Active'
  ),
  createData(
    'Large Purchase',
    130.992,
    'First Bank',
    '12/22/22',
    '12/22/22',
    'Active'
  ),
  createData(
    'Business',
    130.992,
    'Access Bank',
    '12/22/22',
    '12/22/22',
    'Active'
  ),
];

const AdminWithdrawal = () => {
  const [All, setAll] = React.useState('');

  const handleChange = (event) => {
    setAll(event.target.value);
  };

  return (
    <div>
      <div className='flex bg-[#F0F2F5]'>
        <AdminSideNav />
        <div className='w-[100%]'>
          <AdminNavbar />

          <Box className='flex items-center gap-10 m-5'>
            <div className='w-[40%] flex flex-col gap-3'>
              <p>STATUS</p>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>All</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={All}
                  label='All'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='w-[40%] flex flex-col gap-3'>
              <p>SORT</p>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Date Joined
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={All}
                  label='All'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>2021</MenuItem>
                  <MenuItem value={20}>2022</MenuItem>
                  <MenuItem value={30}>2023</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Search */}
            <div className='w-[50%] flex flex-col gap-3'>
              <p>SEARCH</p>
              <TextField
                id='outlined-basic'
                label='Search by investors ID'
                variant='outlined'
              />
            </div>
          </Box>

          {/* Headings */}
          <div className='bg-white mx-5 px-10 py-4 font-bold'>
            <p>38 Withdrawals</p>
          </div>
          {/* Table */}
          <div className='m-5'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>User</StyledTableCell>
                    <StyledTableCell align='right'>Amount</StyledTableCell>
                    <StyledTableCell align='right'>Bank</StyledTableCell>
                    <StyledTableCell align='right'>
                      Request Date
                    </StyledTableCell>
                    <StyledTableCell align='right'>Sent Date</StyledTableCell>
                    <StyledTableCell align='right'>Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component='th' scope='row'>
                        {row.loans}
                        <p>{(row.email = 'admin@demo.com#92204527')}</p>
                      </StyledTableCell>
                      <StyledTableCell align='right' background='red'>
                        {row.invested}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.investments}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.balance}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.returns}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.joined}
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

export default AdminWithdrawal;
