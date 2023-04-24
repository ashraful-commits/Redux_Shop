import mongoose from "mongoose";


//======================create schema
const CatagorySchema =mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    slug:{
        type:String,
        trim:true
    },
    
    photo:{
        type:String,
        trim:true,
        default:null
    },
   
    
},{timestamps:true})



//========================product model
export const CatagoryModel =mongoose.model("Catagory",CatagorySchema)