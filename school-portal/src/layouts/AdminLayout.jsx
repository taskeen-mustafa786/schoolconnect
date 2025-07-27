import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname.split('/')[2] || 'dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin/dashboard"
              className={`block py-2 px-4 rounded-md transition ${
                selectedTab === 'dashboard' ? 'bg-blue-500' : 'hover:bg-blue-600'
              }`}
              onClick={() => setSelectedTab('dashboard')}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/register"
              className={`block py-2 px-4 rounded-md transition ${
                selectedTab === 'register' ? 'bg-blue-500' : 'hover:bg-blue-600'
              }`}
              onClick={() => setSelectedTab('register')}
            >
              Register Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className={`block py-2 px-4 rounded-md transition ${
                selectedTab === 'users' ? 'bg-blue-500' : 'hover:bg-blue-600'
              }`}
              onClick={() => setSelectedTab('users')}
            >
              User List
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage-classes"
              className={`block py-2 px-4 rounded-md ${selectedTab === 'classes' ? 'bg-blue-500' : 'hover:bg-blue-600'}`}
              onClick={() => setSelectedTab('classes')}
             >
               Manage Classes
           </Link>
          </li>

        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
