import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import * as React from "react";
import DatePicker from "react-datepicker";
import SearchIcon from '@mui/icons-material/Search';
import "react-datepicker/dist/react-datepicker.css";
export default function DatePickers() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [region,setRegion]= React.useState('')
  return (
    <Box sx={{ display: "flex",  }}>
      <Box sx={{ display: "block" ,height:'30px', }}>
        <Typography sx={{ display: "block" }}>Start Date</Typography>
        <DatePicker
          selected={startDate}
          Style={{height:'30px'}}
          onChange={(date) => setStartDate(date)}
        />
      </Box>
      <Box sx={{ display: "block" , marginLeft:'20px'}}>
        <Typography sx={{ display: "block" }}>End Date</Typography>
        <DatePicker
        Style={{height:'30px'}}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </Box>

      <Box sx={{ minWidth: 150,maxHeight:'10px',marginLeft:'20px' }}>
        <Typography sx={{ display: "block" }}>Region</Typography>
        <FormControl fullWidth>
  {/* <InputLabel id="demo-simple-select-label">Region</InputLabel> */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={region}
    sx={{height:'30px'}}
    onChange={(e)=>{setRegion(e.target.value)}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
      </Box>
      <Box sx={{ display: "block" , margin:'20px'}}>
       <Button variant="contained" sx={{backgroundColor:"#CF682F",}}> <SearchIcon/>Search</Button>
      </Box>
    </Box>
  );
}
