import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Box, Card, CardActions, CardContent, CardHeader, Divider, FormControl, MenuItem, Select, TextField } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
     <Card fullWidth>
        <CardHeader title="Create Template" />
        <Divider/>
        <CardContent >

<Box sx={{ display:'flex'}}>

<Box sx={{display:'block'}}>
<Typography sx={{ display: "block" }}>Name</Typography>
<TextField  sx={{height:'30px'}} id="outlined-basic" label="Outlined" variant="outlined" />
</Box>
<Box sx={{ minWidth: 200,maxHeight:'10px',marginLeft:'20px' }}>
        <Typography sx={{ display: "block" }}>Region</Typography>
        <FormControl fullWidth>
  {/* <InputLabel id="demo-simple-select-label">Region</InputLabel> */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={region}
   
    onChange={(e)=>{}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
      </Box>
<Button variant="contained" sx={{backgroundColor:"#CF682F", fontWeight: '500', margin:'20px'
      
    }}><AddIcon/>Create Structure</Button>
</Box>
<Box sx={{height:'100px'}}>
File
</Box>

        </CardContent>
        <Divider/>
        <CardActions sx={{justifyContent:'end'}}>
            <Box sx={{display:'flex'}}>
        <Button  variant="contained" sx={{backgroundColor:"#CF682F", margin:'10px', fontWeight: '500', width:'100%' 
      
    }}>
Modify Template
    </Button>
    <Button variant="contained" sx={{backgroundColor:"#CF682F", margin:'10px',fontWeight: '500', width:'100%' 
      
    }}>
        Save
    </Button>
    <Button variant="contained" sx={{backgroundColor:"#CF682F",margin:'10px', fontWeight: '500', width:'100%' 
      
    }}>
        Cancel
    </Button>
    </Box></CardActions>
     </Card>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function CreateTemplate() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>

        <Button onClick={handleClickOpen} sx={{backgroundColor:"#CF682F", fontWeight: '500', 
      
     }}><AddIcon/>Create Template</Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}