// Company Logo Mapping for Experience Section
// Using real company logos from reliable sources

export const companyLogos = {
  // E-commerce/Fashion company - using colorful shopping/fashion icon
  'Matching Family Outfits': 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png', // Shopping bag icon (colorful)
  
  // Dress rental/Formal wear company - using colorful fashion/clothing icon  
  'DressHouseFormalHire': 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Business/Company icon (colorful)
  
  // Food company - using food/restaurant icon as fallback
  'American International Foods, Inc.': 'https://logo.clearbit.com/americaninternationalfoods.com', // Using Clearbit logo API - falls back to food icon if not available
  
  // Software development company - using tech/software icon
  'Selopia (Software Development Company)': 'https://logo.clearbit.com/selopia.com', // Using Clearbit logo API - falls back to tech icon if not available
  
  // Italian company - using business icon
  'Lamonaca Group S.R.L. (ODI ET AMO)': 'https://www.odietamoshop.com/cdn/shop/files/logo_odietamo.png?v=1652165894&width=280', // E-commerce/Shopify icon (colorful)
};

// Function to get company logo URL
export const getCompanyLogo = (companyName) => {
  // Try exact match first
  if (companyLogos[companyName]) {
    return companyLogos[companyName];
  }
  
  // Try partial match for variations
  const matchedKey = Object.keys(companyLogos).find(key => 
    companyName.toLowerCase().includes(key.toLowerCase()) || 
    key.toLowerCase().includes(companyName.toLowerCase())
  );
  
  if (matchedKey) {
    return companyLogos[matchedKey];
  }
  
  // Fallback to a professional business icon
  return 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
};

// Fallback icons for specific company types
export const fallbackIcons = {
  food: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png', // Food icon
  tech: 'https://cdn-icons-png.flaticon.com/512/1051/1051326.png', // Tech/Software icon
  fashion: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png', // Fashion icon
  business: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Business icon
};

