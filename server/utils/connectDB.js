import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGODB_URL;

export default function connetDB() {
    try {
        const conn = mongoose.connect(url);
        console.log("Connection Successfull...");
    }
    catch (err) {
        console.log("Connection Failed " + err);
    }
}