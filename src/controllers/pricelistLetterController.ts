import { Request, Response } from "express";
import { mockDataPricelistLetter } from "../mockDataPricelistLetter";

export const getPricelistLetter = (req: Request, res: Response) => {
  if (mockDataPricelistLetter) {
    res.json(mockDataPricelistLetter);
  } else {
    res.status(404).send({ message: "No pricelist for letter found" });
  }
};
