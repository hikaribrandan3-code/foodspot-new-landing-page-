import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Phone3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(300, 400);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 2;

    // Create iPhone body
    const phoneGeometry = new THREE.BoxGeometry(1, 1.8, 0.1);
    const phoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.3,
      roughness: 0.4
    });
    const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
    scene.add(phone);

    // Screen (slightly inset)
    const screenGeometry = new THREE.PlaneGeometry(0.9, 1.7);
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      emissive: 0x047857,
      emissiveIntensity: 0.2
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.051;
    scene.add(screen);

    // Notch
    const notchGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.05);
    const notchMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const notch = new THREE.Mesh(notchGeometry, notchMaterial);
    notch.position.z = 0.08;
    notch.position.y = 0.7;
    scene.add(notch);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x047857, 0.5);
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      phone.rotation.y += 0.005;
      phone.rotation.x += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '300px', height: '400px' }} />;
}
