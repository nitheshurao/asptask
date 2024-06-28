import { Typography,TextField,Button,Container, Box, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import BottomNav from './BottomNav';

const Login = () => {
    const [iserro,setError] =useState(false)
    const [name, setName]= useState('')
    const [password,setPassword]= useState('')
    const navigate = useNavigate();

    function handleClick() {
      navigate("/TemplatesList");
    }
  
  return (<>
  <Box sx={{backgroundColor:'#CF682F', height:'3px'}}></Box>
     <Box sx={{ height:'100vh', display:'flex',alignItems: 'center'}}>
   <Container maxWidth="sm" sx={{width:'435px'}} >
     
      <img style={{margin:'auto',display:'block', width:'107px'}}src='./log.svg'/>
      <form >
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       {iserro? <Alert severity="error">Invalid credentials. Please try again.</Alert>:''}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
          onClick={()=>{
            {name.length<0 || password.length<0 ?  setError(true) :

                handleClick()

            }
           }}
        >
          Login
        </Button>
      </form>
      <Typography sx={{
fontWeight:'400',
fontSize:'10px',
display:'flex',
justifyContent:'center',
margin:'20px'

}}>Forgot Password?</Typography>
      <BottomNav/>
    </Container>
    </Box>
  </>
 
 
  );
};

export default Login;
