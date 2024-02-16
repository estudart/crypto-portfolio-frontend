import { useState } from "react";
import axios from "axios";

export default function OrderReport() {
  const [ticker, setTicker] = useState("");
  const [side, setSide] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  return (
    <div>
      <form>
        <label>
          Enter the Crypto Ticker:
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
        </label>
        <label>
          BUY/SELL:
          <input
            type="text"
            value={side}
            onChange={(e) => setSide(e.target.value)}
          />
        </label>
        <label>
          quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          amout:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          currency:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <input type="input" />
      </form>
    </div>
  );
}
