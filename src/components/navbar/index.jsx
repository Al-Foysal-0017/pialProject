import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      name: "Dhaka",
    },
    {
      name: "Meherpur",
    },
    {
      name: "Mesjd",
    },
    {
      name: "Mehefdf",
    },
    {
      name: "Kustia",
    },
    {
      name: "Khulna",
    },
  ];
  const filterItem = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">LOGO</Link>
      </div>
      <div className="navbar-right">
        <div>
          <input
            className="SearchBox"
            type="search"
            placeholder="Search here ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="placeSuggesBox">
            {search &&
              filterItem.map((item, index) => (
                <div className="allSuggestionItem" key={index}>
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;
