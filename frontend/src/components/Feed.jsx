import React from 'react'
import ProductCard from './ProductCard';
import {useState,useEffect} from "react";
import axios from "axios";
import {Stack,Box} from "@mui/material";

const Feed = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    try{
      const fetchData=async()=>{
        const response=await axios.get("http://localhost:5000/api/products");
        setProducts(response.data.data);
  
      }
      fetchData();
    }
    catch(error){
      console.log(error);
    }
  
  },[])
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      
      {products.map((product,idx)=>(
        <Box key={idx}>
        <ProductCard product={product} />
        </Box>

      ))}
      

    </Stack>
   
  )
}

export default Feed;
