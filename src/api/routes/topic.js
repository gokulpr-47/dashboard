import { Router } from "express";
import topicService from "../../services/topic.js";
const route = Router();

export default (app) => {
  app.use("/data", route);

  const topicInstance = new topicService();
  route.get("/topic", async (req, res) => {
    console.log("calling topic endpoint");

    try {
      const data = await topicInstance.getTopics();
      return res.status(200).json(data);
    } catch (e) {
      console.error("topicRoute: ", e);
    }
  });
  route.get("/topic/:topic", async (req, res) => {
    console.log("calling topic with year endpoint");

    try {
      console.log("req.params.topic: ", req.params.topic);
      const data = await topicInstance.getTopicData(req.params.topic);
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  });
};
