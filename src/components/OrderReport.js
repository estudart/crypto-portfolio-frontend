import { useState } from "react";
import "../App.css";
import { type } from "@testing-library/user-event/dist/type";

export default function OrderReport() {
  const [ticker, setTicker] = useState("");
  const [side, setSide] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert([ticker, side, quantity, amount, currency]);
    console.log(type(quantity));
    setTicker("");
    setSide("");
    setQuantity("");
    setAmount("");
    setCurrency("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Ticker:
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            className="form-input"
          />
        </label>
        <label className="form-label">
          BUY/SELL:
          <input
            type="text"
            value={side}
            onChange={(e) => setSide(e.target.value.toUpperCase())}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Currency:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value.toUpperCase())}
            className="form-input"
          />
        </label>
        <input type="submit" className="form-submit" />
      </form>
    </div>
  );
}
