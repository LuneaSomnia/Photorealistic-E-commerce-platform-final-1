import React from 'react';
import { BarChart, Users, ShoppingBag } from 'lucide-react';

function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-2xl font-bold">856</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <BarChart className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Activity items would go here */}
          <p className="text-gray-500">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;