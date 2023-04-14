import React from "react";
import { Link } from "react-router-dom";
import "./navStyles.css";

function Navbar(props) {
  const Inactivebtn = "nav-link fs-5";
  const Activebtn = "nav-link active dark fs-5";
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="navbar-brand fw-bold fs-4" href="#">
              E-Commerce
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a
                    className={onclick == true ? Activebtn : Inactivebtn}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Products
                  </a>
                </li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    About
                  </a>
                </li>
              </Link>

              <Link to="/contact" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
            <Link to="/addcart" style={{ textDecoration: "none" }}>
              <div className="buttons d-flex justify-content-end">
                <a href="" className="btn btn-outline-dark ">
                  <i className="fa fa-shopping-cart me-1"></i> Cart(
                  {props.cartItemsCount})
                </a>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
