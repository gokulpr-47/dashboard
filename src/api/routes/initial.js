import { Router } from "express";
import topicService from "../../services/topic.js";
import endYearService from "../../services/endYear.js";
import sectorService from "../../services/sector.js";
import regionService from "../../services/region.js";
import pestService from "../../services/pest.js";
import sourceService from "../../services/source.js";

const route = Router();

export default (app) => {
  app.use("/data", route);

  route.get("/initial", async (req, res) => {
    console.log("calling initial endpoint");
    try {
      const endYearInstance = new endYearService();
      const endYear = await endYearInstance.getYear();
      const topicInstance = new topicService();
      const topic = await topicInstance.getTopic();
      const sectorInstance = new sectorService();
      const sector = await sectorInstance.getSector();
      const regionInstance = new regionService();
      const region = await regionInstance.getRegion();
      const pestInstance = new pestService();
      const pest = await pestInstance.getPest();
      const sourceInstance = new sourceService();
      const source = await sourceInstance.getSource();
      return res
        .status(200)
        .json({ endYear, topic, sector, region, pest, source });
    } catch (e) {
      console.error(e);
    }
  });
};
