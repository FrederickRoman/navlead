import { Typography } from "@mui/material";

function BrandSlogan(): JSX.Element {
  return (
    <Typography
      variant="h2"
      sx={{
        color: "white",
        fontSize: "clamp(1rem, 5vw, 2.5rem)",
        textAlign: "center",
        padding: 2,
      }}
    >
      3D Navigation Assistance Chatbot
    </Typography>
  );
}

export default BrandSlogan;
