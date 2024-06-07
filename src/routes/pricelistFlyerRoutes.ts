import { Router } from "express";
import { getPricelistFlyer } from "../controllers/pricelistFlyerController";

const router = Router();

router.get("/", getPricelistFlyer);

export default router;
