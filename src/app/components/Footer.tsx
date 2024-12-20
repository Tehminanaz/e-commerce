import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-primary text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 lg:ml-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Menu Section */}
          <div>
            <h3 className="font-headings-h1 text-xl mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/new-arrivals" className="hover:text-primary">New arrivals</Link></li>
              <li><Link href="/best-sellers" className="hover:text-primary">Best sellers</Link></li>
              <li><Link href="/recently-viewed" className="hover:text-primary">Recently viewed</Link></li>
              <li><Link href="/popular-this-week" className="hover:text-primary">Popular this week</Link></li>
              <li><Link href="/all-products" className="hover:text-primary">All products</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-headings-h1 text-xl mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/crockery" className="hover:text-primary">Crockery</Link></li>
              <li><Link href="/furniture" className="hover:text-primary">Furniture</Link></li>
              <li><Link href="/homeware" className="hover:text-primary">Homeware</Link></li>
              <li><Link href="/plant-pots" className="hover:text-primary">Plant pots</Link></li>
              <li><Link href="/chairs" className="hover:text-primary">Chairs</Link></li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="font-headings-h1 text-xl mb-4">Our Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About us</Link></li>
              <li><Link href="/vacancies" className="hover:text-primary">Vacancies</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary">Privacy</Link></li>
              <li><Link href="/returns-policy" className="hover:text-primary">Returns policy</Link></li>
            </ul>
          </div>

          {/* Join Our Mailing List Section */}
          <div>
            <h3 className="font-headings-h1 text-xl mb-4">Join our mailing list</h3>
            <form className="flex ">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2  lg:px-8 text-black  focus:outline-none"
              />
              <button
                type="submit"
                className="px-12 max-h-12 py-0 bg-slategray-200 text-white hover:bg-darkslateblue"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Axion LTD. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-primary"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-primary"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-primary"><i className="fab fa-skype"></i></a>
            <a href="#" className="hover:text-primary"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-primary"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
