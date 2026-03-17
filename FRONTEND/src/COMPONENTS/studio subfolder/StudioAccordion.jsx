import React, { useState } from 'react';

// ===== STUDIO ACCORDION COMPONENT =====
// FAQ accordion matching the screenshot with dark theme

const StudioAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // configuration
  const config = {
    backgroundColor: "zinc-900",
    cardColor: "zinc-800",
    accentColor: "red-600",
    sectionIntro: "FREQUENTLY ASKED QUESTIONS",
    usePlusMinus: true // Using plus/minus icons as shown
  };

  //faq items
  const items = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling us at +254 700 000 000, emailing appts@inkedshopnyc.com, or visiting our studio in person. We also offer online booking through our website for your convenience."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "Yes, we welcome walk-ins based on artist availability. However, we recommend booking an appointment to ensure your preferred time and artist, especially on weekends."
    },
    {
      question: "How much does a tattoo cost?",
      answer: "Our shop minimum is 3500ksh, but the final price depends on several factors, including size, detail, placement, and the artist’s experience. Your tattoo artist will provide an estimate based on your specific design and vision."
    },
    {
      question: "How should I prepare for my tattoo session?",
      answer: "Get a good night’s rest, eat a meal beforehand, and stay hydrated. Avoid alcohol and excessive caffeine before your appointment.."
    },
    {
      question: "What is the healing process for tattoos and piercings?",
      answer: "Our team provides aftercare instructions to ensure proper healing. Tattoos typically take about four weeks to heal, while piercings vary based on placement.."
    },
    {
      question: "Do you offer tattoo removal services?",
      answer: "No, we don’t offer laser tattoo removals. However, we specialize in expert cover-up work, transforming old or unwanted tattoos into fresh new designs. Our skilled tattoo artists can work with you to create a new piece that seamlessly integrates with or conceals your existing ink.."
    },
    {
      question: "Do you offer numbing options?",
      answer: "We do not provide numbing services, but you may discuss pain management options with your artist before your session."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, cash, and digital payments like Apple Pay and Google Pay. A deposit is required for appointments.We accept major credit cards, debit cards, and cash. Please note that tips for artists are appreciated and often given in cash."
    }
  ];

  return (
    <section className={`w-full bg-${config.backgroundColor} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        
        {/* heading for the paragraph */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-4">
            {config.sectionIntro}
          </h2>
          <div className={`w-24 h-1 bg-${config.accentColor} mx-auto`}></div>
        </div>

        {/* accordion items */}
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
                  {/* Plus/Minus Icons for toggling the accorddion */}
                  {openAccordion === index ? (
                    <span className={`text-${config.accentColor} text-2xl leading-none font-bold`}>−</span>
                  ) : (
                    <span className="text-gray-400 text-2xl leading-none group-hover:text-red-400 font-bold">+</span>
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
                <div className="px-6 pb-6 pt-2 text-gray-300 text-base md:text-lg border-t border-zinc-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>
            Have a different question?{' '}
            <span className={`text-${config.accentColor} hover:text-red-400 cursor-pointer font-medium`}>
              Contact us
            </span>
          </p>
        </div>

        {/*  small print */}
        <div className="text-center text-gray-600 text-xs mt-6">
          <p>Walk-ins welcome • Free consultations available</p>
        </div>
      </div>
    </section>
  );
};

export default StudioAccordion;