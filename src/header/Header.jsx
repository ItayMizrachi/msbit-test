import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import "./header.css";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);

  const links = [
    { path: "/", text: "Home" },
    { path: "/configuration", text: "Configuration" },
    { path: "/email", text: "Email" },
    { path: "/matrix", text: "Matrix" },
    { path: "/pacman", text: "Pacman" },
  ];

  return (
    <header>
      <div className="page-name">{formattedPath}</div>
      {burger && (
        <div className="responsive-menu">
          <ul className="p-2 res-links">
            {links.map((link, index) => (
              <li key={index} className="res-btn">
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="links">
        <div className="ul-links res-links">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="nav-btn">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <Bars3Icon
            onClick={() => setBurger(!burger)}
            className={`burger-icon nav-btn ${burger ? "active" : ""}`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
