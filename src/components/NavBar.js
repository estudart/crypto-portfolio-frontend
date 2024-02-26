import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleActiveItem = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark"
      style={{
        backgroundColor: "black",
        border: "1px solid #282c34",
        borderTop: "0px",
      }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item py-1 px-1">
              <img
                className="home-page-container_1--icon"
                style={{
                  height: "30px",
                  width: "auto",
                  borderRadius: "50%",
                  padding: "auto",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdq1AhY-aYEpxwYvTyHETXwYJad3PwH_UTA&usqp=CAU"
                alt="Crypto Icon"
              />
            </li>
            <Link
              to={`/home`}
              className={
                activeItem === "Portfolio" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleActiveItem("Portfolio")}
            >
              <li className="nav-item">Portfolio</li>
            </Link>
            <Link
              to={`/overview`}
              className={
                activeItem === "Overview" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleActiveItem("Overview")}
            >
              <li className="nav-item">Overview</li>
            </Link>
            <Link
              to={`/new_order`}
              className={
                activeItem === "Report Order" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleActiveItem("Report Order")}
            >
              <li className="nav-item">Report Order</li>
            </Link>
            <Link
              to={`/exec_orders`}
              className={
                activeItem === "Executed" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleActiveItem("Executed")}
            >
              <li className="nav-item">Executed</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
