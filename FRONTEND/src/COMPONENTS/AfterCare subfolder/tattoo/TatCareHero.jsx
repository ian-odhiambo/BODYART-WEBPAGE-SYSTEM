import React from 'react';

const TatCareHero = () => {
  // tweakable content that i can change whenever i want to
  const content = {
    // Hero section
    hero: {
      backgroundImage: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: 0.7, // 70% dark
      heading: "TATTOO AFTERCARE GUIDE FOR VIBRANT, HEALTHY INK",
      accentColor: "red-600"
    },
    
    // Paragraph section
    paragraph: {
      text: "To keep your new tattoo looking like you just walked out of the studio, proper aftercare is key. Healing takes about 3-4 weeks, but the way you care for your tattoo long after that determines whether it stays bold or fades into the background. This guide walks you through everything you need to know, from immediate aftercare to maintaining your tattoo's brilliance for the long haul.",
      backgroundColor: "zinc-900",
      textColor: "gray-300"
    }
  };

  return (
    <div className={`w-full bg-${content.paragraph.backgroundColor}`}>
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={content.hero.backgroundImage}
            alt="Tattoo aftercare"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: content.hero.overlayOpacity }}
          ></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-['Abril_Fatface',cursive] max-w-4xl leading-tight">
            {content.hero.heading}
          </h1>
          <div className={`w-24 h-1 bg-${content.hero.accentColor} mt-8`}></div>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="w-full py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className={`text-${content.paragraph.textColor} text-lg md:text-xl leading-relaxed text-center`}>
            {content.paragraph.text}
          </p>
          <div className={`w-16 h-0.5 bg-${content.hero.accentColor}/50 mx-auto mt-8`}></div>
        </div>
      </section>
    </div>
  );
};

export default TatCareHero;