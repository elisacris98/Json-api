import express from "express";
import connectDB from "./db/connection.js";
import heroRoutes from "./routes/index.js";
import chalk from "chalk";
import cors from "cros";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

connectDB()
app.use("/api", heroRoutes);

    // SET UP SERVER TO LISTEN FOR REQUESTS ON PORT
    app.listen(PORT, () => {
      process.env.NODE_ENV === "production"
        ? console.log(`Express server running in production on port ${PORT}`)
        : console.log(`Express server running in development on: ${PORT}`);
    });
