import Data from "../models/data.js";

export default class pestService {
  async getPest() {
    try {
      const pest = await Data.distinct("pestle");
      return pest;
    } catch (e) {
      console.error(e);
    }
  }
  async getPestData(pest) {
    try {
      const endYearData = await Data.find({ pestle: pest });
      return endYearData;
    } catch (e) {
      console.error(e);
    }
  }
}
