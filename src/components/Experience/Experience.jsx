import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle - Empty circle, no image */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full z-10"></div> */}

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-lg p-5 sm:p-8 rounded-2xl border border-white/20 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.5)] hover:border-[#8245ec]`}
            >
              {/* Header Section with Logo and Info */}
              <div className="flex items-start space-x-4 mb-4">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl overflow-hidden flex items-center justify-center p-2 flex-shrink-0 shadow-lg">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                    style={{ filter: 'none' }}
                    onError={(e) => {
                      e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
                    }}
                  />
                </div>

                {/* Role, Company Name, Location, and Date */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-[#8245ec] font-semibold mb-1">
                    {experience.company}
                  </h4>
                  {experience.location && (
                    <p className="text-xs sm:text-sm text-gray-400 mb-1 flex items-center gap-1">
                      <span>📍</span> {experience.location}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                    <span>🗓️</span> {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
                {experience.desc}
              </p>

              {/* Skills Section */}
              <div className="mt-5 pt-4 border-t border-gray-700">
                <h5 className="font-semibold text-white mb-3 text-sm sm:text-base">Skills:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[#251f38] text-purple-400 px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-purple-500/30 hover:border-purple-500 hover:bg-[#2d1f42] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
