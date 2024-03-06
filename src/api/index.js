import { Router } from "express";
import data from "./routes/data.js";
import endYear from "./routes/endYear.js";
import initial from "./routes/initial.js";
import topic from "./routes/topic.js";
import sector from "./routes/sector.js";
import pest from "./routes/pest.js";
import source from "./routes/source.js";

export default () => {
  const app = Router();
  data(app);
  endYear(app);
  initial(app);
  topic(app);
  sector(app);
  pest(app);
  source(app);

  return app;
};
