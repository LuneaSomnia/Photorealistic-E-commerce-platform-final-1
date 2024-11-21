import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store';
import { Store } from '../types';

const SAMPLE_STORES: Store[] = [
  {
    id: '1',
    name: "Artisan's Corner",
    description: "Local handcrafted goods and artwork",
    location: { lat: 0, lng: 0 },
    products: [
      {
        id: 'p1',
        name: 'Handmade Ceramic Vase',
        description: 'Beautiful hand-crafted ceramic vase',
        price: 79.99,
        imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61',
        category: 'Home Decor'
      }
    ],
    isRegistered: true
  },
  {
    id: '2',
    name: "Tech Haven",
    description: "Latest gadgets and electronics",
    location: { lat: 5, lng: 5 },
    products: [],
    isRegistered: false
  }
];

function StoreFront({ position, store, onClick }: { position: [number, number, number], store: Store, onClick: () => void }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color={store.isRegistered ? "#4F46E5" : "#6B7280"} 
        metalness={0.5}
        roughness={0.5}
      />
    </mesh>
  );
}

function World() {
  const { camera } = useThree();
  const { setSelectedStore, setLoading } = useStore();
  const [stores] = useState<Store[]>(SAMPLE_STORES);

  useEffect(() => {
    camera.position.set(0, 10, 20);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const handleStoreClick = (store: Store) => {
    if (!store.isRegistered) {
      alert("This store is not yet registered in our marketplace.");
      return;
    }
    setLoading(true);
    // Simulate loading store data
    setTimeout(() => {
      setSelectedStore(store);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Store fronts */}
      {stores.map((store, index) => {
        const position: [number, number, number] = [
          Math.cos(index * (Math.PI * 2 / stores.length)) * 10,
          0,
          Math.sin(index * (Math.PI * 2 / stores.length)) * 10
        ];
        return (
          <StoreFront
            key={store.id}
            position={position}
            store={store}
            onClick={() => handleStoreClick(store)}
          />
        );
      })}
    </>
  );
}

export default World;
