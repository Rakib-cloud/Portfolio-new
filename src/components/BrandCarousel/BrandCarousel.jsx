import React, { useEffect, useRef } from "react";

const BrandCarousel = () => {
  const trackRef = useRef(null);

  const brandLogos = [
    "https://i.imgur.com/JJ8Q2aV.png",
    "https://i.imgur.com/ahwTVCY.png",
    "https://i.imgur.com/R0k5mDf.png",
    "https://i.imgur.com/j5Jwrwp.png",
    "https://i.imgur.com/FNYLSkl.png",
    "https://i.imgur.com/KtwGI15.png",
    "https://i.imgur.com/u1j2zZ8.png",
    "https://i.imgur.com/NZ6iyQ7.png",
    "https://i.imgur.com/mIJHIqy.png",
    "https://i.imgur.com/skw68te.png",
    "https://i.imgur.com/D7kKuNu.png",
    "https://i.imgur.com/4vs78xR.png",
    "https://i.imgur.com/pilNETa.png",
    "https://i.imgur.com/Q4AAIh0.png",
    "https://i.imgur.com/E0KjYyA.png",
    "https://i.imgur.com/2jiKFj9.png",
    "https://i.imgur.com/cZL7Gb5.png",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Speed control (px per second)
    const SPEED_PX_PER_SEC = 50;

    const adjustDuration = () => {
      const halfWidth = track.scrollWidth / 2;
      const duration = halfWidth / SPEED_PX_PER_SEC;
      track.style.animation = `brandMarquee ${duration}s linear infinite`;
    };

    // Wait for images to load before calculating width
    const images = track.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    const checkAllLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        adjustDuration();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener('load', checkAllLoaded);
        img.addEventListener('error', checkAllLoaded);
      }
    });

    // Fallback: adjust after a short delay
    setTimeout(() => {
      adjustDuration();
    }, 1000);

    window.addEventListener("resize", adjustDuration);

    return () => {
      window.removeEventListener("resize", adjustDuration);
      images.forEach((img) => {
        img.removeEventListener('load', checkAllLoaded);
        img.removeEventListener('error', checkAllLoaded);
      });
    };
  }, []);

  return (
    <section className="w-full font-sans">
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 py-8 sm:py-12 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Trusted By Brands Who Relied On My Digital Marketing Expertise To Grow Their Business
        </h2>
      </div>

      {/* Brand Carousel - Full Width */}
      <div className="brand-carousel overflow-hidden w-full bg-transparent">
        <div
          ref={trackRef}
          className="brand-track flex gap-[5px] w-max whitespace-nowrap items-center"
        >
          {/* Render logos 2 times for seamless loop */}
          {[...Array(2)].map((_, loopIndex) =>
            brandLogos.map((logo, index) => (
              <img
                key={`${loopIndex}-${index}`}
                src={logo}
                alt={`Brand Logo ${index + 1}`}
                className="h-[75px] sm:h-[94px] object-contain flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;

