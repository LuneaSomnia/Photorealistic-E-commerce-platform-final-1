import React from 'react';
import { useStore } from '../store';

function LoadingScreen() {
  const { loading } = useStore();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;