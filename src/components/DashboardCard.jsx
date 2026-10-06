import React from 'react';
import * as FiIcons from 'react-icons/fi';

const DashboardCard = ({ title, value, icon, trend, trendUp }) => {
  const Icon = FiIcons[icon] || FiIcons.FiActivity;
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{value}</p>
        </div>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
          <Icon size={24} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>{trend}</span>
        <span className="text-xs text-gray-400 dark:text-gray-500">vs last month</span>
      </div>
    </div>
  );
};

export default DashboardCard;