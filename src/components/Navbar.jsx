import React from "react";
import { Link } from "react-router-dom";
import "./HeroLanding.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-custom flex justify-between items-center py-6">

        <h1 className="text-4xl font-bold text-cyan-500">
          Foodie
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          
          <li className="text-cyan-500 cursor-pointer">
            <Link to="/HeroLanding.jsx">Home</Link>
          </li>

          <li className="cursor-pointer">
            Order
          </li>

          <li className="cursor-pointer">
            <Link to="/HowITWorks">Company</Link>
          </li>

          <li className="cursor-pointer">
            FAQ
          </li>

          <li className="cursor-pointer">
            Contact
          </li>
        </ul>

        <button className="cartBadge">
          🛒
        </button>

      </div>
    </nav>
  );
};

export default Navbar;