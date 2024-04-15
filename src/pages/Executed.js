import { useState, useEffect } from "react";
import axios from "axios";
import ExecutedOrders from "../components/ExecutedOrders";
import NavBar from "../components/NavBar";
import "../App.css";

function Executed() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        // Get the JWT token from local storage
        const token = localStorage.getItem("token");

        // Include the token in the request headers
        const result = await axios.get(
          "https://127.0.0.1:5000/exec_order",
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
