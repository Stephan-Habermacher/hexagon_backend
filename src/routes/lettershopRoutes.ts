import { Router } from "express";
import { getLettershops } from "../controllers/lettershopController";

const router = Router();

router.get("/", getLettershops);

export default router;
