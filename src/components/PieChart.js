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
          "#FF5733",
          "#FFC300",
          "#32CD32",
          "#008080",
          "#800080",
          "#800000",
        ],
        hoverBackgroundColor: [
          "#E64D22",
          "#E6B800",
          "#2EB82E",
          "#005959",
          "#590059",
          "#590000",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Pie data={dataset} />
    </div>
  );
}
