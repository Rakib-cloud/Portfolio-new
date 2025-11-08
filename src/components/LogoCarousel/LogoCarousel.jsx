import React, { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const trackRef = useRef(null);
  const styleTagRef = useRef(null);

  const logos = [
    "https://i.imgur.com/Ipe6Qa8.png",
    "https://i.imgur.com/XRC3Dut.png",
    "https://i.imgur.com/Jy7MxEz.png",
    "https://i.imgur.com/FkGpOab.png",
    "https://i.imgur.com/ML5FtIw.png",
    "https://i.imgur.com/16Pa1R2.png",
    "https://i.imgur.com/qDImlbT.png",
    "https://i.imgur.com/swPZ5XX.png",
    "https://i.imgur.com/jdiKktu.png",
    "https://i.imgur.com/vpsNXzn.png",
    "https://i.imgur.com/GsdaqaG.png",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Speed control (px per second)
    const SPEED_PX_PER_SEC = 50;

    const adjustDuration = () => {
      const thirdWidth = track.scrollWidth / 3;
      const duration = thirdWidth / SPEED_PX_PER_SEC;
      track.style.animation = `marquee ${duration}s linear infinite`;
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
    <div className="logo-carousel py-8 sm:py-12 overflow-hidden w-full bg-transparent px-4">
      <div
        ref={trackRef}
        className="text-track flex gap-6 sm:gap-8 md:gap-10 w-max whitespace-nowrap items-center"
      >
        {/* Render logos 3 times for seamless loop */}
        {[...Array(3)].map((_, loopIndex) =>
          logos.map((logo, index) => (
            <img
              key={`${loopIndex}-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-8 sm:h-10 md:h-12 object-contain flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LogoCarousel;

