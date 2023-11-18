import express from "express";
import { testController } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/test", testController);

export default router;
