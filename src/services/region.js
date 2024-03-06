import Data from "../models/data.js";

export default class regionService {
  async getRegion() {
    try {
      const region = await Data.distinct("region");
      return region;
    } catch (e) {
      console.error(e);
    }
  }
}
