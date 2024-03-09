import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
                location.pathname === "/home" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to={`/overview`}
              className={
                location.pathname === "/overview"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Overview
            </Link>
            <Link
              to={`/new_order`}
              className={
                location.pathname === "/new_order"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Report Order
            </Link>
            <Link
              to={`/exec_orders`}
              className={
                location.pathname === "/exec_orders"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Executed
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
