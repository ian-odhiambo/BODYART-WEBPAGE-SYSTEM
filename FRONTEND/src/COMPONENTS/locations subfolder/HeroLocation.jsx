import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
// Import my local image
import heroImage from '../../assets/images/artists/tatoo-studio-hero.jpg';

const HeroLocation = () => {
  const content = {
    heading: {
      line1: "TATTOO AND PIERCING",
      line2: "STUDIO",
      line3: "IN NAIROBI CITY"
    },
    subheading: "SHOWCASING WORLD-RENOWNED TATTOO ARTISTS AND PIERCERS AT INKED NYC",
    buttonText: "BOOK NOW",
    buttonLink: "/book",
    walkInsText: "WALK-INS WELCOME",
    imageAlt: "Our Tattoos & Piercings Studio",
    
    bottomHeading: "QUALITY WITH EXPERIENCE",
    bottomSubheading: "OUR DISTINGUISHED TATTOO & PIERCINGS STUDIO",
    bottomParagraph: "Our Tattoos & Piercings Studio is proud to be the ultimate destination for tattoos and body piercing in Manhattan. Our full-service tattoo, piercing and fine jewelry studio, celebrates the uniting of rich art, culture, and fashion, offering an experience that blends creativity, expertise, and innovation.\n\nWe host an elite team of world-renowned NYC tattoo artists & professional piercers, each bringing their distinctive artistic vision and precision to every piece. Whether you're looking for a bold new tattoo, intricate realism, fine-line detailing, or a custom design that tells your story, our artists are here to bring your vision to life.\n\nWe carry an enormous selection of the highest quality APP-certified gold and precious stone body jewelry from top manufacturers like BVLA, Buddha, Kiwi Diamond and Industrial Strength.\n\nAs the flagship location for Inked Magazine, our Manhattan studio is rooted in a legacy of tattoo & piercing excellence. We have welcomed some of the most recognized artists & piercers in the industry and continue to be",
    
    socialLinks: [
      { icon: FaFacebookF, link: "https://facebook.com/inkednyc", label: "Facebook" },
      { icon: FaInstagram, link: "https://instagram.com/inkednyc", label: "Instagram" },
      { icon: FaTwitter, link: "https://twitter.com/inkednyc", label: "Twitter" },
      { icon: FaPinterestP, link: "https://pinterest.com/inkednyc", label: "Pinterest" }
    ]
  };

  return (
    <div className="w-full bg-zinc-900">
      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <h1 className="text-white">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-['Abril_Fatface',cursive] leading-tight">
                {content.heading.line1}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-['Abril_Fatface',cursive] leading-tight text-red-500">
                {content.heading.line2}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-['Abril_Fatface',cursive] leading-tight">
                {content.heading.line3}
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-xl">
              {content.subheading}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link 
                to={content.buttonLink}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {content.buttonText}
              </Link>
              
              <div className="flex gap-3">
                {content.socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-zinc-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <p className="text-gray-400 text-sm tracking-wider pt-2">
              {content.walkInsText}
            </p>
          </div>
          
          {/* Right Side */}
          <div className="flex-1 w-full">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-zinc-800">
              <img 
                src={heroImage} 
                alt={content.imageAlt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-right">
              Nairobi • Kimathi street
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          
          <div className="mb-8">
            <p className="text-red-500 text-sm tracking-[0.2em] mb-2">
              {content.bottomHeading}
            </p>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-['Abril_Fatface',cursive] max-w-3xl">
              {content.bottomSubheading}
            </h2>
          </div>
          
          <div className="text-gray-300 text-base md:text-lg space-y-4 max-w-5xl">
            {content.bottomParagraph.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroLocation;