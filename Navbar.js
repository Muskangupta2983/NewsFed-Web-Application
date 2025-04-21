import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="container-fluid">
      <nav className={`navbar navbar-expand-lg bg-${props.dark} navbar-${props.dark} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsFed
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className={`dropdown-menu dropdown-menu-${props.dark}`}>
                  {Object.keys(props.categories).map((category) =>{
                    return (
                      <li key={category}>
                        <Link className="dropdown-item" to={`/${category}`}>
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </Link>
                <ul className={`dropdown-menu dropdown-menu-${props.dark}`}>
                  {Object.keys(props.countries).map((country) =>{
                      return (
                        <li key={country}>
                          <Link className="dropdown-item" to={`/${country}`}>
                            {country}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.setMode}
                style={{cursor:"pointer"}}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{cursor:"pointer"}}>
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
