import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import useDeviceSize from "../../hooks/useDeviceSize.tsx";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const deviceSize = useDeviceSize();

  const isMobile =
    deviceSize === "sm" ? true : deviceSize === "xs" ? true : false;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const isMobile = window.innerWidth <= 768;
  console.log(isMobile);
  return (
    <nav
      className="navbar"
      style={{ background: "linear-gradient(to right, #000000, #434343)" }}
    >
      {isMobile ? (
        <MobileNavbar
          {...{
            menuOpen,
            toggleMenu,
            handleSearch,
            setSearchQuery,
            searchQuery,
          }}
        />
      ) : (
        <DesktopNavbar {...{ searchQuery, setSearchQuery, handleSearch }} />
      )}
    </nav>
  );
};

const MobileNavbar = ({
  menuOpen,
  toggleMenu,
  handleSearch,
  setSearchQuery,
  searchQuery,
}) => (
  <div className="navbar-container">
    <div className="navbar-logo">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        MovieDB
      </Link>
    </div>
    <div
      className={`menu-toggle ${menuOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
      <ul>
        <li>
          <Link to="/" className="navbar-link">
            Popular
          </Link>
        </li>
        <li>
          <Link to="/top-rated" className="navbar-link">
            Top Rated
          </Link>
        </li>
        <li>
          <Link to="/upcoming" className="navbar-link">
            Upcoming
          </Link>
        </li>
      </ul>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Movie Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
);

const DesktopNavbar = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <div className="navbar-container">
    <div className="navbar-logo">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        MovieDB
      </Link>
    </div>
    <div className="navbar-links">
      <ul>
        <li>
          <Link to="/" className="navbar-link">
            Popular
          </Link>
        </li>
        <li>
          <Link to="/top-rated" className="navbar-link">
            Top Rated
          </Link>
        </li>
        <li>
          <Link to="/upcoming" className="navbar-link">
            Upcoming
          </Link>
        </li>
      </ul>
    </div>
    <div className="navbar-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Movie Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
);

export default Navbar;
