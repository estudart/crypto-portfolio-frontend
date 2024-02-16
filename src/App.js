import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Portfolio from "./components/Portfolio";
import PieChart from "./components/PieChart";
import OrderReport from "./components/OrderReport";

function App() {
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
        <h1>CryptoSphere</h1>
      </header>
      <main>
        {data !== "" ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>AVG Price</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((crypto) => (
                  <Portfolio key={crypto.symbol} data={crypto} />
                ))}
              </tbody>
            </table>
            <OrderReport />
            <div className="pie-chart">
              <PieChart data={data} />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default App;
