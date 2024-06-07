import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import projectsRoutes from "./routes/projectsRoutes";
import lettershopRoutes from "./routes/lettershopRoutes";
import outerenvelopeRoutes from "./routes/outerenvelopeRoutes";
import pricelistOuterenvelopeRoutes from "./routes/pricelistOuterenvelopeRoutes";
import pricelistFlyerRoutes from "./routes/pricelistFlyerRoutes";
import pricelistCardRoutes from "./routes/pricelistCardRoutes";
import pricelistLetterRoutes from "./routes/pricelistLetterRoutes";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/project", projectRoutes);
app.use("/projects", projectsRoutes);
app.use("/lettershops", lettershopRoutes);
app.use("/outerenvelopes", outerenvelopeRoutes);
app.use("/pricelistouterenvelope", pricelistOuterenvelopeRoutes);
app.use("/pricelistletter", pricelistLetterRoutes);
app.use("/pricelistflyer", pricelistFlyerRoutes);
app.use("/pricelistcard", pricelistCardRoutes);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
