import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function OrderReport() {
  const [ticker, setTicker] = useState("");
  const [side, setSide] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/exec_order",
        {
          symbol: ticker,
          side: side,
          quantity: parseFloat(quantity),
          price: parseFloat(amount),
          currency: currency,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setTicker("");
      setSide("");
      setQuantity("");
      setAmount("");
      setCurrency("");
    } catch (error) {
      console.error("Error:", error);
    }
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
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Amount:
          <input
            type="number"
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
