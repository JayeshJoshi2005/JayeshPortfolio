"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    image: "/projects/chitchat.png",
    year: "2025",
    title: "ChitChat",
    desc: "Real-time chat platform with live messaging, presence indicators, and JWT authentication.",
    tech: [
      "React",
      "Express",
      "MongoDB",
      "Socket.IO",
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
  return (
    <section id="projects" className="pt-25 text-white flex">
      <div className="max-w-6xl mx-auto px-6">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">
            Projects
          </h2>
          <div className="h-1 w-24 bg-[#7F5AF0] mx-auto rounded-full mb-3"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of ideas turned into reality — built with curiosity,
            caffeine, and clean code.
          </p>
        </div>

        <div className=" grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group rounded-2xl overflow-hidden h-80 shadow-lg hover:scale-105 transition-transform duration-500 border border-white/10"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full blur-[1px] object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-200">{project.year}</span>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm border border-white/20 px-3 py-1.5 rounded-md hover:bg-white/10 transition"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm border border-white/20 px-3 py-1.5 rounded-md hover:bg-[#7F5AF0]/20 transition"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white  transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200 border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
