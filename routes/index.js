import express from "express"
import * as heroController from "../controllers/heroControllers.js"


const router = express.Router();

router.get("/hero",heroController.getHero);
router.post("/hero",heroController.createHero);
router.put("/hero/:id", heroController.updateHero);
router.delete("/hero/:id", heroController.deleteHero);

export default router;

