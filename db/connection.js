import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/myhero", {
            
        })
    }
}