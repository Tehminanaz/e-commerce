'use client'
import React from 'react'
import Image from "next/image";

const AboutNav = () => {
  return (
    <div>
        <div className="w-full bg-white h-auto overflow-hidden text-base text-slategray-100 font-body-medium">
  {/* Header Section */}
  <div className="flex items-center justify-between py-4 px-6">
    <div className="text-5xl font-headings-h1 text-gray">Avion</div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8">
      <div className="cursor-pointer">About us</div>
      <div className="cursor-pointer">Contact</div>
      <div className="cursor-pointer">Blog</div>
    </div>

    {/* Icons */}
    <div className="flex items-center gap-4">
      <Image
        className="w-4 h-4 cursor-pointer"
        width={16}
        height={16}
        alt="Search"
        src="Search.svg"
      />
      <Image
        className="w-4 h-4 cursor-pointer"
        width={16}
        height={16}
        alt="Shopping Cart"
        src="Shopping--cart.svg"
      />
      <Image
        className="w-4 h-4 cursor-pointer"
        width={16}
        height={16}
        alt="User Avatar"
        src="User--avatar.svg"
      />

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button id="menu-toggle" className="w-6 h-6 flex flex-col justify-between">
          <span className="block w-full h-[2px] bg-gray"></span>
          <span className="block w-full h-[2px] bg-gray"></span>
          <span className="block w-full h-[2px] bg-gray"></span>
        </button>
      </div>
    </div>
  </div>

  {/* Dropdown Menu for Small Screens */}
  <div id="mobile-menu" className="hidden fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-6">
    <div className="flex flex-col gap-4">
      <div className="cursor-pointer">About us</div>
      <div className="cursor-pointer">Contact</div>
      <div className="cursor-pointer">Blog</div>
    </div>
  </div>

  {/* Navigation Bar */}
  <div className="w-full bg-light-grey py-4 hidden md:flex justify-center gap-8">
    <div className="cursor-pointer">All products</div>
    <div className="cursor-pointer">Plant pots</div>
    <div className="cursor-pointer">Ceramics</div>
    <div className="cursor-pointer">Tables</div>
    <div className="cursor-pointer">Chairs</div>
    <div className="cursor-pointer">Crockery</div>
    <div className="cursor-pointer">Tableware</div>
    <div className="cursor-pointer">Cutlery</div>
  </div>
</div>

{/* <script>
  // JavaScript to toggle the mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });
</script> */}

    </div>
  )
}

export default AboutNav