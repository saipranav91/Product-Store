import * as React from 'react';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import axios from "axios";

const ProductCard=({product})=>{
  const navigate=useNavigate();
  const deleteProduct=async(id)=>{
    const confirmDelete = window.confirm(`Are you sure you want to delete "${product.name}"?`);
    if (!confirmDelete) return;
    try{
      const res=await axios.delete(`http://localhost:5000/api/products/${id}`);
      if(res.status==200){
        alert("Product deleted successfully.");
        navigate("/");
        window.location.reload();
      }
      else{
        alert("Error while deleting product")
      }
    }
    catch(error){
      alert("Error while deleting product");
    }
  
  }
  return (
    <Paper>
      <Card sx={{minWidth:200}} >
      <CardMedia
        sx={{ height: 200}}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate(`/update/${product._id}`)}>Update</Button>
        <Button size="small" onClick={()=>deleteProduct(product._id)}>Delete</Button>
      </CardActions>
    </Card>

    </Paper>
    
  );
}
export default ProductCard;

