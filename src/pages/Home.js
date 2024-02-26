import { useState, useEffect } from "react";
import Portfolio from "../components/Portfolio";
import NavBar from "../components/NavBar";
import axios from "axios";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        // Get the JWT token from local storage
        const token = localStorage.getItem("token");

        // Include the token in the request headers
        const result = await axios.get("http://127.0.0.1:5000/portfolio", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result_data = result.data;
        console.log(result_data);
        setData(result_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="App dark-theme">
      <NavBar />
      <header>
        <h1 className="page-title">CoinKeeper</h1>
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
                {data.map((crypto) => (
                  <Portfolio key={crypto.symbol} data={crypto} />
                ))}
              </tbody>
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
