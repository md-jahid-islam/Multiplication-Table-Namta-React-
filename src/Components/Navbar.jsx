 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { FaBars, FaTimes } from 'react-icons/fa'; 

 const Navbar = () => {
  // State to toggle menu visibility
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
     // Toggle menu state
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-5 px-5">
      <div className="container">
        <div className="menu-row flex justify-between items-center flex-wrap">
          <div className="menu-logo">
            <img className="w-20 h-20" src="public/images/namata.png" alt="logo" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {/* Show close or menu icon */}
              {menuOpen ? <FaTimes /> : <FaBars />} 
            </button>
          </div>

          {/* Menu Links */}
          <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex justify-center items-center gap-[20px] font-bold text-green-600 hover:text-[#00FF9C]">
              <li><Link to={'/About'}>About</Link></li>
              <li><Link to={'/Login'}>Login</Link></li>
              <li><Link to={'/SignUp'}>SignUp</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-white shadow-lg`}>
        <ul className="flex flex-col items-center py-4">
          <li><Link to={'/About'} onClick={toggleMenu}>About</Link></li>
          <li><Link to={'/Login'} onClick={toggleMenu}>Login</Link></li>
          <li><Link to={'/SignUp'} onClick={toggleMenu}>SignUp</Link></li>
        </ul>
      </div>
    </nav>
  );
 };

 export default Navbar;
