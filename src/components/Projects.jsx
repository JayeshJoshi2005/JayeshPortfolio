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
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className={`flex flex-col md:flex-row ${
                  !isEven ? "md:flex-row-reverse" : ""
                } items-center gap-6 sm:gap-8 border border-white/10 backdrop-blur-[1px] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#7F5AF0]/30 hover:scale-[1.01] transition-all duration-500`}
              >
                {/* Image Section - 65% */}
                <div className="relative w-full md:w-2/3 h-56 sm:h-72 md:h-96 overflow-hidden rounded-none md:rounded-l-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#7F5AF0]/20 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full border border-[#7F5AF0]/40 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Content Section - 35% */}
                <div className="md:w-1/3 w-full p-4 sm:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white tracking-wide group-hover:text-[#7F5AF0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-xs bg-white/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-gray-200 border border-white/20 backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-white/10 transition-all"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-[#7F5AF0]/20 transition-all"
                    >
                      <FaExternalLinkAlt />
                      Live
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
