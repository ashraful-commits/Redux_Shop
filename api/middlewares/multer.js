import multer from "multer"




const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"api/public/brands")
  },
  filename:(req,file,cb)=>{
    cb(null, Date.now() + file.originalname)
  }
})


//================= single photo multer

export const singlePhotoUpload = multer({
    storage
}).single("photo")


