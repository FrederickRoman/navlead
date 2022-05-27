import Traveler from "@/types/interfaces/Traveler";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/navigation/";

class NavGuide {
  static async awake(): Promise<void> {
    try {
      await axios.post(API_URL, {
        question: "",
        target: "",
        location: "",
        API_KEY: process.env.ML_SERVER_API_KEY,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async answer(traveler: Traveler): Promise<string> {
    try {
      console.log("proxy");
      const body = {...traveler, API_KEY: process.env.ML_SERVER_API_KEY};
      const res = await axios.post(API_URL, body);
      return res.data.answer;
    } catch (error) {
      return "";
    }
  }
}

class ProxyService {
  static navGuide = NavGuide;
}

export default ProxyService;
