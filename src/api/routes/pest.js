import { Router } from "express";
import pestService from "../../services/pest.js";
const route = Router();

export default (app) => {
  app.use("/data", route);

  const pestInstance = new pestService();
  route.get("/pest", async (req, res) => {
    console.log("calling pest endpoint");

    try {
      const data = await pestInstance.getPest();
      return res.status(200).json(data);
    } catch (e) {
      console.error("pestRoute: ", e);
    }
  });
  route.get("/pest/:pest", async (req, res) => {
    console.log("calling pest with year endpoint");

    try {
      const data = await pestInstance.getPestData(req.params.pest);
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  });
};
