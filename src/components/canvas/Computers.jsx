import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/mac-draco.glb");

  // Define state variables to store the position of the primitive
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  // Use the useFrame hook to update the position of the primitive on each frame update
  useFrame(({ clock }) => {
    // Calculate the new position based on the current time
    const newPositionX = Math.sin(clock.getElapsedTime()) * 0.2;
    const newPositionY = Math.cos(clock.getElapsedTime()) * 0.2;

    // Update the state variables to trigger a re-render with the new position
    setPositionX(newPositionX);
    setPositionY(newPositionY);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={[
          isMobile ? positionX / 2 : positionX,
          isMobile ? -3 : -3.25,
          isMobile ? positionY / 2 - 2.2 : positionY - 1.5,
        ]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls makeDefault enableZoom={false}/>
        <Float>
          <Computers isMobile={isMobile} />
        </Float>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
