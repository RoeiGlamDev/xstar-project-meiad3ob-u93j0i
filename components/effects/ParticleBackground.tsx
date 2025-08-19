import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Sprite[] = [];
        const particleCount = 200;

        const particleTexture = new THREE.TextureLoader().load('/path/to/particle.png'); // Replace with your particle texture

        for (let i = 0; i < particleCount; i++) {
            const spriteMaterial = new THREE.SpriteMaterial({ map: particleTexture });
            const particle = new THREE.Sprite(spriteMaterial);
            particle.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
            particle.scale.set(0.05, 0.05, 1);
            particles.push(particle);
            scene.add(particle);
        }

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach((particle) => {
                particle.rotation.z += 0.01;
            });
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            document.body.removeChild(renderer.domElement);
            window.removeEventListener('resize', () => {});
        };
    }, []);

    return (
        <div className="absolute inset-0 bg-white">
            <motion.div
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-orange-600 hover:text-orange-400 transition duration-300">
                    Welcome to GlamCS
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Discover luxurious cosmetics that elevate your beauty routine. Experience the art of GlamCS.
                </p>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;