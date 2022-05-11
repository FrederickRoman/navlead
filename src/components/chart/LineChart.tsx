import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface Props {
  title: string;
  labels: number[];
  data: number[];
  styling?: {
    borderColor?: string;
    backgroundColor?: string;
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  scales: {
    x: { ticks: { font: { size: 18 } } },
    y: { ticks: { font: { size: 18 } } },
  },
  plugins: {
    legend: {
      position: "top",
      labels: { font: { size: 20 } },
    },
  },
} as const;

function LineChart(props: Props): JSX.Element {
  const DEFAULT_STYLE = { borderColor: "darkgreen", backgroundColor: "green" };
  const { labels, data, title: label, styling = DEFAULT_STYLE } = props;
  const { borderColor, backgroundColor } = styling;
  const chartData = {
    labels,
    datasets: [{ label, data, borderColor, backgroundColor }],
  };
  return <Line data={chartData} options={chartOptions} />;
}

export default LineChart;
