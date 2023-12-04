import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectAccount = ({setAccountType}) => {
    const [account, setAccount] = useState('');

  const handleChange = (event) => {
    setAccountType(event.target.value);
    setAccount(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 600 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select account type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={account}
          label="Select account type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Borrower</MenuItem>
          <MenuItem value={2}>Lender</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectAccount