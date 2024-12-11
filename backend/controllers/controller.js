
import mongoose from "mongoose";

import Product from "../models/productSchema.js";

export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json({success:true,  data:products});
    }
    catch(error){
        res.statsus(500).json({error:error.message});

    }
};

export const createProduct=async(req,res)=>{
    
    console.log(req.body);
    const{product}=req.body;
    if(!product.name ||!product.price || !product.image){
        return res.status(400).json({error:"Error fill all the fields"});
    }

    try{
        
        const new_product=new Product(product);
        await new_product.save();
        res.status(201).json({success:true,data:new_product});

    }
    catch(error){
        console.log("Error in creating new product");
        return res.status(400).json({error:error.message});
    }
    
}

export const updateProduct=async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json(404).json({error:"Invalid product Id"});
    }
    const{product}=req.body;//getting previous id
    

    try{
        const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
        
    }
    catch(error){
        console.log("error  in updating product");
        res.status(404).json({error:error.message});
    }
}

export const deleteProduct=async(req,res)=>{
    const{id}=req.params;
    try{
        const p=Product.findById(id);
        if(!p){
            return res.status(404).json({success:false,error:"Product not found"});
           
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"deleted"});
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

export const getProduct=async(req,res)=>{
    const{id}=req.params;
    try{
        const product=await Product.findById(id);
        if(!product) return res.status(404).json({success:false,error:"Product not found"});
        res.status(200).json({success:true,data:product});
    }
    catch(error){
        console.log(error);
        res.status(404).json({success:false,error:error.message});
    }

};

