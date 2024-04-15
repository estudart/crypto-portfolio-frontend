import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function OrderReport() {
  const [ticker, setTicker] = useState("");
  const [side, setSide] = useState("BUY");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BRL");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://127.0.0.1:5000/exec_order",
        {
          symbol: ticker,
          side: side,
          quantity: parseFloat(quantity),
          price: parseFloat(amount),
          currency: currency,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data["message"]);
      setTicker("");
      setSide("BUY");
      setQuantity("");
      setAmount("");
      setCurrency("BRL");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Ticker: <span style={{ color: "gray" }}>(BTC, ETH, ...)</span>
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            className="form-input"
          />
        </label>
        <label className="form-label">
          BUY/SELL:
          <select
            type="text"
            value={side}
            onChange={(e) => setSide(e.target.value)}
            className="form-input"
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
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
          Amount: <span style={{ color: "gray" }}>(Fiat)</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Currency:
          <select
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="form-input"
          >
            <option value="BRL">BRL</option>
            {/*<option>USD</option>
            <option>USDT</option>*/}
          </select>
        </label>
        <input type="submit" className="form-submit" />
      </form>
    </div>
  );
}
