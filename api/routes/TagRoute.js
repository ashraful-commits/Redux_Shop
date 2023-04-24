import express from "express"
import { GetAllTagProducts, createTagProducts, deleteSingleTagProducts, getSinglTageProducts, updateSingleTagProducts } from "../controllers/TagController.js"
import { singlePhotoUpload } from "../middlewares/multer.js"

const TagRoute = express.Router()

TagRoute.get("/tag",GetAllTagProducts).post("/tag",singlePhotoUpload,createTagProducts)
 TagRoute.get("/tag/:id",getSinglTageProducts).put("/tag/:id",singlePhotoUpload,updateSingleTagProducts).delete("/tag/:id",deleteSingleTagProducts)

export default TagRoute