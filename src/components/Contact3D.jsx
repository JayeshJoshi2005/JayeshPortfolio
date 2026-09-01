"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WireframeIcosahedron from "./WireframeIcosahedron";

export default function Contact3D() {
  return (
    <div className="md:w-1/2 w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={6} />
        <WireframeIcosahedron />
      </Canvas>
    </div>
  );
}
