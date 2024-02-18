import { useState, useEffect } from "react";
import PieChart from "../components/PieChart";
import axios from "axios";

function Overview() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await axios.get("http://127.0.0.1:5000/portfolio");
      const result_data = result.data;
      console.log(result_data);
      setData(result_data);
    }
    getData();
  }, []);

  return (
    <div className="App dark-theme">
      {" "}
      <header>
        <h1 className="page-title">Assets Distribution</h1>
      </header>
      <main>
        {data !== "" ? (
          <div className="pie-chart">
            <PieChart data={data} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default Overview;
