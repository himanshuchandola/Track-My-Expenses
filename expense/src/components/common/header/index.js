import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const tabName = window.location.pathname.substring(1);
  const [tab, setTab] = useState(tabName);
  return (
    <div className="header">
      <Link to="/" className="logo-a">
        <label className="logo">Track My Expenses</label>
      </Link>
      <div className="header-menu">
        <Link to="">
          <label
            className={`menu-option ${tab === "" && "active-tab"}`}
            onClick={() => setTab("")}
          >
            All Expenses
          </label>
        </Link>
        <Link to="/expenses-analysis">
          <label
            className={`menu-option ${
              tab === "expenses-analysis" && "active-tab"
            }`}
            onClick={() => setTab("expenses-analysis")}
          >
            Expenses Analysis
          </label>
        </Link>
        <Link to="/due-expenses">
          <label
            className={`menu-option ${tab === "due-analysis" && "active-tab"}`}
            onClick={() => setTab("due-analysis")}
          >
            Due Expenses
          </label>
        </Link>
      </div>
    </div>
  );
};

export default Header;
