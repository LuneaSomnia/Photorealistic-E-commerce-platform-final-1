import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Navbar from './components/Navbar';
import World from './components/World';
import AdminDashboard from './components/admin/Dashboard';
import StoreModal from './components/StoreModal';
import { useStore } from './store';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const { selectedStore } = useStore();

  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-gray-900">
        <Navbar />
        
        <Routes>
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/" element={
            <div className="w-full h-[calc(100vh-64px)]">
              <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
                <Suspense fallback={null}>
                  <Environment preset="city" />
                  <OrbitControls />
                  <World />
                </Suspense>
              </Canvas>
              
              {selectedStore && <StoreModal />}
            </div>
          } />
        </Routes>

        <LoadingScreen />
      </div>
    </BrowserRouter>
  );
}

export default App;