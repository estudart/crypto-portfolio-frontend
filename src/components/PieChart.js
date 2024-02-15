import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function PieChart({ data }) {
  // Extract labels and values from the data
  const labels = data.map((crypto) => crypto.symbol);
  console.log(labels);
  const values = data.map((crypto) => crypto.price.toFixed(2));
  console.log(values);

  // Create a dataset object for Chart.js
  const dataset = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF6666",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF6666",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={dataset} />
    </div>
  );
}
