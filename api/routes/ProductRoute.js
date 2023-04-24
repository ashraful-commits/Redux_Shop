import express from "express"
import { GetAllProducts, createProducts, deleteSingleProducts, getSingleProducts, updateSingleProducts } from "../controllers/productController.js"
import { singlePhotoUpload } from "../middlewares/multer.js"



// create route 

 const productRoute = express.Router()


 productRoute.get("/",GetAllProducts).post("/",singlePhotoUpload,createProducts)
 productRoute.get("/:id",getSingleProducts).put("/:id",singlePhotoUpload,updateSingleProducts).delete("/:id",deleteSingleProducts)
 export default productRoute