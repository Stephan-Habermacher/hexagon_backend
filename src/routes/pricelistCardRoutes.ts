import { Router } from "express";
import { getPricelistCard } from "../controllers/pricelistCardController";

const router = Router();

router.get("/", getPricelistCard);

export default router;
