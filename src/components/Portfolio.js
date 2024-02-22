import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function Portfolio({ data }) {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    async function getActual() {
      const result_usd = await axios.get(
        `http://economia.awesomeapi.com.br/json/last/USD-BRL`
      );
      const usd_data = result_usd.data;
      const usd_data_ask = parseFloat(usd_data.USDBRL.ask);
      console.log(usd_data_ask);
      const result_last = await axios.get(
        `https://api.blockchain.com/v3/exchange/tickers/${data.symbol}-USD`
      );
      const last_data = result_last.data.last_trade_price;
      console.log(last_data);
      setActual(last_data * usd_data_ask);
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
