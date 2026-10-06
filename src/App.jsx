import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import DashboardCard from './components/DashboardCard';
import RecentOrders from './components/RecentOrders';
import ProfileCard from './components/ProfileCard';
import { dashboardCards, recentOrders, notifications, user } from './data/mockData';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 flex flex-col min-h-screen">
          <TopNav onSearch={setSearchTerm} darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} notifications={notifications} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="p-4 md:p-6 space-y-6 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dashboardCards.map((card) => <DashboardCard key={card.id} {...card} />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2"><RecentOrders orders={recentOrders} searchTerm={searchTerm} /></div>
              <div><ProfileCard user={user} /></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;