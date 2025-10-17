"use client";
import React from "react";
import skills from "../data/skills.json";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center pt-25 px-6">
      
      {/* Heading with underline */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2">
          My Skills
        </h2>
        <div className="h-1 w-24 bg-[#7F5AF0] mx-auto rounded-full mb-3"></div>
        <p className="text-gray-400 max-w-md mx-auto">
          Technologies and tools I’ve mastered — everything I use to build modern web experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8 justify-items-center">
        {skills.map((skill) => (
          <SkillsCard key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
