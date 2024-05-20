import express, { Request, Response } from "express";
import { mockProjects } from "./mockData";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

app.get("/projects", (req: Request, res: Response) => {
  res.json(mockProjects);
});

app.post("/project", (req: Request, res: Response) => {
  req.body;
  console.log(req.body);
  mockProjects.push(req.body);
  res.status(201).send("Projekt erstellt");
});
