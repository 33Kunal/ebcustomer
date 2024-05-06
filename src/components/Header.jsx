import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({  profile }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("Authorization");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".dropdown")) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full flex justify-between px-4 py-2 mt-3" >

        <div className="w-[50%] lg:w-[20%] md:w-[20%] mt-3">
           <img src="/Logo-desktop.png"/> 
        </div>
      
      <div className="flex items-center mr-4">
        <div className="flex items-center">
          <img className="pr-2 w-15 h-10" src="/man.png" alt="profile_img" />
          <div className="text-lg">{profile?.firstname}</div>
        </div>
        <div className="relative dropdown">
          <img
            src="/arrow-down.png"
            alt="Dropdown Icon"
            className="pl-3 w-6 h-3 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className="absolute mt-6 right-0 w-32 bg-white rounded-md shadow-lg border border-gray-300">
              <a
                href="Profile"
                className="block px-4 py-2 text-gray-800 hover:text-green-700 text-md"
                onClick={closeDropdown}
              >
                My Profile
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-800 hover:text-green-700 text-md"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;