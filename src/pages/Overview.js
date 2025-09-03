import { useState, useEffect } from "react";
import PieChart from "../components/PieChart";
import NavBar from "../components/NavBar";
import axios from "axios";
import BACKEND_ENDPOINT from "../utils/config"

function Overview() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        // Get the JWT token from local storage
        const token = localStorage.getItem("token");

        // Include the token in the request headers
        const result = await axios.get(
          `${BACKEND_ENDPOINT}/portfolio`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result_data = result.data;
        console.log(result_data);
        setData(result_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="App dark-theme">
      <NavBar />
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
