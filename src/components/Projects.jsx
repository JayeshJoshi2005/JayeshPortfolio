"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MOTION } from "@/lib/motion";

const projects = [
  {
    image: "/projects/kunji.png",
    year: "2025",
    title: "Kunji",
    desc: "Engineered a full-stack personal finance dashboard with secure authentication, account management, budget tracking, and transaction analytics. Integrated receipt scanning with AI and event-driven automation for seamless background workflows.",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Inngest",
      "JWT",
    ],
    github: "https://github.com/JayeshJoshi2005/Kunji",
    live: "https://github.com/JayeshJoshi2005/Kunji",
  },
  {
    image: "/projects/chitchat.png",
    year: "2025",
    title: "ChitChat",
    desc: "Engineered a real-time chat platform with live messaging, presence indicators, group chat functionality, and JWT authentication. Integrated peer-to-peer video calling using WebRTC with low-latency media streaming.",
    tech: [
      "React",
      "Vite",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "Tailwind CSS",
      "DaisyUI",
      "JWT",
    ],
    github: "https://github.com/JayeshJoshi2005/ChitChat",
    live: "https://chitchat-9gur.onrender.com/",
  },
  {
    image: "/projects/kontentAI.png",
    year: "2024",
    title: "KontentAI",
    desc: "AI content generator with 15+ templates for blogs, emails, and social posts using Gemini API.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Gemini API",
    ],
    github: "https://github.com/JayeshJoshi2005/KontentAI",
    live: "https://kontent-ai-sigma.vercel.app/",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="pt-20 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 tracking-wide">
            Projects
          </h2>
          <div className="h-1 w-24 sm:w-28 bg-[#7F5AF0] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Crafted with purpose and precision — blending logic, art, and
            coffee-fueled nights.
          </p>
        </div>

        {/* Alternating Projects */}
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : isEven ? -24 : 24,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={
                  shouldReduceMotion
                    ? { duration: MOTION.quick }
                    : {
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                        mass: 0.8,
                        delay: index * 0.05,
                      }
                }
                whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                className={`flex flex-col md:flex-row ${
                  !isEven ? "md:flex-row-reverse" : ""
                } group items-center gap-6 sm:gap-8 border border-white/10 bg-white/[0.02] backdrop-blur-[2px] rounded-2xl overflow-hidden shadow-lg transition-[box-shadow,border-color,background-color] duration-500 ease-out hover:bg-white/[0.04] hover:shadow-[#7F5AF0]/20 hover:border-white/20 transform-gpu will-change-transform`}
              >
                {/* Image Section - 65% */}
                <div className="relative w-full md:w-2/3 h-56 sm:h-72 md:h-96 overflow-hidden rounded-none md:rounded-l-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] transform-gpu will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#7F5AF0]/35 text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-[#7F5AF0]/50 backdrop-blur-sm font-medium">
                    {project.year}
                  </span>
                </div>

                {/* Content Section - 35% */}
                <div className="md:w-1/3 w-full p-5 sm:p-6 md:p-8 flex flex-col justify-between self-stretch">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white tracking-wide group-hover:text-[#9B70FF] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-[15px] leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-xs bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 px-2.5 sm:px-3 py-1 rounded-full text-[#c3b4ff] font-medium backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-gray-200 hover:text-white"
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm bg-[#7F5AF0] border border-[#7F5AF0] px-4 py-2 rounded-lg hover:bg-[#6b47dc] hover:border-[#6b47dc] transition-all duration-300 font-medium text-white shadow-md shadow-[#7F5AF0]/20"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
