import React from 'react';
import { NavLink } from 'react-router'; // corrected import from 'react-router'
import { FaUserAlt } from 'react-icons/fa';
import coffee from '../assets/images/more/2.png';

const Header = () => {
    const navLinkStyle =
        "relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-yellow-400 after:to-orange-500 after:transition-all after:duration-300 hover:after:w-full";

    const activeStyle = "text-yellow-400 font-semibold";

    return (
        <header className="bg-[#331A15] shadow-md sticky top-0 z-50 text-white font-serif">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

                {/* Left: Logo + Branding */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <img src={coffee} alt="Logo" className="w-10 h-10 rounded-full shadow-md" />
                    <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                        <span className="text-yellow-400">Espresso</span> Emporium
                    </h1>
                </div>

                {/* Center: Main Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm md:text-base flex-1 justify-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : "hover:text-yellow-300"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/addCoffee"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : "hover:text-yellow-300"}`
                        }
                    >
                        Add Coffee
                    </NavLink>
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : "hover:text-yellow-300"}`
                        }
                    >
                        Users
                    </NavLink>
                </nav>

                {/* Right: Auth Links + User Icon */}
                <div className="hidden md:flex items-center gap-6 text-sm md:text-base flex-shrink-0">
                    <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : "hover:text-yellow-300"}`
                        }
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : "hover:text-yellow-300"}`
                        }
                    >
                        Sign Up
                    </NavLink>
                    {/* Show user icon only on smaller screens */}
                    <div className="md:hidden text-xl hover:text-yellow-400 transition">
                        <FaUserAlt />
                    </div>
                </div>

                {/* Mobile user icon (visible on small screens) */}
                <div className="md:hidden text-xl hover:text-yellow-400 transition ml-4">
                    <FaUserAlt />
                </div>

            </div>
        </header>
    );
};

export default Header;
