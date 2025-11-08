import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import { testimonials } from '../constants/testimonials';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

// Import Facebook/Instagram project detail images
import fb1 from '../assets/project_details_image/fb_instagram/fb1.jpg';
import fb2 from '../assets/project_details_image/fb_instagram/fb2.jpg';
import fb3jpg from '../assets/project_details_image/fb_instagram/fb3.jpg';
import fb3png from '../assets/project_details_image/fb_instagram/fb3.png';
import fb4 from '../assets/project_details_image/fb_instagram/fb4.jpg';
import fb5 from '../assets/project_details_image/fb_instagram/fb5.jpg';
import fb6 from '../assets/project_details_image/fb_instagram/fb6.jpg';
import fb7 from '../assets/project_details_image/fb_instagram/fb7.png';
import fb8 from '../assets/project_details_image/fb_instagram/fb8.png';
import fb9 from '../assets/project_details_image/fb_instagram/fb9.png';
import fb10 from '../assets/project_details_image/fb_instagram/fb10.png';
import fb11 from '../assets/project_details_image/fb_instagram/fb11.png';
import fb12 from '../assets/project_details_image/fb_instagram/fb12.png';
import fb13 from '../assets/project_details_image/fb_instagram/fb13.png';
import fb14 from '../assets/project_details_image/fb_instagram/fb14.png';

// Array of all Facebook/Instagram detail images
const fbInstagramImages = [fb1, fb2, fb3jpg, fb3png, fb4, fb5, fb6, fb7, fb8, fb9, fb10, fb11, fb12, fb13, fb14];

// Import Google Ads project detail images
import g1 from '../assets/project_details_image/google_ads/g1.png';
import g2 from '../assets/project_details_image/google_ads/g2.png';
import g3 from '../assets/project_details_image/google_ads/g3.jpg';
import g4jpg from '../assets/project_details_image/google_ads/g4.jpg';
import g4png from '../assets/project_details_image/google_ads/g4.png';
import g5jpg from '../assets/project_details_image/google_ads/g5.jpg';
import g5png from '../assets/project_details_image/google_ads/g5.png';
import g6 from '../assets/project_details_image/google_ads/g6.png';
import g7 from '../assets/project_details_image/google_ads/g7.png';

// Array of Google Ads detail images
const googleAdsImages = [g1, g2, g3, g4jpg, g4png, g5jpg, g5png, g6, g7];

// Import YouTube Video SEO project detail images
import y1 from '../assets/project_details_image/youtube/y1.png';
import y2 from '../assets/project_details_image/youtube/y2.jpg';
import y3 from '../assets/project_details_image/youtube/y3.jpg';
import y4 from '../assets/project_details_image/youtube/y4.jpg';
import y5 from '../assets/project_details_image/youtube/y5.png';
import y6 from '../assets/project_details_image/youtube/y6.jpg';

// Array of YouTube Video SEO detail images
const youtubeImages = [y1, y2, y3, y4, y5, y6];

// Import Tracking & Conversion Setup project detail images
import t1 from '../assets/project_details_image/tracking/t1.png';
import t2 from '../assets/project_details_image/tracking/t2.png';
import t3 from '../assets/project_details_image/tracking/t3.png';
import t4jpg from '../assets/project_details_image/tracking/t4.jpg';
import t4png from '../assets/project_details_image/tracking/t4.png';
import t5 from '../assets/project_details_image/tracking/t5.png';

// Array of Tracking & Conversion Setup detail images
const trackingImages = [t1, t2, t3, t4jpg, t4png, t5];

// Google Ads specific testimonials
const googleAdsTestimonials = [
  {
    id: 1,
    name: "Jason",
    location: "USA",
    rating: 5,
    text: "Yasin set up and managed our Google Ads campaign flawlessly. Within 10 days, we saw a 3x ROAS on our Shopify store!",
  },
  {
    id: 2,
    name: "Sara",
    location: "Canada",
    rating: 5,
    text: "Fantastic work! He lowered our cost-per-click by 45% while improving conversions through smart ad strategies.",
  },
  {
    id: 3,
    name: "Leon",
    location: "Germany",
    rating: 5,
    text: "We needed help entering the EU market. Yasin structured our Google Ads campaigns perfectly for German audiences.",
  },
  {
    id: 4,
    name: "Fatima",
    location: "UAE",
    rating: 5,
    text: "Google Ads setup was detailed, professional, and effective. We now get consistent leads every day.",
  },
  {
    id: 5,
    name: "Lucas",
    location: "Brazil",
    rating: 5,
    text: "My eCommerce sales went up 200% after working with Yasin. He knows how to target properly and scale smart.",
  },
  {
    id: 6,
    name: "Aisha",
    location: "Saudi Arabia",
    rating: 5,
    text: "Excellent experience. He explained everything clearly and managed our Google Ads campaigns with transparency.",
  },
  {
    id: 7,
    name: "James",
    location: "UK",
    rating: 5,
    text: "Yasin is a true Google Ads expert. We saw a 70% increase in traffic and qualified leads from the UK market.",
  },
  {
    id: 8,
    name: "Elena",
    location: "Italy",
    rating: 5,
    text: "Creative ad copies, great keyword research, and optimized campaign structure — highly recommended!",
  },
  {
    id: 9,
    name: "Khalid",
    location: "Egypt",
    rating: 5,
    text: "Yasin helped us target the right audience in MENA using smart bidding strategies. Great results within weeks.",
  },
  {
    id: 10,
    name: "Hanna",
    location: "Australia",
    rating: 5,
    text: "We struggled with low conversions until Yasin revamped our Google Ads account. Now our ads bring real ROI.",
  },
];

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
    // Navigate to home page
    navigate('/');
    // Set hash after navigation
    setTimeout(() => {
      window.location.hash = '#work';
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="bg-[#050414] min-h-screen py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] text-gray-300 font-sans relative">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className=" cursor-pointer  text-white hover:text-[#8245ec] transition-colors flex items-center gap-2 z-10"
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

        {/* Project Detail Images - Dynamic based on project */}
        {(() => {
          let projectImages = [];
          let sectionTitle = "Project Screenshots";
          
          if (project.id === 0 && fbInstagramImages.length > 0) {
            projectImages = fbInstagramImages;
            sectionTitle = "Project Screenshots";
          } else if (project.id === 1 && googleAdsImages.length > 0) {
            projectImages = googleAdsImages;
            sectionTitle = "Project Screenshots & Certificates";
          } else if (project.id === 4 && youtubeImages.length > 0) {
            projectImages = youtubeImages;
            sectionTitle = "Project Screenshots";
          } else if (project.id === 6 && trackingImages.length > 0) {
            projectImages = trackingImages;
            sectionTitle = "Project Screenshots";
          }
          
          return projectImages.length > 0 ? (
            <div className="mb-12 -mx-[12vw] md:-mx-[7vw] lg:-mx-[20vw] px-[12vw] md:px-[7vw] lg:px-[20vw]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {sectionTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projectImages.map((img, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl overflow-hidden border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.4)] transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null;
        })()}

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

        {/* Client Testimonials - Dynamic based on project */}
        {(() => {
          let projectTestimonials = [];
          
          if (project.id === 0 && testimonials.length > 0) {
            projectTestimonials = testimonials;
          } else if (project.id === 1 && googleAdsTestimonials.length > 0) {
            projectTestimonials = googleAdsTestimonials;
          }
          
          return projectTestimonials.length > 0 ? (
            <div className="mb-12 -mx-[12vw] md:-mx-[7vw] lg:-mx-[20vw] px-[12vw] md:px-[7vw] lg:px-[20vw]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                Client Testimonials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projectTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 
                    shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.4)] 
                    transition-all duration-300 hover:border-[#8245ec]"
                  >
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 text-lg sm:text-xl"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center italic mb-4">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="text-center pt-4 border-t border-gray-700">
                      <h3 className="text-white text-base sm:text-lg font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null;
        })()}

        {/* Action Buttons */}
        {(project.webapp || project.websites || project.certification) && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            {/* Multiple Websites */}
            {project.websites && project.websites.length > 0 ? (
              project.websites.map((website, index) => (
                <a
                  key={index}
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50 text-center"
                >
                  View {website.name}
                </a>
              ))
            ) : (
              /* Single Webapp Link */
              project.webapp && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8245ec] hover:bg-[#6d3bc7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8245ec]/50 text-center"
                >
                  View Live Project
                </a>
              )
            )}
            {/* Certification Link */}
            {project.certification && (
              <a
                href={project.certification}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-600 text-center"
              >
                View Certification
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

