import { useEffect } from "react";
import NavGuideService from "@/services/client/NavGuideService";
import Traveler from "@/types/interfaces/Traveler";
import Location from "@/types/interfaces/Location";
import Unity3dScene from "./scene/Unity3dScene";
import { Grid, Box, Typography } from "@mui/material";

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
        console.log(answer);
      } catch (error) {
        console.log(error);
      }
    }
    window.addEventListener("askNavGuide", askNavGuide);
    return () => window.removeEventListener("askNavGuide", askNavGuide);
  }, []);
}

function NavInstructions(): JSX.Element {
  return (
    <Box
      sx={{
        color: "white",
        fontSize: "clamp(2em, 0.05vh, 3em)",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
        Demo instructions:
      </Typography>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h5">Choose a target household item</Typography>
        <Typography variant="h5">Navigate the house</Typography>
        <Typography variant="h5">Ask the chatbot for assistance</Typography>
      </Box>
    </Box>
  );
}

function NavGuidance(): JSX.Element {
  useNavGuide();
  return (
    <Box
      component="section"
      py="clamp(16rem, 10vh, 30rem)"
      sx={{ bgcolor: "black" }}
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Grid item>
          <NavInstructions />
        </Grid>
        <Grid item>
          <Unity3dScene />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavGuidance;
