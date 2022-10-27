import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo text-center">
        <img src="Assests/safuu-logo.png" alt="" width={"50%"} />
      </div>
      <div className="slider-menu">
        <Link className="d1 px-3" to="/dashboard" >
          <img src="Assests/d1.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Dashboard
        </Link>
        <Link className="d1 active px-3 mt-4" type="button"  to="/account">
          <img src="Assests/account.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Account
        </Link>
        <a className="d1 px-3 mt-4" href="/">
          <img src="Assests/swap.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Swap
        </a>
        <a className="d1 px-3 mt-4" href="/">
          <img src="Assests/calculator.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Calculator
        </a>
        <a className="d1 px-3 mt-4" href="/">
          <img src="Assests/analytics.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Analytics
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
