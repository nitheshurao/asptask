import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterRoundedIcon from '@mui/icons-material/Twitter';
import LinkedInRoundedIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
   
 <Box sx={{ width: 400 ,display:'flex',
justifyContent:'center',}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<FacebookRoundedIcon color="disabled" />} />
        <BottomNavigationAction icon={<LinkedInRoundedIcon />} />
        <BottomNavigationAction  icon={<TwitterRoundedIcon />} />
     
      </BottomNavigation>
 
    </Box>
    <Typography sx={{
fontWeight:'400',
fontSize:'10px',
display:'flex',
justifyContent:'center',
margin:'20px'

}}>© Copyright Dyaz Innovate 2023. All rights reserved.</Typography>
    </Box>
   
  );
}