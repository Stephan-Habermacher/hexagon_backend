import { Request, Response } from "express";
import { mockProjects } from "../mockData";

export const getProjects = (req: Request, res: Response) => {
  if (mockProjects) {
    res.json(mockProjects);
  } else {
    res.status(404).send({ message: "No Projects found" });
  }
};
