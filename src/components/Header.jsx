import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import "../css/header.css";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const pageName = path.charAt(0).toUpperCase() + path.slice(1);

  const links = [
    { path: "/", text: "Home" },
    { path: "/configuration", text: "Configuration" },
    { path: "/email", text: "Email" },
    { path: "/matrix", text: "Matrix" },
    { path: "/pacman", text: "Pacman" },
  ];

  const renderLinks = (className, onClick) =>
    links.map((link, index) => (
      <li key={index} className={className}>
        <Link onClick={onClick} to={link.path}>
          {link.text}
        </Link>
      </li>
    ));

  return (
    <header>
      <div className="page-name">{pageName}</div>
      {burger && (
        <div className="responsive-menu">
          <ul className="p-2 res-links">
            {renderLinks("res-btn", () => setBurger(false))}
          </ul>
        </div>
      )}
      <div>
        <div className="ul-links">{renderLinks("nav-btn")}</div>
        <div>
          <Bars3Icon
            onClick={() => setBurger(!burger)}
            className={`burger-icon`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
