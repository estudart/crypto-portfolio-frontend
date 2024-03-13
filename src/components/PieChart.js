import "chart.js/auto";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ data }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      const prices = {};
      for (const asset of data) {
        try {
          const result_usd = await axios.get(
            `https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL`
          );
          const usd_data = result_usd.data;
          const usd_data_ask = parseFloat(usd_data.price);
          // Fetch the price data for the currency from Coinbase API
          const coinbase_api_url = `https://api.coinbase.com/v2/prices/${asset.symbol}-USD/spot`;
          const result_last = await axios.get(coinbase_api_url);
          const last_data = parseFloat(result_last.data.data.amount);
          prices[asset.symbol] = last_data * usd_data_ask;
          console.log(prices[asset.symbol]);
          console.log(Object.keys(prices).length);
        } catch {
          const result_usd = await axios.get(
            `https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL`
          );
          const usd_data = result_usd.data;
          const usd_data_ask = parseFloat(usd_data.price);
          // Fetch the price data for the currency from Coinbase API
          const binance_api_url = `https://api.binance.com/api/v3/ticker/price?symbol=${asset.symbol}USDT`;
          const result_last = await axios.get(binance_api_url);
          const last_data = parseFloat(result_last.data.price);
          prices[asset.symbol] = last_data * usd_data_ask;
          console.log(prices[asset.symbol]);
          console.log(Object.keys(prices).length);
        }
      }
      setPrices(prices);
    }
    fetchPrices();
  }, [data]);

  // Extract labels and values from the data
  const labels = data.map((crypto) => crypto.symbol);
  const values = data.map((crypto) =>
    (prices[crypto.symbol] * crypto.quantity).toFixed(2)
  );

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
      {Object.keys(prices).length === data.length ? (
        <Pie data={dataset} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
