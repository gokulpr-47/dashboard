import Data from "../models/data.js";

export default class topicService {
  async getTopic() {
    try {
      const topic = await Data.distinct("topic");
      return topic;
    } catch (e) {
      console.error(e);
    }
  }
  async getTopicData(topic) {
    try {
      const endYearData = await Data.find({ topic: topic });
      return endYearData;
    } catch (e) {
      console.error(e);
    }
  }
}
