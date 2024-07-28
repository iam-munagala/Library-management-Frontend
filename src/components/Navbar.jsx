import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Community Library</div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 text-lg">
            <li>
              <NavLink 
                to="/" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/catalog" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/member-dashboard" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Member Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/event-calendar" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Event Calendar
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/books/add" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/members/add" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Add Member
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/events/add" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Add Event
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/loans/manage" 
                className="text-white hover:text-gray-300 py-2 lg:py-0 block" 
                activeClassName="font-bold"
                onClick={toggleMenu}
              >
                Manage Loans
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
