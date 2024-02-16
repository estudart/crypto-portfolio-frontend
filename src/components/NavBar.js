import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-light"
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
            <li className="nav-item">
              <img
                className="home-page-container_1--icon"
                style={{ height: "30px", width: "auto" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png"
                alt="Brazil Icon"
              />
            </li>
            <Link to={`/`} className="nav-link">
              <li className="nav-item">Home</li>
            </Link>
            <Link to={`/estatisticas`} className="nav-link">
              <li className="nav-item">Estatisticas</li>
            </Link>
            <Link to={`/estadios`} className="nav-link">
              <li className="nav-item">Estadios</li>
            </Link>
            <Link to={`/curiosidades`} className="nav-link">
              <li className="nav-item">Curiosidades</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
