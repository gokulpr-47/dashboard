import { Router } from "express";
import endYearService from "../../services/endYear.js";
const route = Router();

export default (app) => {
  app.use("/data", route);

  const endYearInstance = new endYearService();
  route.get("/endYear", async (req, res) => {
    console.log("calling endyear endpoint");

    try {
      const data = await endYearInstance.getYear();
      return res.status(200).json(data);
    } catch (e) {
      console.error("endyearRoute: ", e);
    }
  });
  route.get("/endYear/:endYear", async (req, res) => {
    console.log("calling endyear with year endpoint");

    try {
      const data = await endYearInstance.getEndYearData(req.params.endYear);
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  });
};
