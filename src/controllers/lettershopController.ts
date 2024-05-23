import { Request, Response } from "express";
import { mockDataLettershop } from "../mockDataLettershop";

export const getLettershops = (req: Request, res: Response) => {
  if (mockDataLettershop) {
    res.json(mockDataLettershop);
  } else {
    res.status(404).send({ message: "No Lettershops found" });
  }
};
