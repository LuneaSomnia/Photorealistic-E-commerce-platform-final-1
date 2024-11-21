import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useStore } from '../store';
import ProductGrid from './ProductGrid';

function StoreModal() {
  const { selectedStore, setSelectedStore } = useStore();

  if (!selectedStore) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{selectedStore.name}</h2>
          <button
            onClick={() => setSelectedStore(null)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4">
          <ProductGrid products={selectedStore.products} />
        </div>
      </div>
    </div>
  );
}
