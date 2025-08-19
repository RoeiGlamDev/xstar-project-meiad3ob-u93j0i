import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    // Basic setup for 3D scene with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add a light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Create floating cosmetics elements
    const createFloatingElement = (color: string) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(Math.random()  5 - 2.5, Math.random()  5 - 2.5, Math.random() * 5 - 2.5);
      scene.add(sphere);
      return sphere;
    };

    const elements = [];
    for (let i = 0; i < 5; i++) {
      elements.push(createFloatingElement('#FF8C00')); // GlamCS orange color
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      elements.forEach((element) => {
        element.position.y += 0.01  Math.sin(Date.now()  0.001);
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
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
        Elevate Your Beauty Routine with Our Luxurious Cosmetics
      </motion.p>
      <Canvas className="w-full h-full">
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default FloatingElements;