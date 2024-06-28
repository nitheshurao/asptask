import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, StepConnector, stepConnectorClasses, styled,Grid } from '@mui/material';
import ProductInfo from '../ProductInfo/ProductInfo';
import LogoutIcon from '@mui/icons-material/Logout';
import HeaderList from './HeaderList';
import { useNavigate } from 'react-router-dom';
const steps = ['Product Info', 'Manage Document', 'eCTD Submission','Validation','Dispatch'];

export default function HeaderStepperNavBar() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
   
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <Box sx={{display:'flex', flexDirection:'column',  }}>
      
     
 <Box sx={{ width: '100%' , }}>
  <Grid container spacing={0} sx={{backgroundColor:'#CF682F',}} >
  <Grid xs={1} >
    <Box sx={{margin:'auto' ,display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%'}}>

    <img style={{width:'50px', color:'white'}}src='./logwhit.svg'/>
    </Box>
    </Grid>
    <Grid xs={9}>
    <Stepper activeStep={activeStep} alternativeLabel  connector={<QontoConnector />} sx={{backgroundColor:'#CF682F', height:'120px', padding:'10px 10%', margin:'auto'}} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}  >
              <StepLabel {...labelProps}>{label} </StepLabel>
            </Step>
          );
        })}
      
      </Stepper>
    </Grid>
    <Grid xs={2}>
    <Box sx={{ display:'flex', color:'white'}}>

          <List >
      <ListItem> 
      Paul Rudd
      </ListItem>
      <ListItem>
      Author
      </ListItem>
      <ListItem>
      Last login : 23:05 UCT
      </ListItem>
    </List>
    <Button sx={{width:'50px', display:'flex'}}>
        <LogoutIcon sx={{color:'white'}} onClick={()=>{handleClick()}}/>
          </Button>
 </Box>
    </Grid>
  </Grid>
      
      {/* <Box sx={{display:'flex', justifyContent:'space-between',marginTop:'-80px',}}>
        
<img style={{width:'50px', margin:' -61px 0px 0px 62px ', color:'white'}}src='./logwhit.svg'/>
       <Box>

   
<Button sx={{width:'50px', margin:' -61px 0px 0px 62px '}}>
        <LogoutIcon/>
          </Button>
          <List sx={{width:'auto', margin:' -70px 0px 0px 0px '}} >
      <ListItem> 
      Paul Rudd
      </ListItem>
      <ListItem>
      Author
      </ListItem>
      <ListItem>
      Last login : 23:05 UCT
      </ListItem>
    </List>
 </Box>
       
      </Box> */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>

            <ProductInfo/>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  
    </Box>
   
  );
}
