// Header.jsx

import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <header className="header">
      <div className="links">
        {/* left */}
        <div className="links">
          <ul className="ul-links">
            <Link to="/" className="nav-btn">
              Home
            </Link>
            <Link to="/configuration" className="nav-btn">
              Configuration
            </Link>
            <Link to="/email" className="nav-btn">
              Email
            </Link>
            <Link to="/matrix" className="nav-btn">
              Matrix
            </Link>
            <Link to="/pacman" className="nav-btn">
              Pacman
            </Link>
          </ul>
        </div>
        {/* right - small screen only  */}
        <div className="flex justify-end">
          <Bars3Icon
            onClick={() => setBurger(!burger)}
            className={`burger-icon nav-btn ${burger ? "active" : ""}`}
          />
        </div>
      </div>
      {burger && (
        <div className="responsive-menu">
          <ul className="p-2 res-links">
            <li className="res-btn">
              <Link to="/">Home</Link>
            </li>
            <li className="res-btn">
              <Link to="/configuration">Configuration</Link>
            </li>
            <li className="res-btn">
              <Link to="/email">Email</Link>
            </li>
            <li className="res-btn">
              <Link to="/matrix">Matrix</Link>
            </li>
            <li className="res-btn">
              <Link to="/pacman">Pacman</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
