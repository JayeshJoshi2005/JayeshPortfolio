"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import WireframeIcosahedron from "./WireframeIcosahedron";

function BouncingModel() {
  const modelRef = useRef(null);
  const { viewport } = useThree();

  useFrame(({ clock }, delta) => {
    if (!modelRef.current) return;

    const progress = Math.min(clock.getElapsedTime() / 1.7, 1);
    const ground = -viewport.height / 2 + 0.9;
    let bounce = 0;

    if (progress < 0.5) {
      bounce = Math.sin((progress / 0.5) * Math.PI) * viewport.height * 0.7;
    } else if (progress < 0.78) {
      bounce = Math.sin(((progress - 0.5) / 0.28) * Math.PI) * viewport.height * 0.32;
    } else if (progress < 0.95) {
      bounce = Math.sin(((progress - 0.78) / 0.17) * Math.PI) * viewport.height * 0.12;
    }

    modelRef.current.position.x = -viewport.width / 2 + 0.9 + progress * (viewport.width - 1.8);
    modelRef.current.position.y = ground + bounce;
    modelRef.current.rotation.x += delta * 5;
    modelRef.current.rotation.z -= delta * 4;
  });

  return (
    <group ref={modelRef} scale={0.34}>
      <WireframeIcosahedron />
    </group>
  );
}

export default function LoadingScreen({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading portfolio"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#070113]"
    >
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <BouncingModel />
        </Canvas>
      </div>
      <p className="absolute bottom-12 text-sm font-medium tracking-[0.3em] text-[#E0AAFF] md:bottom-16">
        LOADING...
      </p>
    </div>
  );
}
