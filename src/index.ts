import express, { NextFunction, Request, Response } from "express";
import { mockProjects } from "./mockData";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

app.get("/projects", (req: Request, res: Response) => {
  res.json(mockProjects);
});
