import React from 'react';
import { Link } from 'react-router-dom';

const VisitUs = () => {
  // ===== CONFIGURABLE CONTENT =====
  const content = {
    // Image settings
    image: {
      url: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Our Tattoo & Piercings studio interior",
      overlayOpacity: "bg-black/60" // Adjust for darkness
    },
    
    // Text content
    text: {
      mainHeading: "VISIT US AT KIMATHI STREETS,NAIROBI",
      introParagraph: "Whether you're around town and want to have a detour at our Tattoos and Piercings studios, Tattoos and Piercings studios is your go-to destination for top-tier tattoos and body piercings. Stop by, chat with our friendly tattoo artists, and discover how much distuingeshed studios we have from the rest.",
      
      address: {
        street: "Kimathi Street",
        city: "Nairobi, cbd",
        phone: "+254 700000000",
        email: "tatsandpiercings@example.com"
      },
      
      hours: {
        heading: "HOURS OF OPERATION",
        weekdays: "Mon – Sat ...... 11am – 9pm",
        sunday: "Sun ............ 12pm – 8pm"
      },
      
      call: {
        heading: "GIVE US A CALL",
        number: "+254 700000000"
      },
      
      description: "Explore our quality body art which speaks for itself a fusion of artistic expression, culture, and cutting-edge tattoo artistry. From the moment you walk through our doors, you're stepping into a creative space where world-class tattoo artists and passionate clients come together to bring bold ideas to life.",
      
      buttonText: "BOOK NOW",
      buttonLink: "/book",
      
      immersive: {
        heading: "AN IMMERSIVE TATTOO EXPERIENCE",
        text: "Tattoos & Piercings Studios is not your average tattoo studio. Our studio is designed to be an immersive experience where clients can engage with the culture of tattooing on a deeper level. With sleek interiors, a gallery-style layout, and an atmosphere buzzing with creativity, our studio sets the stage for an unforgettable tattoo/piercings journey."
      }
    },
    
    // Styling
    accentColor: "red-600",
    bgColor: "zinc-800",
    textColor: "gray-300"
  };

  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] overflow-hidden group">
            <img 
              src={content.image.url}
              alt={content.image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className={`absolute inset-0 ${content.image.overlayOpacity}`}></div>
          </div>
          
          {/* Right Column - Text */}
          <div className={`lg:w-1/2 bg-${content.bgColor} p-8 md:p-12 lg:p-16 flex flex-col justify-center`}>
            
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              {content.text.mainHeading}
            </h2>
            
            <p className={`text-${content.textColor} text-lg mb-8 leading-relaxed`}>
              {content.text.introParagraph}
            </p>
            
            {/* Address */}
            <div className="mb-8 text-gray-300">
              <p className="text-white font-semibold mb-2">ADDRESS</p>
              <p>{content.text.address.street}</p>
              <p>{content.text.address.city}</p>
              <p className={`text-${content.accentColor} mt-2`}>{content.text.address.phone}</p>
              <p className="text-gray-300">{content.text.address.email}</p>
            </div>
            
            {/* Hours */}
            <div className="mb-8">
              <h3 className="text-white text-2xl font-['Abril_Fatface',cursive] mb-4">
                {content.text.hours.heading}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>{content.text.hours.weekdays}</p>
                <p>{content.text.hours.sunday}</p>
              </div>
            </div>
            
            {/* Call */}
            <div className="mb-8">
              <h3 className="text-white text-2xl font-['Abril_Fatface',cursive] mb-4">
                {content.text.call.heading}
              </h3>
              <p className={`text-${content.accentColor} text-2xl font-bold`}>
                {content.text.call.number}
              </p>
            </div>
            
            {/* Description */}
            <p className={`text-${content.textColor} text-lg mb-8 leading-relaxed`}>
              {content.text.description}
            </p>
            
            {/* Button */}
            <Link 
              to={content.text.buttonLink}
              className={`inline-block bg-${content.accentColor} hover:bg-${content.accentColor.replace('600', '700')} text-white font-bold text-lg px-8 py-4 rounded-md w-fit transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              {content.text.buttonText}
            </Link>
            
            {/* Divider */}
            <div className="w-full h-px bg-zinc-700 my-8"></div>
            
            {/* Immersive Experience */}
            <div>
              <h3 className="text-white text-2xl font-['Abril_Fatface',cursive] mb-4">
                {content.text.immersive.heading}
              </h3>
              <p className={`text-${content.textColor} text-lg leading-relaxed`}>
                {content.text.immersive.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;