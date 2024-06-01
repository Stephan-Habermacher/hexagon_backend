import { Request, Response } from "express";
import { mockDataOuterenvelope } from "../mockDataOuterenvelope";

export const getOuterenvelopes = (req: Request, res: Response) => {
  if (mockDataOuterenvelope) {
    res.json(mockDataOuterenvelope);
  } else {
    res.status(404).send({ message: "No Outerenvelopes found" });
  }
};
