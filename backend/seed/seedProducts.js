import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "../models/productModel.js";
import { products } from "../assets/assets.js"; // Importing products

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("MongoDB connected");
        
        await productModel.deleteMany(); // Optional: Clears existing products before inserting
        await productModel.insertMany(products);
        
        console.log("Products added to database");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));