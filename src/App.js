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
    <div className="App dark-theme">
      {" "}
      <header>
        <h1>CryptoSphere</h1>
      </header>
      <main>
        {data !== "" ? (
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
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default App;
