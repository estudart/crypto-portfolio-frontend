import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://crypto-backend-52fe7d65b9dc.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.access_token;
      if (response.data.access_token) {
        alert("login success");
        setEmail("");
        setPassword("");
        // Redirect to the home page
        navigate("/home");
      } else {
        alert("invalid credentials");
      }

      // Store the token in localStorage
      localStorage.setItem("token", token);
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
        <input type="submit" value="Login" className="form-submit" />
        <input
          type="button"
          value="Register"
          className="form-submit"
          style={{ marginLeft: "2%" }}
          onClick={() => navigate("/register")}
        />
      </form>
    </div>
  );
}

export default LoginForm;
