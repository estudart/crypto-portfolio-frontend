import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://127.0.0.1:5000/register_user",
        {
          email: email,
          password: password,
        }
      );

      alert(response.data.message);
      setEmail("");
      setPassword("");
      // Redirect to the login page
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </label>
        <input type="submit" value="Register" className="form-submit" />
      </form>
    </div>
  );
}

export default RegisterForm;
