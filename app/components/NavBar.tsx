"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  title: string;
  link: string;
}

export const NavBar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#292929] backdrop-blur-md border border-white rounded-2xl shadow-lg text-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl">AR</div>

        {/* Menu Tengah */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="px-3 py-2 rounded-md text-sm font-medium relative group"
            >
              <span className="relative after:absolute after:-bottom-1/4 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:bg-white">
                {item.title}
              </span>
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <div className="hidden md:flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none transition-all">
        <FontAwesomeIcon icon={faMoon} size="xl"/>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 border-t border-white pt-2">
          <div className="px-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
