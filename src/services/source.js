import Data from "../models/data.js";

export default class sourceService {
  async getSource() {
    try {
      const source = await Data.distinct("source");
      return source;
    } catch (e) {
      console.error(e);
    }
  }
  async getSourceData(source) {
    try {
      const endYearData = await Data.find({ source: source });
      return endYearData;
    } catch (e) {
      console.error(e);
    }
  }
}
