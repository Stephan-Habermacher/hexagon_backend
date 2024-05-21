import { Request, Response } from "express";
import { mockProjects } from "../mockData";

export const getProject = (req: Request, res: Response) => {
  const { id } = req.params;
  const project = mockProjects.find((p) => p.id === id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).send({ message: "Project not found" });
  }
};

export const postProject = (req: Request, res: Response) => {
  const newProject = req.body;
  mockProjects.push(newProject);
  res.status(201).json(newProject);
};
