import React, { useState } from 'react';

const Accordion = ({ config, items }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className={`w-full bg-${config.backgroundColor} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Section Intro Text */}
        <div className="mb-12 text-center">
          <p className={`text-gray-300 text-lg md:text-xl italic border-l-4 border-${config.accentColor} pl-4 inline-block`}>
            {config.sectionIntro}
          </p>
        </div>

        {/* Accordion Items Container */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`bg-${config.cardColor}/80 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-colors`}
            >
              {/* Accordion Header - Clickable */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group hover:bg-zinc-800 transition-colors"
              >
                <span className="text-white text-lg md:text-xl font-medium flex items-center gap-3">
                  {config.usePlusMinus ? (
                    openAccordion === index ? (
                      <span className={`text-${config.accentColor} text-2xl leading-none`}>−</span>
                    ) : (
                      <span className="text-gray-400 text-2xl leading-none group-hover:text-red-400">+</span>
                    )
                  ) : (
                    <svg 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {item.question}
                </span>
              </button>

              {/* Accordion Content - with smooth animation */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-300 text-base md:text-lg border-t border-zinc-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>Have a different question? <span className={`text-${config.accentColor} hover:text-red-400 cursor-pointer`}>Contact us</span></p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;