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
        const result = await axios.get(
          "https://crypto-backend-52fe7d65b9dc.herokuapp.com/portfolio",
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

  useEffect(() => {
    async function getProfit() {
      var profit = 0;
      var soma = 0;
      for (const [key, value] of Object.entries(data)) {
        var actualProfit = 0;
        soma = soma + value.price;

        const result_usd = await axios.get(
          `https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL`
        );
        const usd_data = result_usd.data;
        const usd_data_ask = parseFloat(usd_data.price);

        try {
          const coinbase_api_url = `https://api.coinbase.com/v2/prices/${value.symbol}-USD/spot`;
          const result_last = await axios.get(coinbase_api_url);
          const last_data = parseFloat(result_last.data.data.amount);
          actualProfit =
            last_data * usd_data_ask * value.quantity - value.price;
          profit = profit + actualProfit;
        } catch (error) {
          // If symbol not found in Coinbase API, switch to Binance API
          const binance_api_url = `https://api.binance.com/api/v3/ticker/price?symbol=${value.symbol}USDT`;
          const result_last = await axios.get(binance_api_url);
          const last_data = parseFloat(result_last.data.price);
          if (
            last_data * usd_data_ask * value.quantity - value.price <
            0.0000001
          ) {
            actualProfit = -value.price;
          } else {
            actualProfit =
              last_data * usd_data_ask * value.quantity - value.price;
          }
          profit = profit + actualProfit;
          console.log(profit);
        }
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
                {data.map(
                  (crypto) =>
                    crypto.quantity > 0.0001 && (
                      <Portfolio key={crypto.symbol} data={crypto} />
                    )
                )}
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Total invested: {somaTotal.toFixed(2)} BRL</th>
                  <th>
                    Invested + Profit: {somaTotal.toFixed(2)} +{" "}
                    {profitTotal.toFixed(2)} ={" "}
                    {(somaTotal + profitTotal).toFixed(2)}
                  </th>
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
