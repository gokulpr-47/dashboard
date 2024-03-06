import Data from "../models/data.js";

export default class sectorService {
  async getSector() {
    try {
      const sector = await Data.distinct("sector");
      return sector;
    } catch (e) {
      console.error(e);
    }
  }
  async getSectorData(sector) {
    try {
      const endYearData = await Data.find({ sector: sector });
      return endYearData;
    } catch (e) {
      console.error(e);
    }
  }
}
