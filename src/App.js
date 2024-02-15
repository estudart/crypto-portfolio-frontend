import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Portfolio from "./components/Portfolio";

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
    <div className="App">
      {data !== "" ? (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Symbol
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Quantity
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Price
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Profit
              </th>
            </tr>
          </thead>
          {data.map((crypto) => (
            <Portfolio data={crypto} />
          ))}
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
