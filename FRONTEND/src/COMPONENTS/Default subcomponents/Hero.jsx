import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ config }) => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={config.backgroundImage}
          alt="Tattoo studio background" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: config.overlayOpacity }}
        ></div>
      </div>

      {/* Centered Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-['Abril_Fatface',cursive] mb-4 text-center">
          {config.mainHeading}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-center font-light">
          {config.subHeading}
        </p>
        <div className={`w-24 h-1 bg-${config.accentColor} mt-8`}></div>
        <p className="text-sm text-gray-300 mt-6 tracking-wider">
          FIND ANSWERS TO COMMON QUESTIONS
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm animate-bounce">
        ▼
      </div>
    </section>
  );
};

export default Hero;