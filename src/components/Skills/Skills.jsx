// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import { getCategoryIcon } from "../../utils/flaticonIcons";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 w-full font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8 sm:mb-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories - Full Width */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 py-6 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-8 rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <img
              src={getCategoryIcon(category.title)}
              alt={`${category.title} icon`}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0"
              style={{ filter: 'none' }}
            />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-400 text-center leading-tight">
              {category.title}
            </h3>
          </div>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 bg-transparent border-2 border-gray-700 rounded-lg sm:rounded-xl md:rounded-2xl py-2 sm:py-2.5 px-1.5 sm:px-2 text-center hover:border-[#8245ec] transition-colors duration-200 min-h-[60px] sm:min-h-[70px]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain flex-shrink-0 mb-0.5"
                    style={{ filter: 'none' }}
                    onError={(e) => {
                      e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
                    }}
                  />
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-300 leading-tight break-words px-1 line-clamp-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
