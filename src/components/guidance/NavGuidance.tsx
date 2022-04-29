import { useEffect } from "react";
import NavGuideService from "@/services/client/NavGuideService";
import Traveler from "@/types/interfaces/Traveler";
import Location from "@/types/interfaces/Location";
import Unity3DMap from "./map/Unity3DMap";

function NavGuidance(): JSX.Element {
  useEffect(() => {
    const formatStringToLocation = (location: string): Location => {
      const [x, y, z] = location.split(",").map(parseFloat);
      return { x, y, z };
    };
    async function askGuide(event: Event): Promise<void> {
      try {
        const unityGameState = (event as CustomEvent).detail;
        const gameStateObj = JSON.parse(unityGameState);
        const { question, target, location: locationString } = gameStateObj;
        const location: Location = formatStringToLocation(locationString);
        const traveler: Traveler = { question, target, location };
        const answer: string = await NavGuideService.answer(traveler);
        window.sendAnswerToUnity(answer);
        console.log(answer);
      } catch (error) {
        console.log(error);
      }
    }
    window.addEventListener("askGuide", askGuide);
    return () => window.removeEventListener("askGuide", askGuide);
  }, []);

  return <Unity3DMap />;
}

export default NavGuidance;
