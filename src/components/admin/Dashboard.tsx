import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Store, LayoutGrid, Users, Settings } from 'lucide-react';
import StoreManagement from './StoreManagement';
import Analytics from './Analytics';
import Settings from './Settings';

function Dashboard() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <aside className="w-64 bg-white border-r">
        <nav className="p-4 space-y-2">
          <Link
            to="/admin/stores"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
          >
            <Store className="w-5 h-5" />
            <span>Stores</span>
          </Link>
          <Link
            to="/admin/analytics"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
          >
            <LayoutGrid className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        <Routes>
          <Route path="/stores" element={<StoreManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}