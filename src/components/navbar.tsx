"use client"
import { useState } from "react";
import { GiSofa, GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      {/* Mobile Navbar */}
      <div className="md:hidden bg-slate-50 text-black">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <GiSofa className="text-emerald-500 h-6 w-6 sm:h-8 sm:w-8" />
            <h1 className="text-sm sm:text-base font-semibold">Comforty</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/Card">
              <FaCartShopping className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
            </Link>
            <span className="rounded-full text-white bg-emerald-600 px-2 py-0.5 text-xs">
              2
            </span>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <GiHamburgerMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="px-4 pb-4">
            <ul className="flex flex-col gap-4 space-y-2">
              <li>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Card" onClick={() => setIsMobileMenuOpen(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/Product" onClick={() => setIsMobileMenuOpen(false)}>
                  Product
                </Link>
              </li>
              <li>
                <Link href="/Productpage" onClick={() => setIsMobileMenuOpen(false)}>
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/About" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/Faq">Faqs</Link>
              </li>
              <li className="text-sm">
                Contact: +92 3112387225
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        {/* Top Banner */}
        <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 bg-purple-950 text-slate-300 py-2">
          <div>
            <h1 className="text-sm sm:text-base">
              ✔ Free Shipping On All Orders $50+
            </h1>
          </div>
          <div>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link href="/">Eng</Link>
              </li>
              <li>
                <Link href="/Faq">Faqs</Link>
              </li>
              <li>
                <Link href="/NeedHelp">Need Help</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 bg-slate-50 text-black py-2">
          <div className="flex items-center gap-4">
            <GiSofa className="text-emerald-500 h-8 w-8" />
            <h1 className="text-base font-semibold">Comforty</h1>
          </div>
          <ul className="flex items-center gap-6 text-sm">
            <li className="relative">
              <Link href="/Card" className="flex items-center gap-1">
                <FaCartShopping className="w-6 h-6 text-emerald-500" />
                Cart
                <span className="absolute -top-2 -right-3 rounded-full text-white bg-emerald-600 px-2 py-0.5 text-xs">
                  2
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 py-4 bg-slate-50">
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Card">Shop</Link>
            </li>
            <li>
              <Link href="/Product">Product</Link>
            </li>
            <li>
              <Link href="/Productpage">Pages</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
          <h1 className="text-sm">Contact: +92 3112387225</h1>
        </div>
      </div>
    </nav>
  );
}
