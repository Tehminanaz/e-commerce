"use client";

import Link from "next/link";
import React, { useState } from "react";
import ShoppingCartButton from "../components/Helper/ShoppingCartButton";
import SearchBox from "../components/Helper/Searchbox";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for Mobile Menu

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Left Section: Search Icon */}
        <div className="hidden sm:block">
          <SearchBox />
        </div>

        {/* Center Section: Logo */}
        <div>
          <Link href="/">
            <h1 className="text-5xl text-customPurple">Avion</h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <ShoppingCartButton />

          {/* About Icon */}
          <div className="items-center space-x-6">
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
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="space-y-4">
            {[
              { href: "/category/plant-pots", label: "Plant pots" },
              { href: "/category/ceramics", label: "Ceramics" },
              { href: "/category/tables", label: "Tables" },
              { href: "/category/chairs", label: "Chairs" },
              { href: "/category/crockery", label: "Crockery" },
              { href: "/category/tableware", label: "Tableware" },
              { href: "/category/cutlery", label: "Cutlery" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-gray-600 hover:text-customPurple">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden sm:block border-t border-gray-200 text-customPurple">
        <ul className="flex items-center justify-center space-x-6 py-4">
          {[
            { href: "/category/plant-pots", label: "Plant pots" },
            { href: "/category/ceramics", label: "Ceramics" },
            { href: "/category/tables", label: "Tables" },
            { href: "/category/chairs", label: "Chairs" },
            { href: "/category/crockery", label: "Crockery" },
            { href: "/category/tableware", label: "Tableware" },
            { href: "/category/cutlery", label: "Cutlery" },
          ].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-customPurple">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
