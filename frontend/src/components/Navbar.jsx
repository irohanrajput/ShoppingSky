import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "./useIsLoggedIn";

const Navbar = ({}) => {
  const isLoggedIn = useIsLoggedIn();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ancient Store</Link>
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <input
          type="search"
          name="search-box"
          className="search-box"
          placeholder="search items here"
        ></input>
        <button>Search</button>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>{" "} </li>
        <li>
          <Link to="/shop">Shop</Link>{" "} </li>
        <li>
          <Link to="/cart">Cart</Link>{" "} </li>
        {isLoggedIn ? ( 
        <li>
          <button onClick={handleLogOut}>Log Out </button> 
        </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>{" "} </li>
            <li>
              <Link to="/signup">Sign Up</Link>{" "} </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
