// Flaticon Icon Mapping for Skills
// Using Flaticon CDN URLs - Icons are free to use with attribution

// Category Icons (for main skill categories)
export const categoryIcons = {
  'Social Media Marketing & Management': 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', // Social media management icon
  'Search Engine Marketing (SEM)': 'https://cdn-icons-png.flaticon.com/512/3004/3004544.png', // Search engine icon
  'Shopify Store Design & Dropshipping': 'https://cdn-icons-png.flaticon.com/512/5968/5968204.png', // E-commerce/Shopify icon
  'YouTube Video SEO & Promotion': 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', // YouTube icon
  'GA4, & Conversion Tracking': 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png', // Analytics/Chart icon
  'SEO & Website Optimization': 'https://cdn-icons-png.flaticon.com/512/1051/1051326.png', // SEO/Website icon
};

// Sub-skill Icons Mapping
export const skillIcons = {
  // Social Media Marketing & Management
  'Facebook': 'https://cdn-icons-png.flaticon.com/512/733/733547.png', // Facebook (colorful blue)
  'Instagram': 'https://cdn-icons-png.flaticon.com/512/733/733558.png', // Instagram (colorful gradient)
  'Pinterest': 'https://cdn-icons-png.flaticon.com/512/733/733515.png', // Pinterest (colorful red)
  'LinkedIn': 'https://cdn-icons-png.flaticon.com/512/733/733561.png', // LinkedIn (colorful blue)
  'Twitter': 'https://cdn-icons-png.flaticon.com/512/733/733579.png', // Twitter (colorful blue)
  'TikTok': 'https://cdn-icons-png.flaticon.com/512/3046/3046120.png', // TikTok (colorful - using official colorful version)
  'Email': 'https://cdn-icons-png.flaticon.com/512/732/732200.png', // Email (colorful)
  
  // Search Engine Marketing (SEM)
  'Google': 'https://cdn-icons-png.flaticon.com/512/3004/3004544.png', // Google icon (colorful - multicolor)
  'Bing': 'https://cdn-icons-png.flaticon.com/512/888/888857.png', // Bing icon (colorful)
  'Search': 'https://cdn-icons-png.flaticon.com/512/149/149852.png', // Search icon (colorful blue - already colorful)
  'keyword Research': 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Keyword icon (colorful)
  'Keyword Research': 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Keyword icon (colorful)
  'Shopping Campaign': 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png', // Shopping cart (colorful)
  'Performance Max': 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png', // Performance icon (colorful)
  
  // Shopify Store Design & Dropshipping
  'Website Design': 'https://cdn-icons-png.flaticon.com/512/1051/1051326.png', // Web design icon (colorful - already colorful)
  'Dropshipping Store': 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png', // Store/shop icon (colorful)
  'PageFly': 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png', // Page builder icon (colorful purple)
  'Replo': 'https://cdn-icons-png.flaticon.com/512/5968/5968264.png', // Landing page builder icon (colorful different purple)
  'Theme Customize': 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', // Customize/settings icon (colorful)
  'Analytics & Tracking': 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png', // Analytics icon (colorful)
  'landing page': 'https://cdn-icons-png.flaticon.com/512/5968/5968264.png', // Landing page icon (colorful different purple)
  'Landing Page': 'https://cdn-icons-png.flaticon.com/512/5968/5968264.png', // Landing page icon (colorful different purple)
  
  // YouTube Video SEO & Promotion
  'Video SEO': 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', // YouTube icon (colorful red)
  'YouTube Ads': 'https://cdn-icons-png.flaticon.com/512/1384/1384065.png', // YouTube ads icon (colorful red variant)
  'Thumbnail': 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', // Image/thumbnail icon (colorful)
  'Promotion Channels': 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', // Promotion icon (colorful)
  
  // GA4, & Conversion Tracking
  'Conversion Tracking ': 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png', // Conversion icon (colorful)
  'Conversion Tracking': 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png', // Conversion icon (colorful)
  'Facebook Pixel': 'https://cdn-icons-png.flaticon.com/512/733/733547.png', // Facebook icon (colorful blue)
  'Google Analytics(GA4)': 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png', // Analytics icon (colorful)
  'Tag Manager(GTM)': 'https://cdn-icons-png.flaticon.com/512/5968/5968264.png', // Tag manager icon (colorful - already colorful)
  'Pinterest Tracking': 'https://cdn-icons-png.flaticon.com/512/733/733515.png', // Pinterest icon (colorful red)
  
  // SEO & Website Optimization
  'Website SEO': 'https://cdn-icons-png.flaticon.com/512/1051/1051326.png', // SEO icon (colorful - already colorful)
  'On Page SEO': 'https://cdn-icons-png.flaticon.com/512/5968/5968264.png', // On-page SEO icon (colorful purple - already colorful)
  'Technical SEO': 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png', // Technical SEO icon (colorful)
  'Meta Tags': 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Tag/label icon (colorful)
};

// Function to get icon URL for a skill
export const getSkillIcon = (skillName) => {
  return skillIcons[skillName] || skillIcons[skillName.trim()] || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // Default icon
};

// Function to get category icon URL
export const getCategoryIcon = (categoryTitle) => {
  return categoryIcons[categoryTitle] || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // Default icon
};

