import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavButton() {
  const location = useLocation();
  return location.pathname === "/" ? (
    <Link to="/vote">Vote</Link>
  ) : (
    <Link to="/">Home</Link>
  );
}

export default NavButton;
