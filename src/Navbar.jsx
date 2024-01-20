import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transperant px-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Noxe
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
          <ul className="navbar-nav me-auto m-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="people">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv">
                Tv
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav m-2 mb-lg-0">
            <li className="nav-item order-lg-first order-last d-flex align-items-center">
              <i className="fab mx-2 fa-facebook"></i>
              <i className="fab mx-2 fa-twitter"></i>
              <i className="fab mx-2 fa-instagram"></i>
              <i className="fab mx-2 fa-spotify"></i>
              <i className="fab mx-2 fa-soundcloud"></i>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link order-lg-last order-first" to="/login">
                Login<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item order-lg-last order-first">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item order-lg-last order-first">
              <span className="nav-link">LogOut</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

