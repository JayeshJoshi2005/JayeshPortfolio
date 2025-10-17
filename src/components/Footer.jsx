"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  
  // Typewriter logic
  const texts = [
    "Built with ♡ by Jayesh Joshi",
    "Crafted with Code & Coffee ☕",
    "Made with ❤️ and Logic ⚙️",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    if (subIndex === current.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // pause before deleting
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    setText(current.substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <footer className="w-full mt-20 border-t border-white/10 backdrop-blur-[1px] bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/JJpng.png"
            alt="JJ Logo"
            className="w-60 h-20 object-contain opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </div>

        <div className="text-center md:text-right text-gray-400 text-lg flex flex-col items-center md:items-end">
          <motion.span
            className="text-xl font-light mb-1 text-white min-h-[24px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {text}
            <span className="animate-pulse text-[#7F5AF0]">|</span>
          </motion.span>
          <span className="opacity-80">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
