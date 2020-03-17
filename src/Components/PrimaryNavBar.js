import React from "react";
import { Link } from "react-router-dom";

import history from "../Helpers/history";
import "./PrimaryNavBar.css";

const PrimaryNavBar = ({ state, ...props }) => {
  const handleLogOff = () => {
    sessionStorage.clear();
    state.handle();
    history.push("/");
  };

  return (
    <ul className="ul">
      <li className="li">
        <Link to="/">Articles</Link>
      </li>
      <li className="li">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="li">
        <Link to="/wallet">Wallet</Link>
      </li>
      <li className="li">
        <Link to="/community">Community</Link>
      </li>
      {state.role === "admin" ? (
        <li className="admin">
          <Link className="link" to="/admin">
            Admin
          </Link>
        </li>
      ) : null}
      <li className="li">
        <Link
          to="/"
          onClick={() => {
            handleLogOff();
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default PrimaryNavBar;
