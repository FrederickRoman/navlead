const navGuide = `import { useEffect } from "react";
import NavGuideService from "services/NavGuideService";

declare global {
    interface Window {
      processMessageFromUnity: () => void;
      sendAnswerToUnity: (answer: string) => void;
    }
}

interface Location {
  x: number;
  y: number;
  z: number;
}

interface Traveler {
  question: string;
  target: string;
  location: Location;
}
  
function useNavGuide(): void {
    useEffect(() => {
      const formatStringToLocation = (location: string): Location => {
        const [x, y, z] = location.split(",").map(parseFloat);
        return { x, y, z };
      };
      async function askNavGuide(event: Event): Promise<void> {
        try {
          const unityGameState = (event as CustomEvent).detail;
          const gameStateObj = JSON.parse(unityGameState);
          const { question, target, location: locationString } = gameStateObj;
          const location: Location = formatStringToLocation(locationString);
          const traveler: Traveler = { question, target, location };
          const answer: string = await NavGuideService.answer(traveler);
          window.sendAnswerToUnity(answer);
        } catch (error) {
          console.log(error);
        }
      }
      window.addEventListener("askNavGuide", askNavGuide);
      return () => window.removeEventListener("askNavGuide", askNavGuide);
    }, []);
}

export default useNavGuide;`;

export default navGuide;
