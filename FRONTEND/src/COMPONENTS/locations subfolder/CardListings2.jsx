import React from 'react';
import cardData from '../../data/CardListings2Data.json';

// ===== ICON COMPONENTS MAPPING =====
// Maps iconType from JSON to actual SVG components
const IconComponents = {
  user: (
    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  ),
  
  styles: (
    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
  ),
  
  safety: (
    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  
  location: (
    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  
  custom: (
    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    </svg>
  )
};

const CardListings2 = () => {
  // Get cards data from JSON
  const { cards } = cardData;

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      {/* ===== BACKGROUND IMAGE WITH OVERLAY ===== */}
      <div className="absolute inset-0 z-0">
        {/* Tattoo-style background image from Unsplash */}
        <img 
          src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Tattoo studio background with tattoo machines and ink" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-4">
            WHAT WE OFFER
          </h2>
          <h3 className="text-gray-200 text-xl md:text-2xl mb-6">
            WHY CHOOSE OUR NYC TATTOO SHOP?
          </h3>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* ===== CARD GRID ===== */}
        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-8 
                         border border-white/10 hover:border-red-600/50
                         transition-all duration-300 
                         hover:shadow-2xl hover:shadow-red-600/20
                         hover:-translate-y-1"
            >
              {/* Icon at top - matches screenshot position */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-black/60 rounded-full 
                              flex items-center justify-center
                              group-hover:bg-red-600/20 transition-colors duration-300
                              border border-white/10">
                  {IconComponents[card.iconType]}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-white text-xl font-bold mb-4 
                           tracking-wide group-hover:text-red-400 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Decorative line under title (matches screenshot) */}
              <div className="w-12 h-0.5 bg-red-600/70 mb-4"></div>

              {/* Card Description - Lighter color for better contrast on image */}
              <p className="text-gray-200 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default CardListings2;