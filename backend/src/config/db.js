import mongoose from "mongoose";

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb");
    }catch(error){
        console.error("error in connecting:",error);
        process.exit(1);
    }

    
}
export {connectDB};