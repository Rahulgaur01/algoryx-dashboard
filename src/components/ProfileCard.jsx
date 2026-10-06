import React from 'react';
import { FiMail, FiEdit2 } from 'react-icons/fi';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-4 border-indigo-100 dark:border-indigo-900" />
        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">{user.name}</h3>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{user.role}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1"><FiMail size={12} /> {user.email}</p>
        <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
          <FiEdit2 size={14} /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;