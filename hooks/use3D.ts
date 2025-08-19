import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for GlamCS cosmetics website.
 * This hook initializes a 3D scene with interactive elements themed around the GlamCS brand.
 * 
 * @returns {Object} - Contains the start and stop functions for the 3D scene.
 * @typedef {Object} GlamCS3D
 * @property {Function} start - Function to start the 3D animation.
 * @property {Function} stop - Function to stop the 3D animation.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);

    /
     * Initializes the 3D scene.
     */
    const initScene = () => {
        // Create a scene
        sceneRef.current = new THREE.Scene();

        // Set up camera
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current.position.z = 5;

        // Create renderer
        rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        sceneRef.current.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        sceneRef.current.add(directionalLight);

        // Create 3D object (e.g., a luxury lipstick)
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0xffa500 }); // GlamCS orange
        const lipstick = new THREE.Mesh(geometry, material);
        sceneRef.current.add(lipstick);

        // Animation loop
        const animate = () => {
            if (sceneRef.current && rendererRef.current && cameraRef.current) {
                lipstick.rotation.x += 0.01;
                lipstick.rotation.y += 0.01;
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };
        animate();
    };

    /
     * Starts the 3D animation.
     */
    const start = () => {
        initScene();
    };

    /
     * Stops the 3D animation and cleans up resources.
     */
    const stop = () => {
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
        }
        if (rendererRef.current) {
            document.body.removeChild(rendererRef.current.domElement);
        }
        sceneRef.current = null;
        rendererRef.current = null;
        cameraRef.current = null;
    };

    // Cleanup on component unmount
    useEffect(() => {
        return () => stop();
    }, []);

    return { start, stop };
};