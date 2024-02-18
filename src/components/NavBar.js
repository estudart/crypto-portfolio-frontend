import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQc5LBZu4lwr8rI7UzbPvwqLeDFoAVJtimw&usqp=CAU"
                alt="Brazil Icon"
              />
            </li>
            <Link to={`/`} className="nav-link">
              <li className="nav-item">Portfolio</li>
            </Link>
            <Link to={`/overview`} className="nav-link">
              <li className="nav-item">Overview</li>
            </Link>
            <Link to={`/new_order`} className="nav-link">
              <li className="nav-item">Report Order</li>
            </Link>
            <Link to={`/exec_orders`} className="nav-link">
              <li className="nav-item">Executed</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
