"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Contact3D() {
  return (
    <div className="md:w-1/2 w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <mesh rotation={[0.3, 0.3, 0.3]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial color="#7F5AF0" wireframe />
        </mesh>
      </Canvas>
    </div>
  );
}
