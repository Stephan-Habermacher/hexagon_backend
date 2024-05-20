import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import projectsRoutes from "./routes/projectsRoutes";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/project", projectRoutes);
app.use("/projects", projectsRoutes);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
