import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  className?: string;
}

const Scene: React.FC<SceneProps> = ({ className }) => {
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (sceneRef.current) {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: 0xff6f20, // GlamCS orange
      });
      const sphere = new THREE.Mesh(geometry, material);
      sceneRef.current.add(sphere);

      // Lighting
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      sceneRef.current.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      sceneRef.current.add(ambientLight);
    }
  }, []);

  return (
    <div className={w-full h-full ${className}}>
      <Canvas ref={sceneRef} camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={0xff6f20} />
        </mesh>
      </Canvas>
    </div>
  );
};

const GlamCSScene: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white p-8">
      <motion.h1 
        className="text-5xl font-bold text-orange-600 mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-700 mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover our high-end cosmetics designed to enhance your natural beauty.
      </motion.p>
      <Scene className="w-full h-96" />
      <motion.button 
        className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </section>
  );
};

export default GlamCSScene;