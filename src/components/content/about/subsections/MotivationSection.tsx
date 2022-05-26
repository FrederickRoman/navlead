import Image from "next/image";
import ImgContainer from "@/components/container/ImgContainer";
import { Grid, Box, Stack, Typography } from "@mui/material";
import navleadiPad from "@/public/img/navlead_iPad.png";
import navleadDialogiPhone from "@/public/img/navlead_dialog_iPhone.png";

function MotivationSection(): JSX.Element {
  return (
    <Box component="section" id="about_motivation">
      <Stack spacing={2}>
        <Typography variant="h2" sx={{ fontWeight: "medium" }}>
          Motivation
        </Typography>
        <Typography variant="h6">
          Inspired by the rise of VR and AI, this project aimed to combine both
          into navigation assistance system and run it through the browser.
        </Typography>
        <ImgContainer>
          <Grid container justifyContent="space-evenly" alignItems="center">
            <Grid item sx={{ width:"50%" }}>
              <Image
                src={navleadiPad}
                placeholder="blur"
                layout="responsive"
                alt="Navlead on an iPad showing simulation with controls"
              />
            </Grid>
            <Grid item  sx={{ width:"35%" }}>
              <Image
                src={navleadDialogiPhone}
                placeholder="blur"
                layout="responsive"
                alt="Navlead on an iPhone showing dialog box for chatbot"
              />
            </Grid>
          </Grid>
        </ImgContainer>
      </Stack>
    </Box>
  );
}

export default MotivationSection;
