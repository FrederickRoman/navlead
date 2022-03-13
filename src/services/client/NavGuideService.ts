import axios from "axios";
import Traveler from "@/types/interfaces/Traveler";
import Location from "@/types/interfaces/Location";

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
    try {
      const { question, target, location } = traveler;
      const body = {
        question,
        target,
        location: unityToBlenderCoordinates(location),
      };
      console.log(body);
      const res = await axios.post(API_URL, body);
      console.log(res);
      const answer: string = res.data.answer;
      return answer;
    } catch (error) {
      console.log(error);
      return "";
    }
  }
}

export default NavGuideService;
