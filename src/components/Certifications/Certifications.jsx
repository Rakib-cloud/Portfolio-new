import React from "react";
import certificationImage from "../../assets/certification.png";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          CERTIFICATIONS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-6 text-lg sm:text-xl font-semibold max-w-3xl mx-auto">
          Professional Certifications That Validate My Expertise
        </p>
      </div>

      {/* Certification Image */}
      <div className="flex justify-center items-center">
        <div className="max-w-4xl w-full">
          <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 
          shadow-[0_0_30px_2px_rgba(130,69,236,0.3)] hover:shadow-[0_0_40px_3px_rgba(130,69,236,0.5)] 
          transition-all duration-300">
            <img
              src={certificationImage}
              alt="Certification"
              className="w-full h-auto object-contain rounded-lg"
              onError={(e) => {
                console.error("Failed to load certification image");
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

