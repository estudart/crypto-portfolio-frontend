import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function Portfolio({ data }) {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    async function getActual() {
      try {
        // Fetch USD to BRL conversion rate from another API
        const result_usd = await axios.get(
          `http://economia.awesomeapi.com.br/json/last/USD-BRL`
        );
        const usd_data = result_usd.data;
        const usd_data_ask = parseFloat(usd_data.USDBRL.ask);

        if (!data.symbol) {
          console.error("Symbol not supported:", data.symbol);
          return;
        }

        // Fetch the price data for the currency from Coinbase API
        const coinbase_api_url = `https://api.coinbase.com/v2/prices/${data.symbol}-USD/spot`;
        const result_last = await axios.get(coinbase_api_url);
        const last_data = parseFloat(result_last.data.data.amount);

        // Calculate the actual value
        setActual(last_data * usd_data_ask);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getActual();
  }, [data]);

  return (
    <tr>
      <td>{data.symbol}</td>
      <td>{parseFloat(data.quantity).toFixed(4)}</td>
      <td>{parseFloat(data.price).toFixed(2)}&nbsp;BRL</td>
      <td>{(parseFloat(data.price) / parseFloat(data.quantity)).toFixed(2)}</td>
      <td>
        {(
          actual * data.quantity -
          (parseFloat(data.price) / parseFloat(data.quantity)) * data.quantity
        ).toFixed(2)}
        &nbsp;BRL
      </td>
    </tr>
  );
}
