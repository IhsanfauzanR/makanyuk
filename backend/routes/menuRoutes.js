import express from "express";
import { getMenu, addMenu } from "../controllers/menuController.js";
const router = express.Router();

router.get("/", getMenu);
router.post("/", addMenu);

export default router;
