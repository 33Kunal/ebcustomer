import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Bar = () => {
  const navigate = useNavigate();  // Hook to control navigation
  const location = useLocation();  // Current route location

  // Determine active button based on the current route
  const isActive = (route) => location.pathname === route;

  // Handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="flex gap-x-3 mt-6 justify-center">
      <button
        className={`border-2 border-gray-400 rounded-lg p-3 ${isActive('/all-projects') ? 'bg-secondary text-white' : 'bg-white'}`}
        onClick={() => handleNavigation('/all-projects')}
      >
        <span className={`text-2xl ${isActive('/all-projects') ? 'text-white' : 'text-black'}`}>All Projects</span>
      </button>

      <button
        className={`border-2 border-gray-400 rounded-lg p-3 ${isActive('/project-tracking') ? 'bg-secondary text-white' : 'bg-white'}`}
        onClick={() => handleNavigation('/project-tracking')}
      >
        <span className={`text-2xl ${isActive('/project-tracking') ? 'text-white' : 'text-black'}`}>Project Tracking</span>
      </button>
    </div>
  );
};

export default Bar;
