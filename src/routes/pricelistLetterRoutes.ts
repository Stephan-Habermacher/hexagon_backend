import { Router } from "express";
import { getPricelistLetter } from "../controllers/pricelistLetterController";

const router = Router();

router.get("/", getPricelistLetter);

export default router;
