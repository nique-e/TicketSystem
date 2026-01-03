import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Home</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Register</Link>
            <Link className="nav-link" to="/admin">Admin</Link>
            <Link className="nav-link" to="/customer">Customer</Link>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
