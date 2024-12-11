import React from 'react';
import {Box}  from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState ,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router';
import axios from "axios";



const UpdateForm = () => {
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[image,setImage]=useState("");
  const{id}=useParams();
  const navigate=useNavigate();
  
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const response=await axios.get(`http://localhost:5000/api/products/${id}`);
      const{name,price,image}=response.data.data;
      setName(name);
      setPrice(price); 
      setImage(image);
      }
      catch(error){
        console.log(error);
      }
      
      
    }
    fetchData();
  },[]);
 
  const updateProduct=async()=>{
    const product={
      name:name,
      price:price,
      image:image
    }
    try{
      const response=await axios.put(`http://localhost:5000/api/products/${id}`,{
        product:product
      });
      if(response){
        return true;
      }
    }
    catch(error){
      console.log(error);
      return false;
    }

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const isSuccess=await updateProduct();
    if(isSuccess){
      navigate("/");
    }

  }
  
  
  return (
    <Box sx={{display:"flex",height:"100vh",background: "#800020",justifyContent:"center",alignItems:"center"}}>

      <form onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor="name">Name:</label>
        <br />
        <br/>
        <TextField
          id="name"
          variant="filled"
          color="success"
          focused
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          autoComplete="off"
        />
        <br/>
        <br/>
        <label htmlFor="price">Price:</label>
        <br />
        <br />
        <TextField
          id="price"
          variant="filled"
          color="success"
          focused
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Update name state
          autoComplete="off"
        />
        <br /> 
        <br /> 
        <label htmlFor="image">Image:</label>
        <br /> 
        <br /> 
        <TextField
          id="image"
          variant="filled"
          color="success"
          focused
          value={image}
          onChange={(e) => setImage(e.target.value)} // Update name state
          autoComplete="off"
        />
        <br /> 
        <br />
        <Button variant="contained" type="submit">
          Update
        </Button>
        
        

      </form>
      
    </Box>
  )
}

export default UpdateForm;
