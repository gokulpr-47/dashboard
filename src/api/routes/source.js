import { Router } from "express";
import sourceService from "../../services/source.js";
const route = Router();

export default (app) => {
  app.use("/data", route);

  const sourceInstance = new sourceService();
  route.get("/source", async (req, res) => {
    console.log("calling source endpoint");

    try {
      const data = await sourceInstance.getSource();
      return res.status(200).json(data);
    } catch (e) {
      console.error("sourceRoute: ", e);
    }
  });
  route.get("/source/:source", async (req, res) => {
    console.log("calling source with year endpoint");

    try {
      const data = await sourceInstance.getSourceData(req.params.source);
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  });
};
