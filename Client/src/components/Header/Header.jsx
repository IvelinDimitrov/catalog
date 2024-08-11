import React, { useEffect, useState } from "react";
import { Link, Route, Router } from "react-router-dom";
export function Header() {
  return (
    <header className="bg-navi sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center ">
          <a href="/" className="flex items-center">
            <img
              src="/images/log/woodheaven-favicon-color.png"
              alt="Logo"
              className="h-14 w-auto mr-4"
            />
            <p className="text-green-tx font-bold text-2xl ">WoodHeaven</p>
          </a>
        </div>
        <nav className="hidden md:flex md:flex-grow justify-center  ">
          <ul className="flex justify-center space-x-4 text-green-tx ">
            <li>
              <Link
                to="/"
                className="font-bold hover:underline underline-offset-8 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="font-bold hover:underline underline-offset-8 "
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="font-bold hover:underline underline-offset-8 "
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-bold hover:underline underline-offset-8 "
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="font-bold hover:underline underline-offset-8 "
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="font-bold hover:underline underline-offset-8 "
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right section: REGISTER/LOG IN Buttons (for desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/logIn"
            className="font-bold hover:underline underline-offset-8 "
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
