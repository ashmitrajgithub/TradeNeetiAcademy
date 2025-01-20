import { FaInstagramSquare, FaFacebook, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import React, { useState } from "react";
import Hamburger from "./hamburger";


function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Toggle")
        setIsNavOpen(!isNavOpen);
        console.log(isNavOpen);
        
        
    };

    return (
        <div className="bg-gray-100 px-4 sm:px-5 py-2">
            <div className="headerInfo flex flex-wrap justify-between items-center gap-2 text-sm sm:text-base">

                <div className="headerContact flex flex-wrap gap-4 pl-3 items-center">
                    <a
                        href="tel:+91-6206256034"
                        className="flex items-center gap-1 "
                    >
                        <FaPhoneAlt size={16} className="text-gray-600 sm:block hover:text-gray-900" />
                        <span className="hidden sm:block text-gray-600 hover:text-gray-900">+91-6206256034</span>
                    </a>
                    <a
                        href="mailto:support@tradeneeti.com"
                        className="flex items-center gap-1 "
                    >
                        <MdEmail size={16} className="text-gray-600 hover:text-gray-900" />
                        <span className="hidden sm:block text-gray-600 hover:text-gray-900">support@tradeneeti.com</span>
                    </a>
                </div>

                
                <div className="socialInfo flex pr-5 gap-3">
                    <a href="#" target="_blank">
                        <FaInstagramSquare size={20} className="text-gray-600 hover:text-gray-900" />
                    </a>
                    <a href="#" target="_blank">
                        <FaFacebook size={20} className="text-gray-600 hover:text-gray-900" />
                    </a>
                    <a href="#" target="_blank">
                        <IoLogoTwitter size={20} className="text-gray-600 hover:text-gray-900" />
                    </a>
                    <a href="#" target="_blank">
                        <FaTelegram size={20} className="text-gray-600 hover:text-gray-900" />
                    </a>
                </div>
            </div>

            <header className="bg-gray-100 p-3 shadow-md">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="\src\assets\treadneetiLogo1.png" alt="TREADNEETI" className="h-7 w-auto sm:h-10"/>
                    </div>

                    <div className="hidden md:flex justify-evenly gap-8 text-blue-600 font-semibold ">
                        <a href="">A</a>
                        <a href="">B</a>
                        <a href="">C</a>
                        <a href="">D</a>
                        <a href="">E</a>
                    </div>

                    {/* hamburger menu for mobile */}
                    <button 
                    onClick={()=> toggleMenu()}
                    className="md:hidden focus:outline-none"
                        >
                          <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>  
                    </button>
                    {isNavOpen && <Hamburger toggleMenu={toggleMenu}></Hamburger>}
                    
                </div>
            </header>

        </div>
    )
};

export default Header;
