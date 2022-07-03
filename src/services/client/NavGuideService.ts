import axios from "axios";
import sleep from "@/utils/sleep";
import type Traveler from "@/types/interfaces/Traveler";
import type Location from "@/types/interfaces/Location";

const API_URL = "/api/navigation";

function unityToBlenderCoordinates(unityLocation: Location): Location {
  return {
    x: -unityLocation.x,
    y: -unityLocation.z,
    z: unityLocation.y,
  };
}

class NavGuideService {
  static async answer(traveler: Traveler): Promise<string> {
    const MAX_RETRIES = 10;
    const { question, target, location: unityLocation } = traveler;
    const location = unityToBlenderCoordinates(unityLocation);
    const body = { question, target, location };
    for (let i = 0; i < MAX_RETRIES; i++) {
      try {
        const res = await axios.post(API_URL, body);
        return res.data.answer as string;
      } catch (error) {
        if (i + 1 === MAX_RETRIES) throw error;
        else await sleep(Math.pow(2, i) * 500);
      }
    }
    return "";
  }
}

export default NavGuideService;
