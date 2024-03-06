import Data from "../models/data.js";

export default class endYearService {
  async getYear() {
    try {
      const endYear = await Data.distinct("end_year");
      return endYear;
    } catch (e) {
      console.error(e);
    }
  }
  async getEndYearData(endYear) {
    try {
      const endYearData = await Data.find({ end_year: endYear });
      return endYearData;
    } catch (e) {
      console.error(e);
    }
  }
}
