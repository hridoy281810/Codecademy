import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden md:ml-64 bg-gray-100">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;