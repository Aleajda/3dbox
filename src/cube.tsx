import React, { useRef, useEffect } from 'react';
//@ts-ignore
import * as THREE from 'three';

interface CubeProps {
  width: number;
  height: number;
  length: number;
}

const Cube: React.FC<CubeProps> = ({ width, height, length }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    // Установка размера рендерера
    renderer.setSize(500, 500);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Создание геометрии куба
    const geometry = new THREE.BoxGeometry(width, height, length);
    const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Установка позиции камеры
    // @ts-ignore
    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);

      // Анимация куба
      // @ts-ignore
      cube.rotation.x += 0.01;
      // @ts-ignore
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Очистка при удалении компонента
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height, length]);

  return <div ref={mountRef} />;
};

export default Cube;