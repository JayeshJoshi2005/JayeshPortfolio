"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full  bg-transparent backdrop-blur-[1px] border-t border-white/10 text-gray-400">
      <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding / Name */}
        
        <h1 className="text-7xl text-white font-thin">JAYESH</h1>

        <div className="flex flex-col justify-center items-center">
        <img
          src="/JJpng.png"
          alt="JJ Logo"
          className=" w-30  flex justify-between items-center  "
        />

        
        {/* Copyright */}
        <div className="text-sm flex flex-col justify-center items-center text-gray-400 text-center md:text-right ">
          <span className="text-lg">Built with ♡</span>

          &copy; {new Date().getFullYear()} Jayesh Joshi.
        </div>
        </div>
        <h1 className="text-7xl text-white font-thin">JOSHI</h1>
      </div>
    </footer>
  );
}
