"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for Mobile Menu

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Left Section: Search Icon */}
        <div className="hidden sm:flex items-center">
          <Link href="/listing">
            <button
              aria-label="Search"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Center Section: Logo */}
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-customPurple">Avion</h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Hamburger Menu (Mobile View) */}
          <button
            className="sm:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Cart and About Icons */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link href="/cart">
              <button aria-label="Cart" className="text-gray-600 hover:text-customPurple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-6-9v9"
                  />
                </svg>
              </button>
            </Link>

            <Link href="/about">
              <button
                aria-label="About"
                className="text-gray-600 hover:text-customPurple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/category/plant-pots"
                className="block text-gray-600 hover:text-customPurple"
              >
                Plant pots
              </Link>
            </li>
            <li>
              <Link
                href="/category/ceramics"
                className="block text-gray-600 hover:text-customPurple"
              >
                Ceramics
              </Link>
            </li>
            <li>
              <Link
                href="/category/tables"
                className="block text-gray-600 hover:text-customPurple"
              >
                Tables
              </Link>
            </li>
            <li>
              <Link
                href="/category/chairs"
                className="block text-gray-600 hover:text-customPurple"
              >
                Chairs
              </Link>
            </li>
            <li>
              <Link
                href="/category/crockery"
                className="block text-gray-600 hover:text-customPurple"
              >
                Crockery
              </Link>
            </li>
            <li>
              <Link
                href="/category/tableware"
                className="block text-gray-600 hover:text-customPurple"
              >
                Tableware
              </Link>
            </li>
            <li>
              <Link
                href="/category/cutlery"
                className="block text-gray-600 hover:text-customPurple"
              >
                Cutlery
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden sm:block border-t border-gray-200 text-customPurple">
        <ul className="flex items-center justify-center space-x-6 py-4">
          <li>
            <Link href="/category/plant-pots" className="hover:text-customPurple">
              Plant pots
            </Link>
          </li>
          <li>
            <Link href="/category/ceramics" className="hover:text-customPurple">
              Ceramics
            </Link>
          </li>
          <li>
            <Link href="/category/tables" className="hover:text-customPurple">
              Tables
            </Link>
          </li>
          <li>
            <Link href="/category/chairs" className="hover:text-customPurple">
              Chairs
            </Link>
          </li>
          <li>
            <Link href="/category/crockery" className="hover:text-customPurple">
              Crockery
            </Link>
          </li>
          <li>
            <Link href="/category/tableware" className="hover:text-customPurple">
              Tableware
            </Link>
          </li>
          <li>
            <Link href="/category/cutlery" className="hover:text-customPurple">
              Cutlery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
