import React, { useState } from 'react';
import { Plus } from 'lucide-react';

function StoreManagement() {
  const [stores, setStores] = useState([]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Store Management</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
          <Plus className="w-5 h-5" />
          <span>Add Store</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          {stores.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No stores registered yet. Add your first store to get started.
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Store Name</th>
                  <th className="text-left py-2">Location</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((store) => (
                  <tr key={store.id} className="border-b">
                    <td className="py-2">{store.name}</td>
                    <td className="py-2">{store.location}</td>
                    <td className="py-2">{store.status}</td>
                    <td className="py-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoreManagement;
