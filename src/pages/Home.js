import { useState, useEffect } from "react";
import Portfolio from "../components/Portfolio";
import NavBar from "../components/NavBar";
import axios from "axios";

function Home() {
  const [data, setData] = useState("");
  const [somaTotal, setSomaTotal] = useState(0);
  const [profitTotal, setProfitTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        // Get the JWT token from local storage
        const token = localStorage.getItem("token");

        // Include the token in the request headers
        const result = await axios.get("http://127.0.0.1:5000/portfolio", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result_data = result.data;
        console.log(result_data);
        setData(result_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getProfit() {
      var profit = 0;
      var soma = 0;
      for (const [key, value] of Object.entries(data)) {
        var actualProfit = 0;
        console.log(key, value);
        soma = soma + value.price;

        //console.log(soma);

        const result_usd = await axios.get(
          `http://economia.awesomeapi.com.br/json/last/USD-BRL`
        );
        const usd_data = result_usd.data;
        const usd_data_ask = parseFloat(usd_data.USDBRL.ask);

        const coinbase_api_url = `https://api.coinbase.com/v2/prices/${value.symbol}-USD/spot`;
        const result_last = await axios.get(coinbase_api_url);
        const last_data = parseFloat(result_last.data.data.amount);

        actualProfit = last_data * usd_data_ask * value.quantity - value.price;
        profit = profit + actualProfit;
        console.log(actualProfit);
      }
      setSomaTotal(soma);
      setProfitTotal(profit);
    }
    getProfit();
  }, [data]);

  return (
    <div className="App dark-theme">
      <NavBar />
      <header>
        <h1 className="page-title">Portfolio</h1>
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
            <table>
              <thead>
                <tr>
                  <th>Total invested: {somaTotal.toFixed(2)} BRL</th>
                  <th>Invested + Profit: {profitTotal.toFixed(2)}</th>
                </tr>
              </thead>
            </table>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default Home;
