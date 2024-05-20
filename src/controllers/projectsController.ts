import { Request, Response } from "express";
import { Projects } from "../models/projects";

export const getProjects = (req: Request, res: Response) => {
  if (Projects) {
    res.json(Projects);
  } else {
    res.status(404).send({ message: "No Projects found" });
  }
};
