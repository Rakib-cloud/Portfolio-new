import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import profileImage from "../assets/profile2.png";
import Tilt from "react-parallax-tilt";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#050414] w-full min-h-screen">
      <div className="relative pt-20 w-full">
        {/* Back Button */}
        <div className="px-[12vw] md:px-[7vw] lg:px-[20vw] py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white hover:text-[#8245ec] transition-colors"
          >
            <FaArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        {/* About Content */}
        <section className="py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                <Tilt
                  className="w-48 h-48 sm:w-64 sm:h-64 border-4 border-purple-700 rounded-full"
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                >
                  <img
                    src={profileImage}
                    alt="Yasin Ahmed"
                    className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                  />
                </Tilt>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                  Yasin Ahmed
                </h1>
                <p className="text-xl sm:text-2xl text-[#8245ec] font-semibold">
                  Digital Marketing Strategist & Shopify Expert
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 text-gray-300 leading-relaxed">
              {/* Introduction */}
              <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Hello, I'm <span className="text-[#8245ec] font-semibold">Yasin</span> — A Results-obsessed Digital Marketing Strategist And Shopify Expert Dedicated To Transforming Clicks Into Customers And Browsers Into Brand Advocates. I Don't Just Run Ads; I Architect Data-fueled Growth Engines For Businesses Ready To Scale.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8">
                <p className="text-lg sm:text-xl leading-relaxed">
                  With Over <span className="text-[#8245ec] font-bold">4+ Years</span> Of Hands-on Experience In The Trenches Of Digital Marketing, I've Mastered The Art And Science Of Driving Profitability. I've Successfully Launched And Optimized Over <span className="text-[#8245ec] font-bold">200+ Paid Campaigns</span> Across Social And Search Platforms, Delivering An Average ROAS Of <span className="text-[#8245ec] font-bold">400%+</span> For Clients In E-commerce, Saas, and Creative Industries.
                </p>
              </div>

              {/* Core Expertise */}
              <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  💼 My Core Expertise & Services:
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Social Media Conquest
                    </h3>
                    <p className="text-gray-300">
                      Expert social media marketing agency services for Facebook & Instagram Ads, including lead generation and dynamic product catalogs. Build custom audiences that convert browsers into buyers, amplifying your online store's reach.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Strategic Paid Advertising
                    </h3>
                    <p className="text-gray-300">
                      Mastery in Google Ads management (Search, Display, PMax) and Microsoft Advertising. I craft high-intent campaigns that capture demand and deliver 400%+ ROAS, integrating seamlessly with your e-commerce SEO for maximum conversions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Complete Social Media Management
                    </h3>
                    <p className="text-gray-300">
                      We Don't Just Post — We Build Communities. Our Full-Scope Service Includes Content Strategy, Engagement, And Performance Tracking Across Platforms To Turn Followers Into Loyal Customers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      E-commerce Engine Building
                    </h3>
                    <p className="text-gray-300">
                      Specialized In Shopify Store Design & Dropshipping — Offering End-to-end Solutions From Custom Store Design And Development To Product Sourcing, Supplier Integration, And Sales Funnel Optimization, Creating High-converting Stores That Sell 24/7.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Website SEO & On-Page Optimization
                    </h3>
                    <p className="text-gray-300">
                      Improving Site Speed, Meta Tags, Keyword Strategy, And Technical SEO To Boost Rankings And Drive Organic Traffic.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Video Growth Engine
                    </h3>
                    <p className="text-gray-300">
                      Leveraging Youtube Video SEO & Promotion To Build Authority, Capture Niche Audiences, And Create A Powerful, Evergreen Content Funnel.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Pinterest Profit Pipeline
                    </h3>
                    <p className="text-gray-300">
                      Tapping Into The Visual Search Engine With Inspiring Pins And Idea Ads That Capture High-intent Shoppers And Drive Qualified Traffic On Autopilot.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-2">
                      Data & Analytics Foundation
                    </h3>
                    <p className="text-gray-300">
                      Implementing GA4 & Conversion Tracking To Turn Data Into Decisions, Giving You A Clear View Of User Behavior And Campaign Roi For Actionable Insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Sets Me Apart */}
              <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  🌟 What Truly Sets Me Apart?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#8245ec] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        A Dual-threat Mindset
                      </h3>
                      <p className="text-gray-300">
                        I Bridge The Gap Between Marketing Creativity And Technical Execution. I Can Not Only Design Your Strategy But Also Build The Shopify Store And Implement The Tracking To Support It.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#8245ec] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Transparency Is My Promise
                      </h3>
                      <p className="text-gray-300">
                        You'll Have Clear Insight Into Your Campaigns With Regular, Easy-to-understand Reports. No Jargon, Just Honest Results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#8245ec] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        An Optimization Addict
                      </h3>
                      <p className="text-gray-300">
                        I Thrive On Data. I Continuously A/b Test Ad Copy, Creatives, And Landing Pages To Squeeze Every Drop Of Potential From Your Budget.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#8245ec] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        A Partner In Your Growth
                      </h3>
                      <p className="text-gray-300">
                        I See Myself As An Extension Of Your Team. Your Goals Become My Kpis, And Your Success Is My Most Important Metric.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-r from-[#8245ec]/10 via-[#8245ec]/5 to-[#8245ec]/10 rounded-2xl border border-[#8245ec]/20 p-6 sm:p-8">
                <p className="text-xl sm:text-2xl font-semibold text-white text-center italic">
                  "My Philosophy Is Simple: Sustainable Growth Isn't About Viral Moments; It's About Building Predictable, Scalable Systems."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

