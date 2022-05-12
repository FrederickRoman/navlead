import LineChart from "@/components/chart/LineChart";
import { Box, Grid } from "@mui/material";
import {
  INTERVAL_STEP_SIZE,
  BLUE_SCORE,
  LOSS,
  WORD_ACCURACY,
} from "./data/NavleadNetMetrics";

const labels: number[] = Array(LOSS.length)
  .fill(null)
  .map((_, index) => INTERVAL_STEP_SIZE * index);
const blueScore: number[] = [...BLUE_SCORE];
const loss: number[] = [...LOSS];
const wordAccuracy: number[] = [...WORD_ACCURACY];

function ResultsChart(): JSX.Element {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box width="90vw" height="auto">
          <LineChart
            title="Blue score"
            labels={labels}
            data={blueScore}
            styling={{ borderColor: "darkblue", backgroundColor: "blue" }}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box width="90vw" height="auto">
          <LineChart
            title="Loss"
            labels={labels}
            data={loss}
            styling={{ borderColor: "darkred", backgroundColor: "red" }}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box width="90vw" height="auto">
          <LineChart
            title="Word accuracy"
            labels={labels}
            data={wordAccuracy}
            styling={{ borderColor: "darkgreen", backgroundColor: "green" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ResultsChart;
