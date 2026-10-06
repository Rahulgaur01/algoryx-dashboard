import React, { useState } from 'react';
import { FiSearch, FiBell, FiMoon, FiSun, FiMenu } from 'react-icons/fi';
import Notifications from './Notifications';

const TopNav = ({ onSearch, darkMode, toggleDarkMode, notifications, toggleSidebar }) => {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={toggleSidebar} className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400">
          <FiMenu size={24} />
        </button>
        <div className="relative max-w-md w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Search orders..." onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggleDarkMode} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 relative">
            <FiBell size={20} />
            {notifications.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
          </button>
          {notifOpen && <Notifications notifications={notifications} onClose={() => setNotifOpen(false)} />}
        </div>
        <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-8 h-8 rounded-full border-2 border-indigo-500" />
      </div>
    </header>
  );
};

export default TopNav;