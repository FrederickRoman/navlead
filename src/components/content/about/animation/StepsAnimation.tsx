import { Box } from "@mui/material";

function StepsAnimation(): JSX.Element {
  return (
    <>
      <style jsx>
        {`
          @keyframes step-1-intruction-appear {
            0% {
              opacity: 0;
            }
            20% {
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes step-2-intruction-appear {
            0% {
              opacity: 0;
            }
            30% {
              opacity: 0;
            }
            40% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes step-3-intruction-appear {
            0% {
              opacity: 0;
            }
            40% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes step-4-intruction-appear {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0;
            }
            60% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes step-5-intruction-appear {
            0% {
              opacity: 0;
            }
            60% {
              opacity: 0;
            }
            70% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
          div.step-1 {
            animation: 10s infinite step-1-intruction-appear;
          }
          div#step-2 {
            animation: 10s infinite step-2-intruction-appear;
          }
          div#step-3 {
            animation: 10s infinite step-3-intruction-appear;
          }
          div#step-4 {
            animation: 10s infinite step-4-intruction-appear;
          }
          div#step-5 {
            animation: 10s infinite step-5-intruction-appear;
          }
        `}
      </style>
      <Box
        p={2}
        mx={3}
        my={2}
        style={{
          backgroundColor: "white",
          fontSize: "1.5em",
        }}
      >
        <div className="step-1">Continue forward</div>
        <div className="step-1">Continue forward</div>
        <div className="step-1">Continue forward</div>
        <div id="step-2">go to your left</div>
        <div id="step-3">go to your right</div>
        <div id="step-4">go to your left</div>
        <div id="step-5">go to your left</div>
      </Box>
    </>
  );
}

export default StepsAnimation;
