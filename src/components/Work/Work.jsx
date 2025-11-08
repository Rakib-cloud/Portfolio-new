import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../constants";
import Tilt from "react-parallax-tilt";

const Work = () => {
  const navigate = useNavigate();

  const handleViewDetails = (projectId, e) => {
    e.stopPropagation();
    navigate(`/project/${projectId}`);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 w-full font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A Curated Showcase Of The Projects I Have Worked On, Reflecting My Expertise In Digital Marketing, Web Design, And Analytics Implementation
        </p>
      </div>

      {/* Projects Grid - Square Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden aspect-square flex flex-col">
              {/* Project Image */}
              <div className="w-full h-48 sm:h-56 flex-shrink-0 bg-gray-800 py-2 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-[10px] sm:text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block bg-[#251f38] text-[10px] sm:text-xs font-semibold text-purple-500 rounded-full px-2 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={(e) => handleViewDetails(project.id, e)}
                  className="w-full bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold text-sm sm:text-base py-2 sm:py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50 mt-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Work;
