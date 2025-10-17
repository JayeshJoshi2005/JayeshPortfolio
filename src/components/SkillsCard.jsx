"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 25;
const HALF_ROTATION = ROTATION_RANGE / 2;

export default function SkillsCard({ icon, name }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for 3D rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 120, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 120, damping: 10 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION) * -1;
    const rY = mouseX / width - HALF_ROTATION;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 3D Tilt Card */}
      <motion.div
        ref={ref}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center 
                    rounded-xl  hover:shadow-xs shadow-blue-950 
                   transition-all duration-300 cursor-pointer"
      >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={icon}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 select-none"
            style={{ transform: "translateZ(60px)" }}
          />
        </div>
      </motion.div>

      {/* Label below the card */}
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : -5,
        }}
        transition={{ duration: 0.25 }}
        className="mt-2 text-sm text-gray-300 font-medium tracking-wide"
      >
        {name}
      </motion.p>
    </div>
  );
}
