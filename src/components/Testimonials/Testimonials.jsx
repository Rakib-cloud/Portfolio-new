import React, { useState, useEffect } from "react";
import { testimonials } from "../../constants/testimonials";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality - restarts after user interaction
  useEffect(() => {
    if (isPaused) {
      // Restart auto-play after 8 seconds of inactivity
      const restartTimer = setTimeout(() => {
        setIsPaused(false);
      }, 8000);
      return () => clearTimeout(restartTimer);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  // Pause on hover, resume on mouse leave
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section
      id="testimonials"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Satisfied Clients Say
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </div>

      {/* Testimonials Slider */}
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Testimonial Card */}
        <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 md:p-10 
        shadow-[0_0_30px_2px_rgba(130,69,236,0.3)] min-h-[400px] flex flex-col justify-between">
          {/* Rating Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400 text-xl sm:text-2xl"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="flex-grow flex items-center">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center italic">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          {/* Client Info */}
          <div className="mt-8 text-center">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {testimonials[currentIndex].location}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 
          bg-[#8245ec] hover:bg-[#6d3bc7] text-white p-3 rounded-full 
          transition-all duration-300 transform hover:scale-110 shadow-lg shadow-[#8245ec]/50 z-10"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 
          bg-[#8245ec] hover:bg-[#6d3bc7] text-white p-3 rounded-full 
          transition-all duration-300 transform hover:scale-110 shadow-lg shadow-[#8245ec]/50 z-10"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#8245ec] w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

