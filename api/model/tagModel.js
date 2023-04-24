import mongoose from "mongoose";


//======================cretagSchemate schema
const tagSchema =mongoose.Schema({
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
export const tagModel =mongoose.model("Tag",tagSchema)