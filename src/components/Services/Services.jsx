import React, { useState } from "react";
import { services } from "../../constants/services";
import Tilt from "react-parallax-tilt";
import { FiX } from "react-icons/fi";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section
      id="services"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          SERVICES
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-6 text-lg sm:text-xl font-semibold max-w-3xl mx-auto">
          Comprehensive Digital Marketing Solutions Tailored To Your Business Needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {services.map((service) => (
          <Tilt
            key={service.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div
              className="bg-gray-900 backdrop-blur-md rounded-xl border border-white/20 p-4 sm:p-6 aspect-square flex flex-col items-center justify-center relative
              shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.4)] 
              transition-all duration-300 hover:border-[#8245ec] group cursor-pointer"
              onClick={() => handleSeeDetails(service)}
            >
              {/* Service Number Badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                <span className="text-[#8245ec] text-lg sm:text-xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                  {String(service.id).padStart(2, '0')}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 sm:mb-6 flex items-center justify-center flex-grow">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[#8245ec]/20 to-[#8245ec]/5 
                flex items-center justify-center group-hover:from-[#8245ec]/30 group-hover:to-[#8245ec]/10 
                transition-all duration-300 border border-[#8245ec]/30 p-3">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-full h-full object-contain"
                    style={{ filter: 'none' }}
                    onError={(e) => {
                      e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
                    }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white text-center mb-3 group-hover:text-[#8245ec] transition-colors line-clamp-2">
                {service.title}
              </h3>

              {/* See Details Button */}
              <button className="w-full bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold text-xs sm:text-sm py-2 px-3 rounded-lg 
              transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50">
                See Details
              </button>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#8245ec]/10 via-[#8245ec]/5 to-[#8245ec]/10 rounded-2xl p-8 sm:p-12 border border-[#8245ec]/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready To Grow Your Business?
          </h3>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your marketing goals
          </p>
          <button className="bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold px-8 py-3 rounded-lg 
          transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gray-900 rounded-2xl border border-white/20 p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto
            shadow-[0_0_40px_2px_rgba(130,69,236,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center mb-6">
              {/* Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#8245ec]/20 to-[#8245ec]/5 
              flex items-center justify-center border border-[#8245ec]/30 p-4 mb-4">
                <img
                  src={selectedService.icon}
                  alt={`${selectedService.title} icon`}
                  className="w-full h-full object-contain"
                  style={{ filter: 'none' }}
                  onError={(e) => {
                    e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
                  }}
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
                {selectedService.title}
              </h2>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {selectedService.description}
              </p>
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleCloseModal}
                className="bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold px-8 py-3 rounded-lg 
                transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

