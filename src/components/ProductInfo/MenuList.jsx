import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function MenuList() {
  const [openConfigurations, setOpenConfigurations] = React.useState(true);

  const handleClick = () => {
    setOpenConfigurations(!openConfigurations);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
   
    <List
      sx={{ width: '100%', maxWidth: 360,}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">

        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>

        <ListItemText primary="Configurations" />
        {openConfigurations ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openConfigurations} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemText primary="Templates" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Document Prep" />
        {openConfigurations ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openConfigurations} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}>

            <ListItemText primary="Products" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)} >

            <ListItemText primary="Applications" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
            selected={selectedIndex == 3} 
            onClick={(event) => handleListItemClick(event, 3)}>

            <ListItemText primary="Sequences" />
          </ListItemButton>
        </List>
      </Collapse>








    </List>
    </>
  );
}