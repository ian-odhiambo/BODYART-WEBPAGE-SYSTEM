import React from 'react';

const HeroArtPiercer = () => {
  return (
    <div>
      {/* ===== HERO SECTION WITH BACKGROUND IMAGE ===== */}
      {/* Replace Unsplash URL with any image of your choice */}
      <div 
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
          url('https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Dark overlay is applied via the linear-gradient above */}
        
        {/* Hero Content - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-['Abril_Fatface',cursive] text-5xl md:text-7xl text-white mb-4 drop-shadow-[2px_2px_0_#c41e3a]">
            ARTISTS & PIERCERS
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl font-light tracking-wide">
            OFFERING THE BEST TATTOO ARTISTS & PIERCERS OUR TATOOS & PIERCINGS STUDIOS
          </p>
        </div>
      </div>

     
      {/* Solid dark background - no image */}
      <div className="bg-zinc-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center italic border-l-4 border-red-600 pl-6">
            Rooted in the legacy we have built on passion diven body artists, Our Tatoos & Piercers is where artistry, 
            innovation, and culture collide. Our resident body artists 
            represent the best in the industry, blending technical mastery with bold 
            creativity to bring tattoos to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroArtPiercer;