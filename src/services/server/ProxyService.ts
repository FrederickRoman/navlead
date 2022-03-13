import Traveler from "@/types/interfaces/Traveler";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/navigation/";

class NavGuide {
  static async awake(): Promise<void> {
    try {
      const body = { question: "", target: "", location: "" };
      await axios.post(API_URL, body);
    } catch (error) {
      console.log(error);
    }
  }
  static async answer(traveler: Traveler): Promise<string> {
    try {
      console.log("proxy");
      const body = traveler;
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
