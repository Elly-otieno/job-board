import React from "react";
import headerImage from "../assets/images/crypto-icon.svg";
import arrow from "../assets/images/arrow-to.svg";

function Navbar() {
  const listItems = [
    "All Jobs",
    "Internships",
    "Fulltime",
    "Engineering",
    "Marketer",
    "Designer",
    "Other",
  ];

  return (
    <nav>
      <div className="header">
        <div className="heading-content">
          <img src={headerImage} alt="Crypto Icon" className="nav-img"/>
          <h2>cryptojob</h2>
        </div>
        <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <ul className="list">
          {listItems.map((listItem) => (
            <li key={listItem.id} {...listItems} className="list-item">
              {listItem}
            </li>
          ))}
        </ul>
        <button type="submit" className="submit-btn">
          Submit job for $199 <img src={arrow} alt="submit-arrow" />
        </button>
      </div>
      <hr className="nav-line"/>
      <h1>Find <span>Web3</span> and Crypto jobs for Students and Graduates</h1>
      <p>Connecting Universities to Web3</p>
    </nav>
  );
}

export default Navbar;
