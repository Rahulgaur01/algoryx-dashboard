import React from 'react';
import { FiHome, FiShoppingBag, FiUsers, FiBox, FiSettings, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Orders', icon: FiShoppingBag },
  { name: 'Customers', icon: FiUsers },
  { name: 'Products', icon: FiBox },
  { name: 'Settings', icon: FiSettings },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={toggleSidebar} />
      )}
      <aside className={`fixed top-0 left-0 z-30 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Algoryx</h1>
          <button onClick={toggleSidebar} className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <FiX size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <a key={item.name} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;