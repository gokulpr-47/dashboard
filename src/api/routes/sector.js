import { Router } from "express";
import sectorService from "../../services/sector.js";
const route = Router();

export default (app) => {
  app.use("/data", route);

  const sectorInstance = new sectorService();
  route.get("/sector", async (req, res) => {
    console.log("calling sector endpoint");

    try {
      const data = await sectorInstance.getSector();
      return res.status(200).json(data);
    } catch (e) {
      console.error("sectorRoute: ", e);
    }
  });
  route.get("/sector/:sector", async (req, res) => {
    console.log("calling sector with year endpoint");

    try {
      const data = await sectorInstance.getSectorData(req.params.sector);
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  });
};
