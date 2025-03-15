import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DashboardContent from '../components/DashboardContent';

const DashboardPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar onMenuClick={handleMenuClick} />
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;

