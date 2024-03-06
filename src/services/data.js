import Data from "../models/data.js";

export default class dataService {
  async getData() {
    try {
      const data = await Data.find({});
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
