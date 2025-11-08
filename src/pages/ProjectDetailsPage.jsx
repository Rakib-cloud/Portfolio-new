import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="bg-[#050414] min-h-screen py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] text-gray-300 font-sans">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to work section
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <div className="bg-[#050414] min-h-screen py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] text-gray-300 font-sans relative">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-8 text-white hover:text-[#8245ec] transition-colors flex items-center gap-2 z-10"
      >
        <FaArrowLeft /> Back to Projects
      </button>

      <div className="max-w-5xl mx-auto pt-12">
        {/* Project Image */}
        <div className="mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-2xl shadow-[0_0_30px_2px_rgba(130,69,236,0.3)] object-cover"
          />
        </div>

        {/* Project Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center">
          {project.title}
        </h1>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 mb-12"></div>

        {/* Project Description */}
        <div className="mb-12">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* Project Tags */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Technologies & Skills Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#251f38] text-sm font-semibold text-purple-500 rounded-full px-4 py-2 border border-purple-500/30 hover:border-purple-500 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Live Button (if webapp exists) */}
        {project.webapp && (
          <div className="flex justify-center mt-12">
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50"
            >
              View Live Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

