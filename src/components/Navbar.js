import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>POS Billing System</h2>

      <div>
        <Link to="/">Billing</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </div>
  );
}

export default Navbar;