import React from 'react';

// ===== HERO PIERCINGS COMPONENT =====
// Simple full-width hero section with background image and paragraph text
// Matches the exact layout from the screenshot

const HeroPiercings = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      
      
      {/* image background */}
      <div className="absolute inset-0">
        <img 
          src="https://media.istockphoto.com/id/97787276/photo/female-waist-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=HFO0hIKAYt7j1eaYzhWYbemj6t9mDsIqNxMLRj11euw=" 
          alt="Professional body piercing jewelry at Inked NYC"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay - adjust opacity (60-80%) for readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      
      {/* Centers content both vertically and horizontally */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* Main heading */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-['Abril_Fatface',cursive] mb-6">
          BODY PIERCING
        </h1>
        
        {/* Subheading */}
        <h2 className="text-red-400 text-xl md:text-2xl tracking-wider mb-8">
          YOUR TRUSTED OUR TATOOS & PIERCING SHOP
        </h2>
        
        {/* Paragraph text - matches screenshot exactly */}
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed">
          We may be known for our ink, but tattoos aren't our only specialty. We're also one of the top known studios for piercing shops. Whether you're looking for a simple earlobe piercing, a chic nose piercing, or something else entirely, our team is here to deliver precision and artistry. We specialize in high-quality, safe, and stylish body piercing using only the best materials like titanium, gold, and stainless steel for optimal healing and long-term wear.
        </p>

        {/* Optional decorative line - adds visual interest */}
        <div className="w-24 h-1 bg-red-600 mt-8"></div>
      </div>
    </section>
  );
};

export default HeroPiercings;