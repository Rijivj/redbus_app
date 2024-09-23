import React from "react";
import "./css/header.css";
import image from "../componets/images/rdc-redbus-logo.webp";
import bus from "../componets/images/buss.jpeg";
import SearchBar from "../componets/seacrchbar";

const Header = () => {
  const handleSearchClick = () => {
    // You can add any additional logic here when the button is clicked
    return <SearchBar />;
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={image} alt="Redbus Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <div className="logos">
                <button onClick={handleSearchClick}>
                  <img src={bus} alt="Redbus Logo" />
                </button>
              </div>
            </li>
            <li>
              <a href="#">Hotel Booking</a>
            </li>
            <li>
              <a href="#">Bus Hire</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <span>Welcome, Guest</span>
          <a href="#" className="login-btn">
            Login
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
