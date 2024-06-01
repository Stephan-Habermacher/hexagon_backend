import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import projectsRoutes from "./routes/projectsRoutes";
import lettershopRoutes from "./routes/lettershopRoutes";
import outerenvelopeRoutes from "./routes/outerenvelopeRoutes";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/project", projectRoutes);
app.use("/projects", projectsRoutes);
app.use("/lettershops", lettershopRoutes);
app.use("/outerenvelopes", outerenvelopeRoutes);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
