import { Request, Response } from "express";
import { mockDataPricelistOuterenvelope } from "../mockDataPricelistOuterenvelope";

export const getPricelistOuterenvelope = (req: Request, res: Response) => {
  if (mockDataPricelistOuterenvelope) {
    const seenPrints = new Set(
      mockDataPricelistOuterenvelope.map((pricelist) => pricelist.print)
    );
    const array = Array.from(seenPrints);
    res.json(array);
  } else {
    res.status(404).send({ message: "No Pricelist found" });
  }
};
