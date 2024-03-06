import dataService from "../../services/data.js";
import { Router } from "express";
const route = Router();

export default (app) => {
  app.use("/data", route);

  route.get("/complete", async (req, res) => {
    console.log("calling data endpoint with body: ");
    try {
      const dataInstance = new dataService();
      const data = await dataInstance.getData();
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  });
};
