import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        console.log(process.env.MONGO_URI);
        const connect=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb Conected ${connect.connection.host}`);

    }
    catch(error){
        console.log(`Error occurred ${error}.message`);
        process.exit(1);
    }
};

export default connectDb;