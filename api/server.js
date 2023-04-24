import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { MongoDBCnncetion } from "./config/mongoDBConncetion.js";
import productRoute from "./routes/ProductRoute.js";
import { errorHendler } from "./middlewares/errorHendler.js";
import BrandRoute from "./routes/BrandRoute.js";
import catagoryRoute from "./routes/CatagoryRoute.js";
import TagRoute from "./routes/TagRoute.js";
//===============================================> dotenv config
dotenv.config();
//===============================================> evn
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("api/public"));

//================================================> routes
app.use("/api/v1/product", BrandRoute);
app.use("/api/v1/product", catagoryRoute);
app.use("/api/v1/product", TagRoute);
app.use("/api/v1/product", productRoute);
app.use(errorHendler);
//================================================> create server
app.listen(port, () => {
  MongoDBCnncetion();
  console.log(`Server running on port ${port}`.bgCyan.yellow);
});
