import React, { useEffect, useRef } from 'react';
import * as FiIcons from 'react-icons/fi';

const Notifications = ({ notifications, onClose }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div ref={ref} className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-900 dark:text-gray-100">Notifications</div>
      <ul className="max-h-80 overflow-y-auto">
        {notifications.map((n) => {
          const Icon = FiIcons[n.icon] || FiIcons.FiBell;
          return (
            <li key={n.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{n.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{n.message}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{n.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notifications;