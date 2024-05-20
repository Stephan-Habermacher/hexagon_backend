import { Request, Response } from "express";
import { Project } from "../models/project";

export const getProject = (req: Request, res: Response) => {
  const { id } = req.params;
  const project = Project.findById(id);

  if (project) {
    res.json(project);
  } else {
    res.status(404).send({ message: "Project not found" });
  }
};

export const postProject = (req: Request, res: Response) => {
  const newProject = new Project(req.body);
  const savedProject = newProject.save();

  res.status(201).json(savedProject);
};
