import { Box, Grid } from '@mui/material'
import React from 'react'
import MenuList from './MenuList'
import HomeTemplate from './HomeTemplate'

function ProductInfo() {
  return (

    <Box sx={{height:'100vh'}}>
<Grid  container spacing={2}>

<Grid xs={2} sx= {{backgroundColor:'#CF682F', boxShadow:'1px 1px 1px 1px gray'}}>
    <MenuList/>
    </Grid>
    <Grid xs={10}  >
    <HomeTemplate/>
  
</Grid>
</Grid>
    </Box>
  )
}

export default ProductInfo