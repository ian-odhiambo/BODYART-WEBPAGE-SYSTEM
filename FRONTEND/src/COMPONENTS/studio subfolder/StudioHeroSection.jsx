import React from 'react';

// ===== STUDIO HERO SECTION COMPONENT =====
// Two-part layout: Hero with background image + informational paragraph below

const StudioHeroSection = () => {
  return (
    <div className="w-full bg-zinc-900">
      
      {/* Top section: Hero section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        
        {/* Background Image - Unsplash  */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Inked NYC tattoo studio interior"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay - adjust opacity as needed you might do from about 60%-80% */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Centered Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-['Abril_Fatface',cursive] mb-4">
            TATTOOS AND PIERCINGS STUDIOS
          </h1>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-['Abril_Fatface',cursive] max-w-4xl leading-tight">
            WHAT MAKES US THE
            <span className="block text-red-500">HIGHLY RECOMMENDED TATTOO STUDIO IN NAIROBI?</span>
          </h2>
          
          {/* this , i just added, its optional*/}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-2xl">
            ﹌
          </div>
        </div>
      </section>

      {/* Bottom section: Informational Paragraph  */}
      <section className="w-full bg-zinc-900 py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            
            Our studio was built by body artists, for body artists and their clients. Over the years, we've come together as a collective of talented professionals who share a common goal: to create exceptional tattoo and piercing experiences right here in the city. Though we are a startup at heart, our artists bring years of individual experience and dedicated followings. You can explore their best work on their personal social media handles, where their artistry speaks for itself.

            We believe that every client deserves a design that truly reflects who they are. Whether you're adding to your collection or getting your first piece, our team will work closely with you to bring your vision to life in a way that feels personal and authentic. Our space was created for those who appreciate artistry and want to be part of a community built on mutual respect and creativity.

            Thank you for considering our studio. We look forward to working with you and being part of your journey.

            — The Team
          </p>
          
          {/* Optional decorative line */}
          <div className="w-24 h-1 bg-red-600 mx-auto mt-10"></div>
        </div>
      </section>
    </div>
  );
};

export default StudioHeroSection;