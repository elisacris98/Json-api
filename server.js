import express from "express";
import connectDB from "./db/connection.js";
import heroRoutes from "./routes/index.js";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api", heroRoutes);

app.listen(PORT, () =>{
    console.log(chalk.green(`Server up on ${PORT}`));
});