import React from 'react';
import{Stack} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <Stack direction={"row"} bgcolor={"yellow"} height={"40px"} alignItems={"center"} sx={{position:'sticky',background:'gold',top:0,justifyContent:'center',marginBottom:"10px"}}>
      <h1>Product Store</h1>
      <div className='button'>
        <Link to={"/create"}>
        <AddCircleIcon /> 
        </Link>
     

      </div>
      
    </Stack>
  )
}

export default Navbar
