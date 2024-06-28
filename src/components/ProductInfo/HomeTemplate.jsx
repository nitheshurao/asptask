import { Box, Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import DatePickers from "./DatePickers";
import TableTemplate from "./TableTemplate";
import CreateTemplate from "./CreateTemplate";
function HomeTemplate() {
  return (
    <Box>
      <Card sx={{height:'100vh',margin:'30px', borderRadius:'0px'}}>
      <CardHeader
      
        action={
    
      <CreateTemplate/> 
    }
        title={<Typography sx={{
         fontWeight: '500',
          fontSize:'14px'}}> Templates</Typography>  }/>

<CardContent>
<DatePickers/>
<TableTemplate/>
</CardContent>
      </Card>
    </Box>
  );
}

export default HomeTemplate;
