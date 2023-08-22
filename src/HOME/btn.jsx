import React from "react";
import { NavLink } from "react-router-dom";

const AuthBtn = () => {
  const authUser = () => {
    const user = localStorage.getItem("User");
    if (user) return true;
    else return false;
  };

  const authAdmin = () => {
    const user = localStorage.getItem("Admin");
    if (user) return true;
    else return false;
  };

  const logOutUser = () => {
    localStorage.removeItem("User");
    window.location.reload();
  };

  const logOutAdmin = () => {
    localStorage.removeItem("Admin");
    window.location.reload();
  };

  const admin = JSON.parse(localStorage.getItem("Admin"));
  const user = JSON.parse(localStorage.getItem("User"));

  const btnForHeader = () => {
    if (authAdmin()) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {admin?.username}
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li onClick={logOutAdmin}>
              <a className="dropdown-item">LogOut</a>
            </li>
          </ul>
        </div>
        );
        
    } else if (authUser()) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user?.username}
          </button>
          <ul className="dropdown-menu">
            <li onClick={logOutUser}>
              <a className="dropdown-item">LogOut</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return <NavLink to="/login">Login</NavLink>;
    }
  };

  return <div>{btnForHeader()}</div>;
};

export default AuthBtn;