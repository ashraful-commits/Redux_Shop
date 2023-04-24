import { ProductModel } from "../model/productModel.js"
import { createSlug } from "../utility/CreateSlug.js"

//================get all product
export const GetAllProducts= async(req,res,next)=>{
    try {
       
        const data = await ProductModel.find()
       res.status(200).json({
        product:data,
        message:"get All product"
       })
    } catch (error) {
        next(error)
    }

}

//================create product
export const createProducts= async(req,res,next)=>{
    try {
       
        const data = await ProductModel.create(
            
        {},{new:true})
       res.status(200).json({
        product:data,
        message:"create product"
       })
    } catch (error) {
        next(error)
    }

}
//================create product
export const getSingleProducts= async(req,res,next)=>{
    try {
       const {id} = req.params
        const data = await ProductModel.findById(
            
        {_id:id})
       res.status(200).json({
        product:data,
        message:"get Single product"
       })
    } catch (error) {
        next(error)
    }

}
//================create product
export const updateSingleProducts= async(req,res,next)=>{
    try {
       const {id} = req.params
       const {name} = req.body
        const data = await ProductModel.findByIdAndUpdate(
            
        id,{name})
       res.status(200).json({
        product:data,
        message:"Update Single product"
       })
    } catch (error) {
        next(error)
    }

}
//================delete product
export const  deleteSingleProducts= async(req,res,next)=>{
    try {
       const {id} = req.params
        const data = await ProductModel.findByIdAndDelete(
            
        id)
       res.status(200).json({
        product:data,
        message:"Delete Single product"
       })
    } catch (error) {
        next(error)
    }

}