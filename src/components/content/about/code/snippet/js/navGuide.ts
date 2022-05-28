const navGuide = `import { useEffect } from "react";
import NavGuideService from "services/NavGuideService";

/* 
 * Type of functions that communicate the simulation with the client browser
 * through the window object
 */
declare global {
    interface Window {
      processMessageFromUnity: () => void; // from simulatin to client
      sendAnswerToUnity: (answer: string) => void; // from client to simulation
    }
}

/* 
 * Type of the traveler's location in the simulation
 */
interface Location {
  x: number;
  y: number;
  z: number;
}

/* 
 * Type of the traveler's state
 */
interface Traveler {
  question: string;
  target: string;
  location: Location;
}
  
/*
 * When a question gets submitted, useNavGuide collects the traveler's full state
 * (which includes the question), and then sends it to the NavGuideService. 
 * After NavGuideService sends back an answer, 
 * the useNavGuide resends the answer to the Unity simulation
 */
function useNavGuide(): void {
    useEffect(() => {
      const formatStringToLocation = (location: string): Location => {
        const [x, y, z] = location.split(",").map(parseFloat);
        return { x, y, z };
      };
      async function askNavGuide(event: Event): Promise<void> {
        try {
          /* Collect the traveler's full state */
          const unityGameState = (event as CustomEvent).detail;
          const gameStateObj = JSON.parse(unityGameState);
          const { question, target, location: locationString } = gameStateObj;
          const location: Location = formatStringToLocation(locationString);
          const traveler: Traveler = { question, target, location };
          /* Ask NavGuideService to answer traveler's question */
          const answer: string = await NavGuideService.answer(traveler);
          /* Send answer to simulation */
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
