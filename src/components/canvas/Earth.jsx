import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { TextureLoader, SphereGeometry, MeshBasicMaterial, MeshStandardMaterial, DoubleSide } from "three";

import CanvasLoader from "../Loader";

const Sphere = () => {
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
  });

  const texture = new TextureLoader().load("/earth2.png");

  const geometry = new SphereGeometry(2, 32, 32);
  const material = new MeshBasicMaterial({ map: texture });
  // const mesh = new Mesh(geometry, material);

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Sphere />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
