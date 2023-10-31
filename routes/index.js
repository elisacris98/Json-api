import express from "express"
import * as heroController from "../controllers/heroControllers.js"


const router = express.Router();

router.get("/hero",heroController.getHero);