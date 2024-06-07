import { Request, Response } from "express";
import { mockDataPricelistcard } from "../mockDataPricelistCard";

export const getPricelistCard = (req: Request, res: Response) => {
  if (mockDataPricelistcard) {
    res.json(mockDataPricelistcard);
  } else {
    res.status(404).send({ message: "No pricelist for card found" });
  }
};
