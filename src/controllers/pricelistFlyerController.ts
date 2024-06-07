import { Request, Response } from "express";
import { mockDataPricelistFlyer } from "../mockDataPricelistFlyer";

export const getPricelistFlyer = (req: Request, res: Response) => {
  if (mockDataPricelistFlyer) {
    res.json(mockDataPricelistFlyer);
  } else {
    res.status(404).send({ message: "No pricelist for flyer found" });
  }
};
