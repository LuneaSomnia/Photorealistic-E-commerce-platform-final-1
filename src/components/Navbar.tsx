import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, User } from 'lucide-react';
import { useStore } from '../store';

function Navbar() {
  const { cart } = useStore();

  return (
    <nav className="bg-white shadow-lg h-16">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold">3D Marketplace</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;