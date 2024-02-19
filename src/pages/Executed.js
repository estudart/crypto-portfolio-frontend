import { useState, useEffect } from "react";
import axios from "axios";
import ExecutedOrders from "../components/ExecutedOrders";
import "../App.css";

function Executed() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await axios.get("http://127.0.0.1:5000/exec_order");
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
        <h1 className="page-title">Executed Orders</h1>
      </header>
      <main>
        {data !== "" ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Side</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((crypto) => (
                  <ExecutedOrders key={crypto.symbol} data={crypto} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default Executed;
