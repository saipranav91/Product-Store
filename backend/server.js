import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import route from "./routes/Route.js";
import path from "path";


const app=express();
dotenv.config();

const PORT=process.env.PORT || 5000;

//middleware logic 
app.use(express.json());
app.use(cors());
app.use("/api/products",route);

const __dirname=path.resolve();
//making frontend static 
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
}
//get req from any path return the index.html file
app.get("*",(req,res)=>{
    //sending index.html file
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
});
app.listen(PORT,()=>{
 
    connectDb();
    console.log(`Server running on port ${PORT}`);
});