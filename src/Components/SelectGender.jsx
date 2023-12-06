import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectGender = ({setGenderType}) => {
    const [gender, setGender] = useState('');

    const handleChange = (event) => {
      setGenderType(event.target.value);
      setGender(event.target.value)
    };
  
    return (
      <Box className='mb-6 bg-[#F0F0F0]' sx={{ minWidth: 600 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" >Select gender type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Select gender"
            onChange={handleChange}
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
}

export default SelectGender