// Flaticon Icons for Skills
import { getSkillIcon } from './utils/flaticonIcons';

// Company Logos
import { getCompanyLogo } from './utils/companyLogos';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Images
import facebookAdsImage from './assets/project_image/facebook_ads_campaign.jpeg';
import googleAdsImage from './assets/project_image/google_ads.jpeg';
import storeDesignImage from './assets/project_image/store_design.jpeg';
import socialMediaImage from './assets/project_image/social_media_management.jpeg';
import youtubeSEOImage from './assets/project_image/youtube_video_seo.jpeg';
import websiteSEOImage from './assets/project_image/website_seo_optimization.jpeg';
import conversionTrackingImage from './assets/project_image/convertion_tracking.jpeg';
import pinterestMarketingImage from './assets/project_image/pinterest_marketing.jpeg';


export const SkillsInfo = [
  {
    title: 'Social Media Marketing & Management',
    skills: [
      { name: 'Facebook', logo: getSkillIcon('Facebook') },
      { name: 'Instagram', logo: getSkillIcon('Instagram') },
      { name: 'Pinterest', logo: getSkillIcon('Pinterest') },
      { name: 'LinkedIn', logo: getSkillIcon('LinkedIn') },
      { name: 'Twitter', logo: getSkillIcon('Twitter') },
      { name: 'TikTok', logo: getSkillIcon('TikTok') },
      { name: 'Email', logo: getSkillIcon('Email') },
    ],
  },
  {
    title: 'Search Engine Marketing (SEM)',
    skills: [
      { name: 'Google', logo: getSkillIcon('Google') },
      { name: 'Bing', logo: getSkillIcon('Bing') },
      { name: 'Search', logo: getSkillIcon('Search') },
      { name: 'keyword Research', logo: getSkillIcon('keyword Research') },
      { name: 'Shopping Campaign', logo: getSkillIcon('Shopping Campaign') },
      { name: 'Performance Max', logo: getSkillIcon('Performance Max') },

    ],
  },
  {
    title: 'Shopify Store Design & Dropshipping',
    skills: [
      { name: 'Website Design', logo: getSkillIcon('Website Design') },
      { name: 'Dropshipping Store', logo: getSkillIcon('Dropshipping Store') },
      { name: 'PageFly', logo: getSkillIcon('PageFly') },
      { name: 'Replo', logo: getSkillIcon('Replo') },
      { name: 'Theme Customize', logo: getSkillIcon('Theme Customize') },
      { name: 'Analytics & Tracking', logo: getSkillIcon('Analytics & Tracking') },
      { name: 'landing page', logo: getSkillIcon('landing page') },
    ],
  },
  {
    title: 'YouTube Video SEO & Promotion',
    skills: [
      { name: 'Video SEO', logo: getSkillIcon('Video SEO') },
      { name: 'YouTube Ads', logo: getSkillIcon('YouTube Ads') },
      { name: 'Thumbnail', logo: getSkillIcon('Thumbnail') },
      { name: 'Keyword Research', logo: getSkillIcon('Keyword Research') },
      { name: 'Promotion Channels', logo: getSkillIcon('Promotion Channels') },
    ],
  },
  {
    title: 'GA4, & Conversion Tracking',
    skills: [
      { name: 'Conversion Tracking ', logo: getSkillIcon('Conversion Tracking ') },
      { name: 'Facebook Pixel', logo: getSkillIcon('Facebook Pixel') },
      { name: 'Google Analytics(GA4)', logo: getSkillIcon('Google Analytics(GA4)') },
      { name: 'Tag Manager(GTM)', logo: getSkillIcon('Tag Manager(GTM)') },
      { name: 'Pinterest Tracking', logo: getSkillIcon('Pinterest Tracking') },

    ],
  },
  {
    title: 'SEO & Website Optimization',
    skills: [
      { name: 'Website SEO', logo: getSkillIcon('Website SEO') },
      { name: 'On Page SEO', logo: getSkillIcon('On Page SEO') },
      { name: 'Technical SEO', logo: getSkillIcon('Technical SEO') },
      { name: 'Keyword Research', logo: getSkillIcon('Keyword Research') },
      { name: 'Meta Tags', logo: getSkillIcon('Meta Tags') },

    ],
  },
];



export const experiences = [
  {
    id: 0,
    img: getCompanyLogo('Matching Family Outfits'),
    role: "Digital Marketing Manager",
    company: "Matching Family Outfits",
    date: "March 2025 - June 2025",
    desc: "I Managed The Setup, Execution, And Optimization Of Facebook And Google Ad Campaigns To Drive Sales For The Website. My Work Included Audience Targeting, Ad Content Creation, Budget Optimization, And Performance Analysis. By Consistently Monitoring And Refining Campaigns, I Significantly Improved Sales And ROI.",
    skills: [
      "Facebook Ads",
      "Google Ads",
      "Campaign Strategy",
      "E-commerce Marketing",
      "Conversion Tracking",
      "Analytics(GA4)",
    ],
  },

  {
    id: 1,
    img: getCompanyLogo('Lamonaca Group S.R.L. (ODI ET AMO)'),
    role: "Webmaster & Shopify Store Management",
    company: "Lamonaca Group S.R.L. (ODI ET AMO)",
    location: "Italy",
    date: "October 2025 – Present",
    desc: "I Manage And Optimize The Company's Shopify Store, Overseeing Product Uploads, Email Marketing, Design Improvements, And App Integrations. I Also Implement Marketing Strategies To Boost Sales And Website Performance.",
    skills: [
      "Shopify Store Management",
      "Email Marketing",
      "Website Optimization",
      "E-commerce Marketing",
      "Product Management"
    ],
  },
  {
    id: 2,
    img: getCompanyLogo('DressHouseFormalHire'),
    role: "Shopify Website Development & Branding",
    company: "DressHouseFormalHire",
    date: "October 2024 - August 2025",
    desc: "I Built The Entire Shopify Website For Dresshouseformalhire.com, A Premium Online Dress Rental Store In Australia. In Addition To Store Development, I Manage The Complete Branding And Digital Marketing Strategy, Including SEO, Social Media, And Paid Advertising. My Work Ensures Strong Brand Identity, Customer Engagement, And Consistent Business Growth.",
    skills: [
      "Shopify Store Design",
      "Website Development",
      "E-commerce Store",
      "Store Branding",
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Website SEO",
      "Email Marketing",
      "Paid Advertising"
    ],
  },
  {
    id: 3,
    img: getCompanyLogo('American International Foods, Inc.'),
    role: "Social Media Marketing Manager",
    company: "American International Foods, Inc.",
    date: "June 2023 - August 2024",
    desc: "As Social Media Marketing Manager, I Managed And Grew The Company’s Online Presence Across Multiple Platforms. My Responsibilities Included Developing Content Strategies, Running Paid Ad Campaigns, and Engaging With Audiences To Build Brand Awareness. I Focused On Driving Traffic, Generating Leads, And Strengthening The Company’s Digital Footprint.",
    skills: [
      "Digital Marketing Strategy ",
      "Social Media Management",
      "Facebook Ads",
      "Google Ads",
      "Pinterest Marketing"
    ],
  },
  {
    id: 4,
    img: getCompanyLogo('Selopia (Software Development Company)'),
    role: "Digital Marketing Intern",
    company: "Selopia (Software Development Company)",
    date: "February 2022 - July 2022",
    desc: "I Worked As A Digital Marketing Intern At Selopia, Where I Gained Experience In Social Media Management and Online Advertising. My Role Involved Creating Content, Optimizing Campaigns, and Supporting Brand Growth Through Digital Strategies. This Internship Enhanced My Practical Marketing Skills and Industry Knowledge.",
    skills: [
      "Digital Marketing Strategy ",
      "Social Media Management",
      "Facebook Ads",
      "Google Ads"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Sept 2022 - July 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BSA College, Mathura",
    date: "Sept 2018 - Aug 2021",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2017 - March 2018",
    grade: "78%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2015 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Facebook/Instagram",
    description:
      "I managed and optimized Meta (Facebook & Instagram) ad campaigns, delivering measurable results for clients. The reports highlighted key metrics such as clicks, conversions, ROAS, and CPA, showcasing strong campaign performance. Through continuous data analysis and strategic adjustments, I maximized ad spend efficiency and delivered consistent results — achieving 4x ROAS, 2x lead flow, and 40% sales growth.",
    image: facebookAdsImage,
    tags: [
      "Brand Awareness",
      "Engagement Ads",
      "Traffic Ads",
      "Sales Ads",
      "Lead Campaign",
      "Conversion Campaign",
      "Retargeting",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Google Ads Campaign",
    description:
      "Restructured High-impact Facebook Ads For E-commerce, Non-Profits, and Lifestyle Brands, Delivering 3–5x ROAS, 40–60% Engagement Lifts, and 100%+ Growth In Leads/Sales/Followers Via Targeted Funnels, A/B Optimizations, and Retargeting that Scaled Revenue and Built Lasting Brand Loyalty.",
    image: googleAdsImage,
    tags: [
      "Search Ads",
      "E-Commerce Store",
      "Display Ads",
      "Lead Ads",
      "YouTube Ads",
      "Performance Max",
      "Shopping Ads",
      "Remarketing Strategy",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Shopify Store Design & Dropshipping Solutions",
    description:
      "From Custom Shopify Store Design To Complete Dropshipping Automation, I Help Clients Build Scalable E-commerce Brands. My Focus Is On Creating High-converting Stores, Reducing Overhead Costs, And Driving Consistent Sales Growth.",
    image: storeDesignImage,
    tags: [
      "Shopify Store Design",
      "Dropshipping Setup",
      "Custom Design",
      "E-commerce Branding",
      "Product Research",
      "SEO-Optimized",
      "Product Listing",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "I Help Businesses Grow Their Online Presence Through Strategic Social Media Marketing And Management. From Account Setup And Branded Content Creation To Paid Campaigns, Community Engagement, And Analytics-driven Optimization, I Ensure Measurable Growth, Higher Engagement, And Improved Conversions Across Platforms.",
    image: socialMediaImage,
    tags: [
      "Social Media Strategy",
      "Planning",
      "Account Setup",
      "Branding",
      "Content Creation",
      "Paid Ads",
      "Community Management",
      "Analytics",
      "Scaling Strategies",
    ],
    github: "",
    webapp: "https://ngital.com/social-media-agency/#",
  },
  {
    id: 4,
    title: "YouTube Video SEO",
    description:
      "I Optimize YouTube Videos and Channels To Boost Views, Subscribers, and Watch Time Through Keyword Research, SEO Titles/Descriptions/Tags, Thumbnails, and Playlists — Helping Creators and Brands Grow Organically And Monetize Effectively.",
    image: youtubeSEOImage,
    tags: [
      "SEO-Optimized",
      "Thumbnails",
      "Video SEO",
      "Channel SEO",
      "Subscriber Growth",
      "Watch Time",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 5,
    title: "Website SEO Optimization",
    description:
      "A Project Focused on Improving Website Visibility, Organic Traffic, and Search Rankings For Clients. Tasks Included Keyword Research, On-page Optimization, Technical SEO Fixes, Site Speed Improvements, And Meta Tag Optimization. The Goal Was To Increase Qualified Traffic, Generate Leads, and Enhance Overall Website Performance.",
    image: websiteSEOImage,
    tags: [
      "Website SEO",
      "On Page SEO",
      "Technical SEO",
      "Site Speed",
      "Keyword Research",
      "Meta Tags",
      "Backlink SEO",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 6,
    title: "Tracking & Conversion Setup",
    description:
      "I Set Up and Manage Tracking Across All Major Platforms — Facebook, Google (GA4), Pinterest, Linkedin, and More — To Monitor User Behavior, Measure Conversions, and Optimize Campaigns. Accurate Event Tracking And Analytics Help Clients Make Data-Driven Decisions, Maximize ROI, and Scale Their Digital Marketing Effectively.",
    image: conversionTrackingImage,
    tags: [
      "Analytics (GA4)",
      "Meta Pixel",
      "Google Tracking",
      "Event Tracking",
      "Pinterest Tag",
      "Tracking Issues",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 7,
    title: "Pinterest Marketing",
    description:
      "I Have Worked With Multiple Clients On Pinterest Ads Campaigns, Creating Tailored Strategies For Each Business. Through Targeted Audience Research, Optimized Creatives, And Data-driven Campaign Management, My Clients Have Achieved Significant Results — Boosting Website Traffic, Leads, and Sales Effectively.",
    image: pinterestMarketingImage,
    tags: [
      "Pinterest Ads",
      "Audience Research",
      "Promoted Pins",
      "Conversion Tracking",
      "Sales Generation",
      "Pinterest Analytics",
    ],
    github: "",
    webapp: "",
  },
];
