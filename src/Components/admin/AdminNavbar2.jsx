import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const AdminNavbar2 = ({ name, className, p, div }) => {
  const [All, setAll] = React.useState('');

  const handleChange = (event) => {
    setAll(event.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      className='p-5 flex gap-10 item-center justify-between'
    >
      {/* 1 */}
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
            <MenuItem value={10}>Pending</MenuItem>
            <MenuItem value={20}>Active</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* 2 */}
      <div className='w-[40%] flex flex-col gap-3'>
        <p>GRADE</p>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>All</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={All}
            label='All'
            onChange={handleChange}
          >
            <MenuItem value={10}>E</MenuItem>
            <MenuItem value={20}>G</MenuItem>
            <MenuItem value={30}>P</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* 3 */}
      <div className='w-[40%] flex flex-col gap-3'>
        <p>TERM (MONTHS)</p>
        <FormControl>
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
  );
};

export default AdminNavbar2;
